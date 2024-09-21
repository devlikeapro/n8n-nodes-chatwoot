import {
    IAuthenticateGeneric, ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class ChatWootApi implements ICredentialType {
    name = 'chatwootApi';
    displayName = 'ChatWoot API';
    documentationUrl = 'https://www.chatwoot.com/docs/contributing-guide/chatwoot-apis';
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
            displayName:
                "There's many " +
                "<a href='https://www.chatwoot.com/docs/contributing-guide/chatwoot-apis' target='_blank'></a><b>Access Token Types</b> in <b>ChatWoot</b></a>," +
                " so we just check that <code>{{url}}/api</code> is accessible without token.",
            default: '',
            name: 'operation',
            type: 'notice',
        },
        {
            displayName: 'Access Token',
            name: 'accessToken',
            type: 'string',
            placeholder: "00000000-0000-0000-0000-000000000000",
            default: '',
            required: true,
            typeOptions: {password: true},
        },
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
