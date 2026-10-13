type CatalogFieldBase = {
	/** The request body key. */
	name: string;
	description: string | null;
	required: boolean;
	/** The value the API uses when the field is left out, as text. */
	defaultLabel: string | null;
};

/** A single-value input of an endpoint. */
export type CatalogLeafField = CatalogFieldBase &
	(
		| { type: 'string'; input: 'text' | 'date' }
		| { type: 'number'; integer: boolean }
		| { type: 'boolean' }
		| { type: 'enum'; options: string[] }
		| { type: 'stringArray' }
	);

/** An input of an endpoint. `object` groups related inputs, such as a range filter. */
export type CatalogField =
	CatalogLeafField | (CatalogFieldBase & { type: 'object'; fields: CatalogLeafField[] });

/** One Bridgly API endpoint, as listed by the endpoint directory. */
export type CatalogEndpoint = {
	id: string;
	platform: string;
	title: string;
	description: string;
	method: 'GET' | 'POST';
	path: string;
	fields: CatalogField[];
};
