import type { INodeProperties, INodePropertyOptions, INodePropertyRouting } from 'n8n-workflow';
import type { CatalogEndpoint, CatalogLeafField } from './endpoints.generated';
import { endpoints } from './endpoints.generated';

/** Names shown for the bounds of a range filter. */
const RANGE_BOUND_NAMES: Record<string, string> = {
	gt: 'Greater Than',
	gte: 'Greater Than or Equal',
	lt: 'Less Than',
	lte: 'Less Than or Equal',
};

/** Turns `camelCase` and `kebab-case/paths` into `Title Case` words. */
function toTitleCase(value: string): string {
	return value
		.replace(/([a-z\d])([A-Z])/g, '$1 $2')
		.split(/[^A-Za-z\d]+/)
		.filter((word) => word.length > 0)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
		.replace(/\bUrl\b/g, 'URL')
		.replace(/\bUrn\b/g, 'URN')
		.replace(/\bId\b/g, 'ID');
}

/** The resource an endpoint belongs to: its platform, or the account itself. */
function toResource(endpoint: CatalogEndpoint): { name: string; value: string } {
	if (endpoint.platform === 'Bridgly') return { name: 'Account', value: 'account' };
	const value = endpoint.path.split('/').filter((part) => part.length > 0)[0];
	return { name: endpoint.platform, value };
}

/** The operation name, from the path after the platform: `search/jobs` → `Search Jobs`. */
function toOperationName(endpoint: CatalogEndpoint): string {
	if (endpoint.platform === 'Bridgly') return 'Get Credit Balance';
	const name = toTitleCase(endpoint.path.split('/').slice(2).join(' '));
	// Paths that only name a thing, like `/instagram/user`, read it.
	return /^(Get|List|Search) /.test(`${name} `) ? name : `Get ${name}`;
}

/** n8n drops a single sentence's final period from descriptions. */
function toDescription(text: string | null): string | undefined {
	if (text == null) return undefined;
	const trimmed = text.trim();
	const isSingleSentence = trimmed.indexOf('. ') === -1;
	return isSingleSentence ? trimmed.replace(/\.$/, '') : trimmed;
}

function byName<T extends { name: string }>(a: T, b: T): number {
	return a.name.localeCompare(b.name);
}

function byDisplayName(a: INodeProperties, b: INodeProperties): number {
	return a.displayName.localeCompare(b.displayName);
}

const resources = endpoints
	.map(toResource)
	.filter((resource, index, all) => all.findIndex((r) => r.value === resource.value) === index);

// The default is the first resource in the catalog, which the linter cannot see is set.
// eslint-disable-next-line n8n-nodes-base/node-param-default-missing
export const resourceProperty: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: resources,
	default: resources[0].value,
};

function toOperation(endpoint: CatalogEndpoint): INodePropertyOptions {
	return {
		name: toOperationName(endpoint),
		value: endpoint.id,
		action: endpoint.title,
		description: toDescription(endpoint.description),
		routing: {
			request: { method: endpoint.method, url: endpoint.path },
			// Data endpoints wrap their result as `{ timeMs, creditsCost, data }`.
			...(endpoint.platform === 'Bridgly'
				? {}
				: {
						output: {
							postReceive: [{ type: 'rootProperty', properties: { property: 'data' } }],
						},
					}),
		},
	};
}

/** One "Operation" dropdown per resource, listing that platform's endpoints. */
export const operationProperties: INodeProperties[] = resources.map((resource) => {
	const options = endpoints
		.filter((endpoint) => toResource(endpoint).value === resource.value)
		.map(toOperation)
		.sort(byName);
	// The default is this resource's first operation, which the linter cannot see is set.
	// eslint-disable-next-line n8n-nodes-base/node-param-default-missing
	return {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: [resource.value] } },
		options,
		default: options[0].value,
	};
});

/** The n8n input for one field, sent as `bodyPath` in the request body. */
function toInput({
	field,
	displayName,
	name,
	bodyPath,
}: {
	field: CatalogLeafField;
	displayName: string;
	name: string;
	bodyPath: string;
}): INodeProperties {
	const routing: INodePropertyRouting = { send: { type: 'body', property: bodyPath } };
	const shared = {
		displayName,
		name,
		description: toDescription(field.description),
		routing,
	};

	if (field.type === 'number') {
		return {
			...shared,
			type: 'number',
			typeOptions: field.integer ? { numberPrecision: 0 } : {},
			default: field.defaultLabel == null ? 0 : Number(field.defaultLabel),
		};
	}
	if (field.type === 'boolean') {
		return { ...shared, type: 'boolean', default: field.defaultLabel === 'true' };
	}
	if (field.type === 'enum') {
		return {
			...shared,
			type: 'options',
			options: field.options
				.map((option) => ({ name: toTitleCase(option), value: option }))
				.sort(byName),
			default: field.defaultLabel ?? field.options[0],
		};
	}
	if (field.type === 'stringArray') {
		return {
			...shared,
			type: 'string',
			default: '',
			hint: 'Separate several values with commas',
			routing: {
				send: {
					type: 'body',
					property: bodyPath,
					value: '={{ $value.split(",").map((item) => item.trim()).filter((item) => item) }}',
				},
			},
		};
	}
	return {
		...shared,
		type: 'string',
		default: '',
		...(field.input === 'date'
			? {
					placeholder: 'YYYY-MM-DD',
				}
			: {}),
	};
}

/** Every input of an endpoint as a flat list, with range filters spread into their bounds. */
function toInputs(endpoint: CatalogEndpoint): { input: INodeProperties; required: boolean }[] {
	return endpoint.fields.flatMap((field) => {
		if (field.type !== 'object') {
			return [
				{
					input: toInput({
						field,
						displayName: toTitleCase(field.name),
						name: field.name,
						bodyPath: field.name,
					}),
					required: field.required,
				},
			];
		}
		return field.fields.map((bound) => ({
			input: toInput({
				field: bound,
				displayName: `${toTitleCase(field.name)} ${RANGE_BOUND_NAMES[bound.name] ?? toTitleCase(bound.name)}`,
				name: `${field.name}_${bound.name}`,
				bodyPath: `${field.name}.${bound.name}`,
			}),
			required: false,
		}));
	});
}

/**
 * The inputs of every endpoint, shown only for its own operation: required
 * ones directly, optional ones under an "Additional Fields" collection so they
 * are only sent when the user adds them.
 */
export const fieldProperties: INodeProperties[] = endpoints.flatMap((endpoint) => {
	const show = { resource: [toResource(endpoint).value], operation: [endpoint.id] };
	const inputs = toInputs(endpoint);
	const required = inputs
		.filter((entry) => entry.required)
		.map(({ input }) => ({ ...input, required: true, displayOptions: { show } }));
	const optional = inputs
		.filter((entry) => !entry.required)
		.map(({ input }) => input)
		.sort(byDisplayName);
	if (optional.length === 0) return required;

	return [
		...required,
		{
			displayName: 'Additional Fields',
			name: 'additionalFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions: { show },
			options: optional,
		},
	];
});
