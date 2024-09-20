import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './ChatWootDescription';

export class ChatWoot implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ChatWoot',
		name: 'httpBin',
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
				name: 'httpbinApi',
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
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},

			...httpVerbOperations,
			...httpVerbFields,
		],
	};
}
