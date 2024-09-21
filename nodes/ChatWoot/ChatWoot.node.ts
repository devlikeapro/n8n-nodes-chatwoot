import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class ChatWoot implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'ChatWoot',
        name: 'chatWoot',
        icon: 'file:chatwoot.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with ChatWoot API',
        defaults: {
            name: 'ChatWoot',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'chatwootApi',
                required: false,
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
