import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { fieldProperties, operationProperties, resourceProperty } from './catalog/properties';

export class Bridgly implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Bridgly',
		name: 'bridgly',
		icon: { light: 'file:../../icons/bridgly.svg', dark: 'file:../../icons/bridgly.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description:
			'Get profiles, posts, comments and search results from social media and developer platforms',
		defaults: {
			name: 'Bridgly',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'bridglyApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.bridgly.app',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [resourceProperty, ...operationProperties, ...fieldProperties],
	};
}
