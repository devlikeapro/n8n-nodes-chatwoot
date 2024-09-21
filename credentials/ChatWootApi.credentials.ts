import {
	IAuthenticateGeneric, ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ChatWootApi implements ICredentialType {
	name = 'chatwootApi';
	displayName = 'ChatWoot API';
	documentationUrl = 'https://github.com/sufficit/n8n-nodes-chatwoot/docs/auth';
	properties: INodeProperties[] = [
		{
			displayName: 'ChatWoot API URL',
			name: 'url',
			placeholder: "https://www.chatwoot.com",
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			placeholder: "00000000-0000-0000-0000-000000000000",
			default: '',
			required: true,
			typeOptions: { password: true },
		}
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api_access_token': '={{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '/api',
		},
	};
}
