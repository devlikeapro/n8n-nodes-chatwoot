import {INodeType, INodeTypeDescription, NodeConnectionTypes} from 'n8n-workflow';
import properties from "./openapi/resources";

export class ChatWoot implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'ChatWoot',
        name: 'chatWoot',
        icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
        group: ['transform'],
        usableAsTool: true,
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with ChatWoot API',
        defaults: {
            name: 'ChatWoot',
        },
        inputs: [NodeConnectionTypes.Main],
        outputs: [NodeConnectionTypes.Main],
        credentials: [
            {
                name: 'chatwootApi',
                required: true,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: '={{$credentials.url}}',
        },
        properties: properties,
    };
}
