import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { OpenAPIN8NParser, ParserConfig } from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: ParserConfig = {}
const parser = new OpenAPIN8NParser(doc, config);
const properties = parser.process()

export class ChatWoot implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ChatWoot',
		name: 'chatWoot',
		icon: 'file:chatwoot.png',
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
			baseURL: 'https://httpbin.org',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: properties,
	};
}
