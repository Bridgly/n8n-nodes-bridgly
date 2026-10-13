import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BridglyApi implements ICredentialType {
	name = 'bridglyApi';

	displayName = 'Bridgly API';

	icon: Icon = { light: 'file:../icons/bridgly.svg', dark: 'file:../icons/bridgly.dark.svg' };

	documentationUrl = 'https://docs.bridgly.app/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			placeholder: 'bgly_…',
			description: 'Create a key on the API Keys page of your Bridgly dashboard',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.bridgly.app',
			url: '/billing',
			method: 'GET',
		},
	};
}
