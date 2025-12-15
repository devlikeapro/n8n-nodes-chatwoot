import { INodeProperties } from 'n8n-workflow';

const properties: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
      {
        name: 'Accounts',
        value: 'Accounts',
        description: 'Account management APIs',
      },
      {
        name: 'Account Users',
        value: 'Account Users',
        description: 'Account user management APIs',
      },
      {
        name: 'Agent Bots',
        value: 'Agent Bots',
        description: 'Bot integrations',
      },
      {
        name: 'Users',
        value: 'Users',
        description: 'User management APIs',
      },
      {
        name: 'Inbox API',
        value: 'Inbox API',
      },
      {
        name: 'Contacts',
        value: 'Contacts',
        description: 'Contact management APIs',
      },
      {
        name: 'Contact Labels',
        value: 'Contact Labels',
        description: 'Manage contact labels',
      },
      {
        name: 'Conversation Assignments',
        value: 'Conversation Assignments',
        description: 'Manage conversation assignments',
      },
      {
        name: 'Conversation Labels',
        value: 'Conversation Labels',
        description: 'Manage conversation labels',
      },
      {
        name: 'Conversations',
        value: 'Conversations',
        description: 'Conversation management APIs',
      },
      {
        name: 'Custom Filters',
        value: 'Custom Filters',
        description: 'Saved filters for conversations',
      },
      {
        name: 'Inboxes',
        value: 'Inboxes',
        description: 'Communication channels setup',
      },
      {
        name: 'Integrations',
        value: 'Integrations',
        description: 'Third-party integrations',
      },
      {
        name: 'Messages',
        value: 'Messages',
        description: 'Message management APIs',
      },
      {
        name: 'Profile',
        value: 'Profile',
        description: 'User profile APIs',
      },
      {
        name: 'Reports',
        value: 'Reports',
        description: 'Analytics and reporting APIs',
      },
      {
        name: 'Automation Rule',
        value: 'Automation Rule',
        description: 'Workflow automation rules',
      },
      {
        name: 'Help Center',
        value: 'Help Center',
        description: 'Knowledge base management',
      },
      {
        name: 'Contacts API',
        value: 'Contacts API',
        description: 'Public contact APIs',
      },
      {
        name: 'Conversations API',
        value: 'Conversations API',
        description: 'Public conversation APIs',
      },
      {
        name: 'Messages API',
        value: 'Messages API',
        description: 'Public message APIs',
      },
      {
        name: 'CSAT Survey Page',
        value: 'CSAT Survey Page',
        description: 'Customer satisfaction survey',
      },
      {
        name: 'Account',
        value: 'Account',
      },
      {
        name: 'Audit Logs',
        value: 'Audit Logs',
      },
      {
        name: 'Account Agent Bots',
        value: 'Account Agent Bots',
        description: 'Account-specific Agent Bots',
      },
      {
        name: 'Agents',
        value: 'Agents',
        description: 'Agent management APIs',
      },
      {
        name: 'Canned Responses',
        value: 'Canned Responses',
        description: 'Pre-defined responses for common queries',
      },
      {
        name: 'Custom Attributes',
        value: 'Custom Attributes',
        description: 'Custom fields for contacts and conversations',
      },
      {
        name: 'Teams',
        value: 'Teams',
        description: 'Team management APIs',
      },
      {
        name: 'Webhooks',
        value: 'Webhooks',
        description: 'Event notification webhooks',
      },
      {
        name: 'Conversation',
        value: 'Conversation',
      },
    ],
    default: 'Accounts',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Accounts'],
      },
    },
    options: [
      {
        name: 'Create An Account',
        value: 'Create An Account',
        action: 'Create an Account',
        description: 'Create an Account',
        routing: {
          request: {
            method: 'POST',
            url: '=/platform/api/v1/accounts',
          },
        },
      },
      {
        name: 'Delete An Account',
        value: 'Delete An Account',
        action: 'Delete an Account',
        description: 'Delete an Account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}',
          },
        },
      },
      {
        name: 'Get Details Of An Account',
        value: 'Get Details Of An Account',
        action: 'Get an account details',
        description: 'Get the details of an account',
        routing: {
          request: {
            method: 'GET',
            url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}',
          },
        },
      },
      {
        name: 'Update An Account',
        value: 'Update An Account',
        action: 'Update an account',
        description: "Update an account's attributes",
        routing: {
          request: {
            method: 'PATCH',
            url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}',
          },
        },
      },
    ],
    default: 'Create An Account',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Account Users'],
      },
    },
    options: [
      {
        name: 'Create An Account User',
        value: 'Create An Account User',
        action: 'Create an Account User',
        description: 'Create an Account User',
        routing: {
          request: {
            method: 'POST',
            url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}/account_users',
          },
        },
      },
      {
        name: 'Delete An Account User',
        value: 'Delete An Account User',
        action: 'Delete an Account User',
        description: 'Delete an Account User',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}/account_users',
          },
        },
      },
      {
        name: 'List All Account Users',
        value: 'List All Account Users',
        action: 'List all Account Users',
        description: 'List all account users',
        routing: {
          request: {
            method: 'GET',
            url: '=/platform/api/v1/accounts/{{$parameter["account_id"]}}/account_users',
          },
        },
      },
    ],
    default: 'Create An Account User',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
      },
    },
    options: [
      {
        name: 'Create An Agent Bot',
        value: 'Create An Agent Bot',
        action: 'Create an Agent Bot',
        description: 'Create an agent bot',
        routing: {
          request: {
            method: 'POST',
            url: '=/platform/api/v1/agent_bots',
          },
        },
      },
      {
        name: 'Delete An Agent Bot',
        value: 'Delete An Agent Bot',
        action: 'Delete an AgentBot',
        description: 'Delete an AgentBot',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/platform/api/v1/agent_bots/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Details Of A Single Agent Bot',
        value: 'Get Details Of A Single Agent Bot',
        action: 'Get an agent bot details',
        description: 'Get the details of an agent bot',
        routing: {
          request: {
            method: 'GET',
            url: '=/platform/api/v1/agent_bots/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'List All Agent Bots',
        value: 'List All Agent Bots',
        action: 'List all AgentBots',
        description: 'List all agent bots available',
        routing: {
          request: {
            method: 'GET',
            url: '=/platform/api/v1/agent_bots',
          },
        },
      },
      {
        name: 'Update An Agent Bot',
        value: 'Update An Agent Bot',
        action: 'Update an agent bot',
        description: "Update an agent bot's attributes",
        routing: {
          request: {
            method: 'PATCH',
            url: '=/platform/api/v1/agent_bots/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Create An Agent Bot',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Users'],
      },
    },
    options: [
      {
        name: 'Create A User',
        value: 'Create A User',
        action: 'Create a User',
        description: 'Create a User',
        routing: {
          request: {
            method: 'POST',
            url: '=/platform/api/v1/users',
          },
        },
      },
      {
        name: 'Delete A User',
        value: 'Delete A User',
        action: 'Delete a User',
        description: 'Delete a User',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/platform/api/v1/users/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Details Of A User',
        value: 'Get Details Of A User',
        action: 'Get an user details',
        description: 'Get the details of an user',
        routing: {
          request: {
            method: 'GET',
            url: '=/platform/api/v1/users/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Sso Url Of A User',
        value: 'Get Sso Url Of A User',
        action: 'Get User SSO Link',
        description: 'Get the sso link of a user',
        routing: {
          request: {
            method: 'GET',
            url: '=/platform/api/v1/users/{{$parameter["id"]}}/login',
          },
        },
      },
      {
        name: 'Update A User',
        value: 'Update A User',
        action: 'Update a user',
        description: "Update a user's attributes",
        routing: {
          request: {
            method: 'PATCH',
            url: '=/platform/api/v1/users/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Create A User',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Inbox API'],
      },
    },
    options: [
      {
        name: 'Get Details Of A Inbox',
        value: 'Get Details Of A Inbox',
        action: 'Inbox details',
        description: 'Get the details of an inbox',
        routing: {
          request: {
            method: 'GET',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}',
          },
        },
      },
    ],
    default: 'Get Details Of A Inbox',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Contacts API'],
      },
    },
    options: [
      {
        name: 'Create A Contact',
        value: 'Create A Contact',
        action: 'Create a contact',
        description: 'Create a contact',
        routing: {
          request: {
            method: 'POST',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts',
          },
        },
      },
      {
        name: 'Get Details Of A Contact',
        value: 'Get Details Of A Contact',
        action: 'Get a contact',
        description: 'Get the details of a contact',
        routing: {
          request: {
            method: 'GET',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}',
          },
        },
      },
      {
        name: 'Update A Contact',
        value: 'Update A Contact',
        action: 'Update a contact',
        description: "Update a contact's attributes",
        routing: {
          request: {
            method: 'PATCH',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}',
          },
        },
      },
    ],
    default: 'Create A Contact',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Conversations API'],
      },
    },
    options: [
      {
        name: 'Create A Conversation',
        value: 'Create A Conversation',
        action: 'Create a conversation',
        description: 'Create a conversation',
        routing: {
          request: {
            method: 'POST',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations',
          },
        },
      },
      {
        name: 'Get Single Conversation',
        value: 'Get Single Conversation',
        action: 'Get a single conversation',
        description: 'Retrieves the details of a specific conversation',
        routing: {
          request: {
            method: 'GET',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}',
          },
        },
      },
      {
        name: 'List All Contact Conversations',
        value: 'List All Contact Conversations',
        action: 'List all conversations',
        description: 'List all conversations for the contact',
        routing: {
          request: {
            method: 'GET',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations',
          },
        },
      },
      {
        name: 'Resolve Conversation',
        value: 'Resolve Conversation',
        action: 'Resolve a conversation',
        description: 'Marks a conversation as resolved',
        routing: {
          request: {
            method: 'POST',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_status',
          },
        },
      },
      {
        name: 'Toggle Typing Status',
        value: 'Toggle Typing Status',
        action: 'Toggle typing status',
        description: 'Toggles the typing status in a conversation',
        routing: {
          request: {
            method: 'POST',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_typing',
          },
        },
      },
      {
        name: 'Update Last Seen',
        value: 'Update Last Seen',
        action: 'Update last seen',
        description:
          'Updates the last seen time of the contact in a conversation',
        routing: {
          request: {
            method: 'POST',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/update_last_seen',
          },
        },
      },
    ],
    default: 'Create A Conversation',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Messages API'],
      },
    },
    options: [
      {
        name: 'Create A Message',
        value: 'Create A Message',
        action: 'Create a message',
        description: 'Create a message',
        routing: {
          request: {
            method: 'POST',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
          },
        },
      },
      {
        name: 'List All Converation Messages',
        value: 'List All Converation Messages',
        action: 'List all messages',
        description: 'List all messages in the conversation',
        routing: {
          request: {
            method: 'GET',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
          },
        },
      },
      {
        name: 'Update A Message',
        value: 'Update A Message',
        action: 'Update a message',
        description: 'Update a message',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/public/api/v1/inboxes/{{$parameter["inbox_identifier"]}}/contacts/{{$parameter["contact_identifier"]}}/conversations/{{$parameter["conversation_id"]}}/messages/{{$parameter["message_id"]}}',
          },
        },
      },
    ],
    default: 'Create A Message',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['CSAT Survey Page'],
      },
    },
    options: [
      {
        name: 'Get Csat Survey Page',
        value: 'Get Csat Survey Page',
        action: 'Get CSAT survey page',
        description:
          'You can redirect the client to this URL, instead of implementing the CSAT survey component yourself.',
        routing: {
          request: {
            method: 'GET',
            url: '=/survey/responses/{{$parameter["conversation_uuid"]}}',
          },
        },
      },
    ],
    default: 'Get Csat Survey Page',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Account'],
      },
    },
    options: [
      {
        name: 'Get Account Details',
        value: 'Get Account Details',
        action: 'Get account details',
        description: 'Get the details of the current account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Update Account',
        value: 'Update Account',
        action: 'Update account',
        description: 'Update account details, settings, and custom attributes',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Get Account Details',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Audit Logs'],
      },
    },
    options: [
      {
        name: 'Get Account Audit Logs',
        value: 'Get Account Audit Logs',
        action: 'List Audit Logs in Account',
        description:
          'Get Details of Audit Log entries for an Account. This endpoint is only available in Enterprise editions and requires the audit_logs feature to be enabled.',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/audit_logs',
          },
        },
      },
    ],
    default: 'Get Account Audit Logs',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
      },
    },
    options: [
      {
        name: 'Create An Account Agent Bot',
        value: 'Create An Account Agent Bot',
        action: 'Create an Agent Bot',
        description: 'Create an agent bot in the account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots',
          },
        },
      },
      {
        name: 'Delete An Account Agent Bot',
        value: 'Delete An Account Agent Bot',
        action: 'Delete an AgentBot',
        description: 'Delete an AgentBot from the account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Details Of A Single Account Agent Bot',
        value: 'Get Details Of A Single Account Agent Bot',
        action: 'Get an agent bot details',
        description: 'Get the details of an agent bot in the account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'List All Account Agent Bots',
        value: 'List All Account Agent Bots',
        action: 'List all AgentBots',
        description: 'List all agent bots available for the current account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots',
          },
        },
      },
      {
        name: 'Update An Account Agent Bot',
        value: 'Update An Account Agent Bot',
        action: 'Update an agent bot',
        description: "Update an agent bot's attributes",
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agent_bots/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Create An Account Agent Bot',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Agents'],
      },
    },
    options: [
      {
        name: 'Add New Agent To Account',
        value: 'Add New Agent To Account',
        action: 'Add a New Agent',
        description: 'Add a new Agent to Account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents',
          },
        },
      },
      {
        name: 'Delete Agent From Account',
        value: 'Delete Agent From Account',
        action: 'Remove an Agent from Account',
        description: 'Remove an Agent from Account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Account Agents',
        value: 'Get Account Agents',
        action: 'List Agents in Account',
        description: 'Get Details of Agents in an Account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents',
          },
        },
      },
      {
        name: 'Update Agent In Account',
        value: 'Update Agent In Account',
        action: 'Update Agent in Account',
        description: 'Update an Agent in Account',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/agents/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Add New Agent To Account',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
      },
    },
    options: [
      {
        name: 'Add New Canned Response To Account',
        value: 'Add New Canned Response To Account',
        action: 'Add a New Canned Response',
        description: 'Add a new Canned Response to Account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses',
          },
        },
      },
      {
        name: 'Delete Canned Response From Account',
        value: 'Delete Canned Response From Account',
        action: 'Remove a Canned Response from Account',
        description: 'Remove a Canned Response from Account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Account Canned Response',
        value: 'Get Account Canned Response',
        action: 'List all Canned Responses in an Account',
        description: 'Get Details of Canned Responses in an Account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses',
          },
        },
      },
      {
        name: 'Update Canned Response In Account',
        value: 'Update Canned Response In Account',
        action: 'Update Canned Response in Account',
        description: 'Update a Canned Response in Account',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/canned_responses/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Add New Canned Response To Account',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
      },
    },
    options: [
      {
        name: 'Add New Custom Attribute To Account',
        value: 'Add New Custom Attribute To Account',
        action: 'Add a new custom attribute',
        description: 'Add a new custom attribute to account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions',
          },
        },
      },
      {
        name: 'Delete Custom Attribute From Account',
        value: 'Delete Custom Attribute From Account',
        action: 'Remove a custom attribute from account',
        description: 'Remove a custom attribute from account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Account Custom Attribute',
        value: 'Get Account Custom Attribute',
        action: 'List all custom attributes in an account',
        description: 'Get details of custom attributes in an Account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions',
          },
        },
      },
      {
        name: 'Get Details Of A Single Custom Attribute',
        value: 'Get Details Of A Single Custom Attribute',
        action: 'Get a custom attribute details',
        description: 'Get the details of a custom attribute in the account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Update Custom Attribute In Account',
        value: 'Update Custom Attribute In Account',
        action: 'Update custom attribute in Account',
        description: 'Update a custom attribute in account',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_attribute_definitions/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Add New Custom Attribute To Account',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Contacts'],
      },
    },
    options: [
      {
        name: 'Contact Conversations',
        value: 'Contact Conversations',
        action: 'Contact Conversations',
        description: 'Get conversations associated with that contact',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/conversations',
          },
        },
      },
      {
        name: 'Contact Create',
        value: 'Contact Create',
        action: 'Create Contact',
        description: 'Create a new Contact',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts',
          },
        },
      },
      {
        name: 'Contact Delete',
        value: 'Contact Delete',
        action: 'Delete Contact',
        description: 'Delete a contact belonging to the account using ID',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Contact Details',
        value: 'Contact Details',
        action: 'Show Contact',
        description: 'Get a contact belonging to the account using ID',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Contact Filter',
        value: 'Contact Filter',
        action: 'Contact Filter',
        description:
          'Filter contacts with custom filter options and pagination',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/filter',
          },
        },
      },
      {
        name: 'Contact Inbox Creation',
        value: 'Contact Inbox Creation',
        action: 'Create contact inbox',
        description: 'Create a contact inbox record for an inbox',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/contact_inboxes',
          },
        },
      },
      {
        name: 'Contact List',
        value: 'Contact List',
        action: 'List Contacts',
        description:
          'Listing all the resolved contacts with pagination (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts',
          },
        },
      },
      {
        name: 'Contact Search',
        value: 'Contact Search',
        action: 'Search Contacts',
        description:
          'Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/search',
          },
        },
      },
      {
        name: 'Contact Update',
        value: 'Contact Update',
        action: 'Update Contact',
        description: 'Update a contact belonging to the account using ID',
        routing: {
          request: {
            method: 'PUT',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Contactable Inboxes Get',
        value: 'Contactable Inboxes Get',
        action: 'Get Contactable Inboxes',
        description: 'Get List of contactable Inboxes',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/contactable_inboxes',
          },
        },
      },
    ],
    default: 'Contact Conversations',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Contact Labels'],
      },
    },
    options: [
      {
        name: 'Contact Add Labels',
        value: 'Contact Add Labels',
        action: 'Add Labels',
        description:
          'Add labels to a contact. Note that this API would overwrite the existing list of labels associated to the conversation.',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/labels',
          },
        },
      },
      {
        name: 'List All Labels Of A Contact',
        value: 'List All Labels Of A Contact',
        action: 'List Labels',
        description: 'Lists all the labels of a contact',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/contacts/{{$parameter["id"]}}/labels',
          },
        },
      },
    ],
    default: 'Contact Add Labels',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
      },
    },
    options: [
      {
        name: 'Add New Automation Rule To Account',
        value: 'Add New Automation Rule To Account',
        action: 'Add a new automation rule',
        description: 'Add a new automation rule to account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules',
          },
        },
      },
      {
        name: 'Delete Automation Rule From Account',
        value: 'Delete Automation Rule From Account',
        action: 'Remove a automation rule from account',
        description: 'Remove a automation rule from account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Get Account Automation Rule',
        value: 'Get Account Automation Rule',
        action: 'List all automation rules in an account',
        description: 'Get details of automation rules in an Account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules',
          },
        },
      },
      {
        name: 'Get Details Of A Single Automation Rule',
        value: 'Get Details Of A Single Automation Rule',
        action: 'Get a automation rule details',
        description: 'Get the details of a automation rule in the account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules/{{$parameter["id"]}}',
          },
        },
      },
      {
        name: 'Update Automation Rule In Account',
        value: 'Update Automation Rule In Account',
        action: 'Update automation rule in Account',
        description: 'Update a automation rule in account',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/automation_rules/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Add New Automation Rule To Account',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Help Center'],
      },
    },
    options: [
      {
        name: 'Add New Article To Account',
        value: 'Add New Article To Account',
        action: 'Add a new article',
        description: 'Add a new article to portal',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals/{{$parameter["id"]}}/articles',
          },
        },
      },
      {
        name: 'Add New Category To Account',
        value: 'Add New Category To Account',
        action: 'Add a new category',
        description: 'Add a new category to portal',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals/{{$parameter["id"]}}/categories',
          },
        },
      },
      {
        name: 'Add New Portal To Account',
        value: 'Add New Portal To Account',
        action: 'Add a new portal',
        description: 'Add a new portal to account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals',
          },
        },
      },
      {
        name: 'Get Portal',
        value: 'Get Portal',
        action: 'List all portals in an account',
        description: 'Get details of portals in an Account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals',
          },
        },
      },
      {
        name: 'Update Portal To Account',
        value: 'Update Portal To Account',
        action: 'Update a portal',
        description: 'Update a portal to account',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/portals/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Add New Article To Account',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Conversations'],
      },
    },
    options: [
      {
        name: 'Conversation Add Labels',
        value: 'Conversation Add Labels',
        action: 'Add Labels',
        description:
          'Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/labels',
          },
        },
      },
      {
        name: 'Conversation Filter',
        value: 'Conversation Filter',
        action: 'Conversations Filter',
        description:
          'Filter conversations with custom filter options and pagination',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/filter',
          },
        },
      },
      {
        name: 'Conversation List',
        value: 'Conversation List',
        action: 'Conversations List',
        description: 'List all the conversations with pagination',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations',
          },
        },
      },
      {
        name: 'Conversation List Meta',
        value: 'Conversation List Meta',
        action: 'Get Conversation Counts',
        description: 'Get open, unassigned and all Conversation counts',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/meta',
          },
        },
      },
      {
        name: 'Get Conversation Reporting Events',
        value: 'Get Conversation Reporting Events',
        action: 'Conversation Reporting Events',
        description:
          'Get reporting events for a specific conversation. This endpoint returns events such as first response time, resolution time, and other metrics for the conversation, sorted by creation time in ascending order.',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/reporting_events',
          },
        },
      },
      {
        name: 'Get Details Of A Conversation',
        value: 'Get Details Of A Conversation',
        action: 'Conversation Details',
        description:
          'Get all details regarding a conversation with all messages in the conversation',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}',
          },
        },
      },
      {
        name: 'List All Labels Of A Conversation',
        value: 'List All Labels Of A Conversation',
        action: 'List Labels',
        description: 'Lists all the labels of a conversation',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/labels',
          },
        },
      },
      {
        name: 'New Conversation',
        value: 'New Conversation',
        action: 'Create New Conversation',
        description:
          'Creating a conversation in chatwoot requires a source id. \n\n Learn more about source_id: https://www.chatwoot.com/hc/user-guide/articles/1677839703-how-to-create-an-api-channel-inbox#send-messages-to-the-api-channel',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations',
          },
        },
      },
      {
        name: 'Toggle Priority Of A Conversation',
        value: 'Toggle Priority Of A Conversation',
        action: 'Toggle Priority',
        description: 'Toggles the priority of conversation',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_priority',
          },
        },
      },
      {
        name: 'Toggle Status Of A Conversation',
        value: 'Toggle Status Of A Conversation',
        action: 'Toggle Status',
        description:
          'Toggle the status of a conversation. Pass `status` to explicitly set the\nconversation state. Use `snoozed` along with `snoozed_until` to snooze a\nconversation until a specific time. If `snoozed_until` is omitted, the\nconversation is snoozed until the next reply from the contact. Regardless\nof the value provided, snoozed conversations always reopen on the next\nreply from the contact.',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/toggle_status',
          },
        },
      },
      {
        name: 'Update Conversation',
        value: 'Update Conversation',
        action: 'Update Conversation',
        description: 'Update Conversation Attributes',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}',
          },
        },
      },
      {
        name: 'Update Custom Attributes Of A Conversation',
        value: 'Update Custom Attributes Of A Conversation',
        action: 'Update Custom Attributes',
        description: 'Updates the custom attributes of a conversation',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/custom_attributes',
          },
        },
      },
    ],
    default: 'Conversation Add Labels',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Conversation Assignments'],
      },
    },
    options: [
      {
        name: 'Assign A Conversation',
        value: 'Assign A Conversation',
        action: 'Assign Conversation',
        description: 'Assign a conversation to an agent or a team',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/assignments',
          },
        },
      },
    ],
    default: 'Assign A Conversation',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Inboxes'],
      },
    },
    options: [
      {
        name: 'Add New Agent To Inbox',
        value: 'Add New Agent To Inbox',
        action: 'Add a New Agent',
        description: 'Add a new Agent to Inbox',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members',
          },
        },
      },
      {
        name: 'Delete Agent In Inbox',
        value: 'Delete Agent In Inbox',
        action: 'Remove an Agent from Inbox',
        description: 'Remove an Agent from Inbox',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members',
          },
        },
      },
      {
        name: 'Get Inbox',
        value: 'Get Inbox',
        action: 'Get an inbox',
        description: 'Get an inbox available in the current account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}/',
          },
        },
      },
      {
        name: 'Get Inbox Agent Bot',
        value: 'Get Inbox Agent Bot',
        action: 'Show Inbox Agent Bot',
        description: 'See if an agent bot is associated to the Inbox',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}/agent_bot',
          },
        },
      },
      {
        name: 'Get Inbox Members',
        value: 'Get Inbox Members',
        action: 'List Agents in Inbox',
        description: 'Get Details of Agents in an Inbox',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members/{{$parameter["inbox_id"]}}',
          },
        },
      },
      {
        name: 'Inbox Creation',
        value: 'Inbox Creation',
        action: 'Create an inbox',
        description:
          'You can create more than one website inbox in each account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/',
          },
        },
      },
      {
        name: 'List All Inboxes',
        value: 'List All Inboxes',
        action: 'List all inboxes',
        description: 'List all inboxes available in the current account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes',
          },
        },
      },
      {
        name: 'Update Agent Bot',
        value: 'Update Agent Bot',
        action: 'Add or remove agent bot',
        description:
          'To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}/set_agent_bot',
          },
        },
      },
      {
        name: 'Update Agents In Inbox',
        value: 'Update Agents In Inbox',
        action: 'Update Agents in Inbox',
        description:
          'All agents except the one passed in params will be removed',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inbox_members',
          },
        },
      },
      {
        name: 'Update Inbox',
        value: 'Update Inbox',
        action: 'Update Inbox',
        description: 'Update an existing inbox',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/inboxes/{{$parameter["id"]}}',
          },
        },
      },
    ],
    default: 'Add New Agent To Inbox',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Messages'],
      },
    },
    options: [
      {
        name: 'Create A New Message In A Conversation',
        value: 'Create A New Message In A Conversation',
        action: 'Create New Message',
        description:
          'Create a new message in the conversation.\n\n## WhatsApp Template Messages\n\nFor WhatsApp channels, you can send structured template messages using the `template_params` field. \nTemplates must be pre-approved in WhatsApp Business Manager.\n\n### Example Templates\n\n**Text with Image Header:**\n```json\n{\n  "content": "Hi your order 121212 is confirmed. Please wait for further updates",\n  "template_params": {\n    "name": "order_confirmation",\n    "category": "MARKETING",\n    "language": "en",\n    "processed_params": {\n      "body": {\n        "1": "121212"\n      },\n      "header": {\n        "media_url": "https://picsum.photos/200/300",\n        "media_type": "image"\n      }\n    }\n  }\n}\n```\n\n**Text with Copy Code Button:**\n```json\n{\n  "content": "Special offer! Get 30% off your next purchase. Use the code below",\n  "template_params": {\n    "name": "discount_coupon",\n    "category": "MARKETING",\n    "language": "en",\n    "processed_params": {\n      "body": {\n        "discount_percentage": "30"\n      },\n      "buttons": [{\n        "type": "copy_code",\n        "parameter": "SAVE20"\n      }]\n    }\n  }\n}\n```\n',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
          },
        },
      },
      {
        name: 'Delete A Message',
        value: 'Delete A Message',
        action: 'Delete a message',
        description:
          "Delete a message and it's attachments from the conversation.",
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages/{{$parameter["message_id"]}}',
          },
        },
      },
      {
        name: 'List All Messages',
        value: 'List All Messages',
        action: 'Get messages',
        description: 'List all messages of a conversation',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
          },
        },
      },
    ],
    default: 'Create A New Message In A Conversation',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Integrations'],
      },
    },
    options: [
      {
        name: 'Create An Integration Hook',
        value: 'Create An Integration Hook',
        action: 'Create an integration hook',
        description: 'Create an integration hook',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/hooks',
          },
        },
      },
      {
        name: 'Delete An Integration Hook',
        value: 'Delete An Integration Hook',
        action: 'Delete an Integration Hook',
        description: 'Delete an Integration Hook',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/hooks/{{$parameter["hook_id"]}}',
          },
        },
      },
      {
        name: 'Get Details Of All Integrations',
        value: 'Get Details Of All Integrations',
        action: 'List all the Integrations',
        description:
          'Get the details of all Integrations available for the account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/apps',
          },
        },
      },
      {
        name: 'Update An Integrations Hook',
        value: 'Update An Integrations Hook',
        action: 'Update an Integration Hook',
        description: 'Update an Integration Hook',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/integrations/hooks/{{$parameter["hook_id"]}}',
          },
        },
      },
    ],
    default: 'Create An Integration Hook',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Profile'],
      },
    },
    options: [
      {
        name: 'Fetch Profile',
        value: 'Fetch Profile',
        action: 'Fetch user profile',
        description: 'Get the user profile details',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/profile',
          },
        },
      },
    ],
    default: 'Fetch Profile',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Teams'],
      },
    },
    options: [
      {
        name: 'Add New Agent To Team',
        value: 'Add New Agent To Team',
        action: 'Add a New Agent',
        description: 'Add a new Agent to Team',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
          },
        },
      },
      {
        name: 'Create A Team',
        value: 'Create A Team',
        action: 'Create a team',
        description: 'Create a team in the account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams',
          },
        },
      },
      {
        name: 'Delete A Team',
        value: 'Delete A Team',
        action: 'Delete a team',
        description: 'Delete a team from the account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}',
          },
        },
      },
      {
        name: 'Delete Agent In Team',
        value: 'Delete Agent In Team',
        action: 'Remove an Agent from Team',
        description: 'Remove an Agent from Team',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
          },
        },
      },
      {
        name: 'Get Details Of A Single Team',
        value: 'Get Details Of A Single Team',
        action: 'Get a team details',
        description: 'Get the details of a team in the account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}',
          },
        },
      },
      {
        name: 'Get Team Members',
        value: 'Get Team Members',
        action: 'List Agents in Team',
        description: 'Get Details of Agents in an Team',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
          },
        },
      },
      {
        name: 'List All Teams',
        value: 'List All Teams',
        action: 'List all teams',
        description: 'List all teams available in the current account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams',
          },
        },
      },
      {
        name: 'Update A Team',
        value: 'Update A Team',
        action: 'Update a team',
        description: "Update a team's attributes",
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}',
          },
        },
      },
      {
        name: 'Update Agents In Team',
        value: 'Update Agents In Team',
        action: 'Update Agents in Team',
        description:
          'All agents except the one passed in params will be removed',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/teams/{{$parameter["team_id"]}}/team_members',
          },
        },
      },
    ],
    default: 'Add New Agent To Team',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
      },
    },
    options: [
      {
        name: 'Create A Custom Filter',
        value: 'Create A Custom Filter',
        action: 'Create a custom filter',
        description: 'Create a custom filter in the account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters',
          },
        },
      },
      {
        name: 'Delete A Custom Filter',
        value: 'Delete A Custom Filter',
        action: 'Delete a custom filter',
        description: 'Delete a custom filter from the account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters/{{$parameter["custom_filter_id"]}}',
          },
        },
      },
      {
        name: 'Get Details Of A Single Custom Filter',
        value: 'Get Details Of A Single Custom Filter',
        action: 'Get a custom filter details',
        description: 'Get the details of a custom filter in the account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters/{{$parameter["custom_filter_id"]}}',
          },
        },
      },
      {
        name: 'List All Filters',
        value: 'List All Filters',
        action: 'List all custom filters',
        description: 'List all custom filters in a category of a user',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters',
          },
        },
      },
      {
        name: 'Update A Custom Filter',
        value: 'Update A Custom Filter',
        action: 'Update a custom filter',
        description: "Update a custom filter's attributes",
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/custom_filters/{{$parameter["custom_filter_id"]}}',
          },
        },
      },
    ],
    default: 'Create A Custom Filter',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Webhooks'],
      },
    },
    options: [
      {
        name: 'Create A Webhook',
        value: 'Create A Webhook',
        action: 'Add a webhook',
        description: 'Add a webhook subscription to the account',
        routing: {
          request: {
            method: 'POST',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks',
          },
        },
      },
      {
        name: 'Delete A Webhook',
        value: 'Delete A Webhook',
        action: 'Delete a webhook',
        description: 'Delete a webhook from the account',
        routing: {
          request: {
            method: 'DELETE',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks/{{$parameter["webhook_id"]}}',
          },
        },
      },
      {
        name: 'List All Webhooks',
        value: 'List All Webhooks',
        action: 'List all webhooks',
        description: 'List all webhooks in the account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks',
          },
        },
      },
      {
        name: 'Update A Webhook',
        value: 'Update A Webhook',
        action: 'Update a webhook object',
        description: 'Update a webhook object in the account',
        routing: {
          request: {
            method: 'PATCH',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/webhooks/{{$parameter["webhook_id"]}}',
          },
        },
      },
    ],
    default: 'Create A Webhook',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Reports'],
      },
    },
    options: [
      {
        name: 'Get Account Conversation Metrics',
        value: 'Get Account Conversation Metrics',
        action: 'Account Conversation Metrics',
        description: 'Get conversation metrics for Account',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/conversations',
          },
        },
      },
      {
        name: 'Get Account Reporting Events',
        value: 'Get Account Reporting Events',
        action: 'Account Reporting Events',
        description:
          'Get paginated reporting events for the account. This endpoint returns reporting events such as first response time, resolution time, and other metrics. Only administrators can access this endpoint. Results are paginated with 25 items per page.',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v1/accounts/{{$parameter["account_id"]}}/reporting_events',
          },
        },
      },
      {
        name: 'Get Agent Conversation Metrics',
        value: 'Get Agent Conversation Metrics',
        action: 'Agent Conversation Metrics',
        description: 'Get conversation metrics for Agent',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/conversations/',
          },
        },
      },
      {
        name: 'List All Conversation Statistics',
        value: 'List All Conversation Statistics',
        action: 'Get Account reports',
        description:
          'Get Account reports for a specific type, metric and date range',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports',
          },
        },
      },
      {
        name: 'List All Conversation Statistics Summary',
        value: 'List All Conversation Statistics Summary',
        action: 'Get Account reports summary',
        description:
          'Get Account reports summary for a specific type and date range',
        routing: {
          request: {
            method: 'GET',
            url: '=/api/v2/accounts/{{$parameter["account_id"]}}/reports/summary',
          },
        },
      },
    ],
    default: 'Get Account Conversation Metrics',
  },
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['Conversation'],
      },
    },
    options: [
      {
        name: 'Get Conversation Messages',
        value: 'Get Conversation Messages',
        action: 'Get messages from a conversation',
        description: 'Returns all messages from a specific conversation',
        routing: {
          request: {
            method: 'GET',
            url: '=/accounts/{{$parameter["account_id"]}}/conversations/{{$parameter["conversation_id"]}}/messages',
          },
        },
      },
    ],
    default: 'Get Conversation Messages',
  },
  {
    displayName: 'POST /platform/api/v1/accounts',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Account',
    description: 'Name of the account',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: 'en',
    description: 'The locale of the account',
    routing: {
      send: {
        property: 'locale',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'Domain',
    name: 'domain',
    type: 'string',
    default: 'example.com',
    description: 'The domain of the account',
    routing: {
      send: {
        property: 'domain',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'Support Email',
    name: 'support_email',
    type: 'string',
    default: 'support@example.com',
    description: 'The support email of the account',
    routing: {
      send: {
        property: 'support_email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: 'active',
    description: 'The status of the account',
    options: [
      {
        name: 'Active',
        value: 'active',
      },
      {
        name: 'Suspended',
        value: 'suspended',
      },
    ],
    routing: {
      send: {
        property: 'status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'Limits',
    name: 'limits',
    type: 'json',
    default: '{}',
    description: 'The limits of the account',
    routing: {
      send: {
        property: 'limits',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description: 'The custom attributes of the account',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Create An Account'],
      },
    },
  },
  {
    displayName: 'GET /platform/api/v1/accounts/{account_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Get Details Of An Account'],
      },
    },
  },
  {
    displayName: 'PATCH /platform/api/v1/accounts/{account_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Account',
    description: 'Name of the account',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: 'en',
    description: 'The locale of the account',
    routing: {
      send: {
        property: 'locale',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'Domain',
    name: 'domain',
    type: 'string',
    default: 'example.com',
    description: 'The domain of the account',
    routing: {
      send: {
        property: 'domain',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'Support Email',
    name: 'support_email',
    type: 'string',
    default: 'support@example.com',
    description: 'The support email of the account',
    routing: {
      send: {
        property: 'support_email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: 'active',
    description: 'The status of the account',
    options: [
      {
        name: 'Active',
        value: 'active',
      },
      {
        name: 'Suspended',
        value: 'suspended',
      },
    ],
    routing: {
      send: {
        property: 'status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'Limits',
    name: 'limits',
    type: 'json',
    default: '{}',
    description: 'The limits of the account',
    routing: {
      send: {
        property: 'limits',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description: 'The custom attributes of the account',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Update An Account'],
      },
    },
  },
  {
    displayName: 'DELETE /platform/api/v1/accounts/{account_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Accounts'],
        operation: ['Delete An Account'],
      },
    },
  },
  {
    displayName: 'GET /platform/api/v1/accounts/{account_id}/account_users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Users'],
        operation: ['List All Account Users'],
      },
    },
  },
  {
    displayName: 'POST /platform/api/v1/accounts/{account_id}/account_users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Users'],
        operation: ['Create An Account User'],
      },
    },
  },
  {
    displayName: 'User Id',
    required: true,
    name: 'user_id',
    type: 'number',
    default: 1,
    description: 'The ID of the user',
    routing: {
      send: {
        property: 'user_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Users'],
        operation: ['Create An Account User'],
      },
    },
  },
  {
    displayName: 'Role',
    required: true,
    name: 'role',
    type: 'string',
    default: 'administrator',
    description: 'whether user is an administrator or agent',
    routing: {
      send: {
        property: 'role',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Users'],
        operation: ['Create An Account User'],
      },
    },
  },
  {
    displayName: 'DELETE /platform/api/v1/accounts/{account_id}/account_users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Users'],
        operation: ['Delete An Account User'],
      },
    },
  },
  {
    displayName: 'GET /platform/api/v1/agent_bots',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['List All Agent Bots'],
      },
    },
  },
  {
    displayName: 'POST /platform/api/v1/agent_bots',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Create An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Agent Bot',
    description: 'The name of the agent bot',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Create An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'This is a sample agent bot',
    description: 'The description of the agent bot',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Create An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Outgoing Url',
    name: 'outgoing_url',
    type: 'string',
    default: 'https://example.com/webhook',
    description: 'The webhook URL for the bot',
    routing: {
      send: {
        property: 'outgoing_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Create An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    type: 'number',
    default: 1,
    description: 'The account ID to associate the agent bot with',
    routing: {
      send: {
        property: 'account_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Create An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Create An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar Url',
    name: 'avatar_url',
    type: 'string',
    default: 'https://example.com/avatar.png',
    description: 'The url to a jpeg, png file for the agent bot avatar',
    routing: {
      send: {
        property: 'avatar_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Create An Agent Bot'],
      },
    },
  },
  {
    displayName: 'GET /platform/api/v1/agent_bots/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Get Details Of A Single Agent Bot'],
      },
    },
  },
  {
    displayName: 'PATCH /platform/api/v1/agent_bots/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Update An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Agent Bot',
    description: 'The name of the agent bot',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Update An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'This is a sample agent bot',
    description: 'The description of the agent bot',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Update An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Outgoing Url',
    name: 'outgoing_url',
    type: 'string',
    default: 'https://example.com/webhook',
    description: 'The webhook URL for the bot',
    routing: {
      send: {
        property: 'outgoing_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Update An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    type: 'number',
    default: 1,
    description: 'The account ID to associate the agent bot with',
    routing: {
      send: {
        property: 'account_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Update An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Update An Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar Url',
    name: 'avatar_url',
    type: 'string',
    default: 'https://example.com/avatar.png',
    description: 'The url to a jpeg, png file for the agent bot avatar',
    routing: {
      send: {
        property: 'avatar_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Update An Agent Bot'],
      },
    },
  },
  {
    displayName: 'DELETE /platform/api/v1/agent_bots/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agent Bots'],
        operation: ['Delete An Agent Bot'],
      },
    },
  },
  {
    displayName: 'POST /platform/api/v1/users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Daniel',
    description: 'Name of the user',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Display Name',
    name: 'display_name',
    type: 'string',
    default: 'Dan',
    description: 'Display name of the user',
    routing: {
      send: {
        property: 'display_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: 'daniel@acme.inc',
    description: 'Email of the user',
    routing: {
      send: {
        property: 'email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Password',
    name: 'password',
    type: 'string',
    default: 'Password2!',
    description:
      'Password must contain uppercase, lowercase letters, number and a special character',
    routing: {
      send: {
        property: 'password',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description: 'Custom attributes you want to associate with the user',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'GET /platform/api/v1/users/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Get Details Of A User'],
      },
    },
  },
  {
    displayName: 'PATCH /platform/api/v1/users/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Update A User'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Daniel',
    description: 'Name of the user',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Update A User'],
      },
    },
  },
  {
    displayName: 'Display Name',
    name: 'display_name',
    type: 'string',
    default: 'Dan',
    description: 'Display name of the user',
    routing: {
      send: {
        property: 'display_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Update A User'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: 'daniel@acme.inc',
    description: 'Email of the user',
    routing: {
      send: {
        property: 'email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Update A User'],
      },
    },
  },
  {
    displayName: 'Password',
    name: 'password',
    type: 'string',
    default: 'Password2!',
    description:
      'Password must contain uppercase, lowercase letters, number and a special character',
    routing: {
      send: {
        property: 'password',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Update A User'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description: 'Custom attributes you want to associate with the user',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Update A User'],
      },
    },
  },
  {
    displayName: 'DELETE /platform/api/v1/users/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Delete A User'],
      },
    },
  },
  {
    displayName: 'GET /platform/api/v1/users/{id}/login',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Users'],
        operation: ['Get Sso Url Of A User'],
      },
    },
  },
  {
    displayName: 'GET /public/api/v1/inboxes/{inbox_identifier}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inbox API'],
        operation: ['Get Details Of A Inbox'],
      },
    },
  },
  {
    displayName: 'POST /public/api/v1/inboxes/{inbox_identifier}/contacts',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName: 'Identifier',
    name: 'identifier',
    type: 'string',
    default: '1234567890',
    description: 'External identifier of the contact',
    routing: {
      send: {
        property: 'identifier',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName: 'Identifier Hash',
    name: 'identifier_hash',
    type: 'string',
    default: 'e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9',
    description: 'Identifier hash prepared for HMAC authentication',
    routing: {
      send: {
        property: 'identifier_hash',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: 'alice@acme.inc',
    description: 'Email of the contact',
    routing: {
      send: {
        property: 'email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Alice',
    description: 'Name of the contact',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName: 'Phone Number',
    name: 'phone_number',
    type: 'string',
    default: '+123456789',
    description: 'Phone number of the contact',
    routing: {
      send: {
        property: 'phone_number',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description: 'Custom attributes of the customer',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Create A Contact'],
      },
    },
  },
  {
    displayName:
      'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Get Details Of A Contact'],
      },
    },
  },
  {
    displayName:
      'PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName: 'Identifier',
    name: 'identifier',
    type: 'string',
    default: '1234567890',
    description: 'External identifier of the contact',
    routing: {
      send: {
        property: 'identifier',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName: 'Identifier Hash',
    name: 'identifier_hash',
    type: 'string',
    default: 'e93275d4eba0e5679ad55f5360af00444e2a888df9b0afa3e8b691c3173725f9',
    description: 'Identifier hash prepared for HMAC authentication',
    routing: {
      send: {
        property: 'identifier_hash',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: 'alice@acme.inc',
    description: 'Email of the contact',
    routing: {
      send: {
        property: 'email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Alice',
    description: 'Name of the contact',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName: 'Phone Number',
    name: 'phone_number',
    type: 'string',
    default: '+123456789',
    description: 'Phone number of the contact',
    routing: {
      send: {
        property: 'phone_number',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description: 'Custom attributes of the customer',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts API'],
        operation: ['Update A Contact'],
      },
    },
  },
  {
    displayName:
      'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Create A Conversation'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description: 'Custom attributes of the conversation',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Create A Conversation'],
      },
    },
  },
  {
    displayName:
      'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['List All Contact Conversations'],
      },
    },
  },
  {
    displayName:
      'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Get Single Conversation'],
      },
    },
  },
  {
    displayName:
      'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_status',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Resolve Conversation'],
      },
    },
  },
  {
    displayName:
      'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_typing',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Toggle Typing Status'],
      },
    },
  },
  {
    displayName: 'Typing Status',
    name: 'typing_status',
    required: true,
    description: "Typing status, either 'on' or 'off'",
    default: '',
    type: 'string',
    routing: {
      send: {
        type: 'query',
        property: 'typing_status',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Toggle Typing Status'],
      },
    },
  },
  {
    displayName: 'Typing Status',
    name: 'typing_status',
    type: 'options',
    default: 'on',
    description: 'The typing status to set',
    options: [
      {
        name: 'On',
        value: 'on',
      },
      {
        name: 'Off',
        value: 'off',
      },
    ],
    routing: {
      send: {
        property: 'typing_status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Toggle Typing Status'],
      },
    },
  },
  {
    displayName:
      'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/update_last_seen',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations API'],
        operation: ['Update Last Seen'],
      },
    },
  },
  {
    displayName:
      'POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messages API'],
        operation: ['Create A Message'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: 'Hello, how can I help you?',
    description: 'Content for the message',
    routing: {
      send: {
        property: 'content',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages API'],
        operation: ['Create A Message'],
      },
    },
  },
  {
    displayName: 'Echo Id',
    name: 'echo_id',
    type: 'string',
    default: '1234567890',
    description:
      'Temporary identifier which will be passed back via websockets',
    routing: {
      send: {
        property: 'echo_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages API'],
        operation: ['Create A Message'],
      },
    },
  },
  {
    displayName:
      'GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messages API'],
        operation: ['List All Converation Messages'],
      },
    },
  },
  {
    displayName:
      'PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messages API'],
        operation: ['Update A Message'],
      },
    },
  },
  {
    displayName: 'Submitted Values',
    name: 'submitted_values',
    type: 'json',
    default:
      '{\n  "name": "My Name",\n  "title": "My Title",\n  "value": "value",\n  "csat_survey_response": {\n    "feedback_message": "Great service!",\n    "rating": 5\n  }\n}',
    description: 'Replies to the Bot Message Types',
    routing: {
      send: {
        property: 'submitted_values',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages API'],
        operation: ['Update A Message'],
      },
    },
  },
  {
    displayName: 'GET /survey/responses/{conversation_uuid}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['CSAT Survey Page'],
        operation: ['Get Csat Survey Page'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Get Account Details'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Get Account Details'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Account',
    description: 'Name of the account',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: 'en',
    description: 'The locale of the account',
    routing: {
      send: {
        property: 'locale',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Domain',
    name: 'domain',
    type: 'string',
    default: 'example.com',
    description: 'The domain of the account',
    routing: {
      send: {
        property: 'domain',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Support Email',
    name: 'support_email',
    type: 'string',
    default: 'support@example.com',
    description: 'The support email of the account',
    routing: {
      send: {
        property: 'support_email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Auto Resolve After',
    name: 'auto_resolve_after',
    type: 'number',
    default: 1440,
    description: 'Auto resolve conversations after specified minutes',
    routing: {
      send: {
        property: 'auto_resolve_after',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Auto Resolve Message',
    name: 'auto_resolve_message',
    type: 'string',
    default:
      'This conversation has been automatically resolved due to inactivity',
    description: 'Message to send when auto resolving',
    routing: {
      send: {
        property: 'auto_resolve_message',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Auto Resolve Ignore Waiting',
    name: 'auto_resolve_ignore_waiting',
    type: 'boolean',
    default: false,
    description: 'Whether to ignore waiting conversations for auto resolve',
    routing: {
      send: {
        property: 'auto_resolve_ignore_waiting',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Industry',
    name: 'industry',
    type: 'string',
    default: 'Technology',
    description: 'Industry type',
    routing: {
      send: {
        property: 'industry',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Company Size',
    name: 'company_size',
    type: 'string',
    default: '50-100',
    description: 'Company size',
    routing: {
      send: {
        property: 'company_size',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'Timezone',
    name: 'timezone',
    type: 'string',
    default: 'UTC',
    description: 'Account timezone',
    routing: {
      send: {
        property: 'timezone',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account'],
        operation: ['Update Account'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/audit_logs',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Audit Logs'],
        operation: ['Get Account Audit Logs'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    description: 'Page number for pagination',
    default: 1,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Audit Logs'],
        operation: ['Get Account Audit Logs'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/agent_bots',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['List All Account Agent Bots'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/agent_bots',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Agent Bot',
    description: 'The name of the agent bot',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'This is a sample agent bot',
    description: 'The description of the agent bot',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Outgoing Url',
    name: 'outgoing_url',
    type: 'string',
    default: 'https://example.com/webhook',
    description: 'The webhook URL for the bot',
    routing: {
      send: {
        property: 'outgoing_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar Url',
    name: 'avatar_url',
    type: 'string',
    default: 'https://example.com/avatar.png',
    description: 'The url to a jpeg, png file for the agent bot avatar',
    routing: {
      send: {
        property: 'avatar_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Bot Type',
    name: 'bot_type',
    type: 'number',
    default: 0,
    description: 'The type of the bot (0 for webhook)',
    routing: {
      send: {
        property: 'bot_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Bot Config',
    name: 'bot_config',
    type: 'json',
    default: '{}',
    description: 'The configuration for the bot',
    routing: {
      send: {
        property: 'bot_config',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Create An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/agent_bots/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Get Details Of A Single Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/agent_bots/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Agent Bot',
    description: 'The name of the agent bot',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'This is a sample agent bot',
    description: 'The description of the agent bot',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Outgoing Url',
    name: 'outgoing_url',
    type: 'string',
    default: 'https://example.com/webhook',
    description: 'The webhook URL for the bot',
    routing: {
      send: {
        property: 'outgoing_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Avatar Url',
    name: 'avatar_url',
    type: 'string',
    default: 'https://example.com/avatar.png',
    description: 'The url to a jpeg, png file for the agent bot avatar',
    routing: {
      send: {
        property: 'avatar_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Bot Type',
    name: 'bot_type',
    type: 'number',
    default: 0,
    description: 'The type of the bot (0 for webhook)',
    routing: {
      send: {
        property: 'bot_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'Bot Config',
    name: 'bot_config',
    type: 'json',
    default: '{}',
    description: 'The configuration for the bot',
    routing: {
      send: {
        property: 'bot_config',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Update An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/agent_bots/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Account Agent Bots'],
        operation: ['Delete An Account Agent Bot'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/agents',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Get Account Agents'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/agents',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Add New Agent To Account'],
      },
    },
  },
  {
    displayName: 'Name',
    required: true,
    name: 'name',
    type: 'string',
    default: 'John Doe',
    description: 'Full Name of the agent',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Add New Agent To Account'],
      },
    },
  },
  {
    displayName: 'Email',
    required: true,
    name: 'email',
    type: 'string',
    default: 'john.doe@acme.inc',
    description: 'Email of the Agent',
    routing: {
      send: {
        property: 'email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Add New Agent To Account'],
      },
    },
  },
  {
    displayName: 'Role',
    required: true,
    name: 'role',
    type: 'options',
    default: 'agent',
    description: 'Whether its administrator or agent',
    options: [
      {
        name: 'Agent',
        value: 'agent',
      },
      {
        name: 'Administrator',
        value: 'administrator',
      },
    ],
    routing: {
      send: {
        property: 'role',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Add New Agent To Account'],
      },
    },
  },
  {
    displayName: 'Availability Status',
    name: 'availability_status',
    type: 'options',
    default: 'available',
    description: 'The availability setting of the agent.',
    options: [
      {
        name: 'Available',
        value: 'available',
      },
      {
        name: 'Busy',
        value: 'busy',
      },
      {
        name: 'Offline',
        value: 'offline',
      },
    ],
    routing: {
      send: {
        property: 'availability_status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Add New Agent To Account'],
      },
    },
  },
  {
    displayName: 'Auto Offline',
    name: 'auto_offline',
    type: 'boolean',
    default: true,
    description:
      'Whether the availability status of agent is configured to go offline automatically when away.',
    routing: {
      send: {
        property: 'auto_offline',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Add New Agent To Account'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/agents/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Update Agent In Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the agent to be updated.',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Update Agent In Account'],
      },
    },
  },
  {
    displayName: 'Role',
    required: true,
    name: 'role',
    type: 'options',
    default: 'agent',
    description: 'Whether its administrator or agent',
    options: [
      {
        name: 'Agent',
        value: 'agent',
      },
      {
        name: 'Administrator',
        value: 'administrator',
      },
    ],
    routing: {
      send: {
        property: 'role',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Update Agent In Account'],
      },
    },
  },
  {
    displayName: 'Availability Status',
    name: 'availability_status',
    type: 'options',
    default: 'available',
    description: 'The availability status of the agent.',
    options: [
      {
        name: 'Available',
        value: 'available',
      },
      {
        name: 'Busy',
        value: 'busy',
      },
      {
        name: 'Offline',
        value: 'offline',
      },
    ],
    routing: {
      send: {
        property: 'availability_status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Update Agent In Account'],
      },
    },
  },
  {
    displayName: 'Auto Offline',
    name: 'auto_offline',
    type: 'boolean',
    default: true,
    description:
      'Whether the availability status of agent is configured to go offline automatically when away.',
    routing: {
      send: {
        property: 'auto_offline',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Update Agent In Account'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/agents/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Delete Agent From Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the agent to be deleted.',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Agents'],
        operation: ['Delete Agent From Account'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/canned_responses',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Get Account Canned Response'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/canned_responses',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Add New Canned Response To Account'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: 'Hello, {{contact.name}}! Welcome to our service.',
    description: 'Message content for canned response',
    routing: {
      send: {
        property: 'content',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Add New Canned Response To Account'],
      },
    },
  },
  {
    displayName: 'Short Code',
    name: 'short_code',
    type: 'string',
    default: 'welcome',
    description: 'Short Code for quick access of the canned response',
    routing: {
      send: {
        property: 'short_code',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Add New Canned Response To Account'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/canned_responses/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Update Canned Response In Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the canned response to be updated.',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Update Canned Response In Account'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: 'Hello, {{contact.name}}! Welcome to our service.',
    description: 'Message content for canned response',
    routing: {
      send: {
        property: 'content',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Update Canned Response In Account'],
      },
    },
  },
  {
    displayName: 'Short Code',
    name: 'short_code',
    type: 'string',
    default: 'welcome',
    description: 'Short Code for quick access of the canned response',
    routing: {
      send: {
        property: 'short_code',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Update Canned Response In Account'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/canned_responses/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Delete Canned Response From Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the canned response to be deleted',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Canned Responses'],
        operation: ['Delete Canned Response From Account'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/custom_attribute_definitions',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Get Account Custom Attribute'],
      },
    },
  },
  {
    displayName: 'Attribute Model',
    name: 'attribute_model',
    required: true,
    description: 'conversation_attribute(0)/contact_attribute(1)',
    default: '0',
    type: 'options',
    options: [
      {
        name: '0',
        value: '0',
      },
      {
        name: '1',
        value: '1',
      },
    ],
    routing: {
      send: {
        type: 'query',
        property: 'attribute_model',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Get Account Custom Attribute'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/custom_attribute_definitions',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Attribute Display Name',
    name: 'attribute_display_name',
    type: 'string',
    default: 'Custom Attribute',
    description: 'Attribute display name',
    routing: {
      send: {
        property: 'attribute_display_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Attribute Display Type',
    name: 'attribute_display_type',
    type: 'number',
    default: 0,
    description:
      'Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)',
    routing: {
      send: {
        property: 'attribute_display_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Attribute Description',
    name: 'attribute_description',
    type: 'string',
    default: 'This is a custom attribute',
    description: 'Attribute description',
    routing: {
      send: {
        property: 'attribute_description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Attribute Key',
    name: 'attribute_key',
    type: 'string',
    default: 'custom_attribute',
    description: 'Attribute unique key value',
    routing: {
      send: {
        property: 'attribute_key',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Attribute Values',
    name: 'attribute_values',
    type: 'json',
    default: '[\n  "value1",\n  "value2"\n]',
    description: 'Attribute values',
    routing: {
      send: {
        property: 'attribute_values',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Attribute Model',
    name: 'attribute_model',
    type: 'number',
    default: 0,
    description:
      'Attribute type(conversation_attribute- 0, contact_attribute- 1)',
    routing: {
      send: {
        property: 'attribute_model',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Regex Pattern',
    name: 'regex_pattern',
    type: 'string',
    default: '^[a-zA-Z0-9]+$',
    description:
      'Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).',
    routing: {
      send: {
        property: 'regex_pattern',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName: 'Regex Cue',
    name: 'regex_cue',
    type: 'string',
    default: 'Please enter a valid value',
    description:
      'Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.',
    routing: {
      send: {
        property: 'regex_cue',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Add New Custom Attribute To Account'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Get Details Of A Single Custom Attribute'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Get Details Of A Single Custom Attribute'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the custom attribute to be updated.',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Get Details Of A Single Custom Attribute'],
      },
    },
  },
  {
    displayName:
      'PATCH /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the custom attribute to be updated.',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Attribute Display Name',
    name: 'attribute_display_name',
    type: 'string',
    default: 'Custom Attribute',
    description: 'Attribute display name',
    routing: {
      send: {
        property: 'attribute_display_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Attribute Display Type',
    name: 'attribute_display_type',
    type: 'number',
    default: 0,
    description:
      'Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)',
    routing: {
      send: {
        property: 'attribute_display_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Attribute Description',
    name: 'attribute_description',
    type: 'string',
    default: 'This is a custom attribute',
    description: 'Attribute description',
    routing: {
      send: {
        property: 'attribute_description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Attribute Key',
    name: 'attribute_key',
    type: 'string',
    default: 'custom_attribute',
    description: 'Attribute unique key value',
    routing: {
      send: {
        property: 'attribute_key',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Attribute Values',
    name: 'attribute_values',
    type: 'json',
    default: '[\n  "value1",\n  "value2"\n]',
    description: 'Attribute values',
    routing: {
      send: {
        property: 'attribute_values',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Attribute Model',
    name: 'attribute_model',
    type: 'number',
    default: 0,
    description:
      'Attribute type(conversation_attribute- 0, contact_attribute- 1)',
    routing: {
      send: {
        property: 'attribute_model',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Regex Pattern',
    name: 'regex_pattern',
    type: 'string',
    default: '^[a-zA-Z0-9]+$',
    description:
      'Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).',
    routing: {
      send: {
        property: 'regex_pattern',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName: 'Regex Cue',
    name: 'regex_cue',
    type: 'string',
    default: 'Please enter a valid value',
    description:
      'Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.',
    routing: {
      send: {
        property: 'regex_cue',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Update Custom Attribute In Account'],
      },
    },
  },
  {
    displayName:
      'DELETE /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Delete Custom Attribute From Account'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Delete Custom Attribute From Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the custom attribute to be deleted',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Custom Attributes'],
        operation: ['Delete Custom Attribute From Account'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/contacts',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact List'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact List'],
      },
    },
  },
  {
    displayName: 'Sort',
    name: 'sort',
    description: 'The attribute by which list should be sorted',
    default: 'name',
    type: 'options',
    options: [
      {
        name: 'Name',
        value: 'name',
      },
      {
        name: 'Email',
        value: 'email',
      },
      {
        name: 'Phone Number',
        value: 'phone_number',
      },
      {
        name: 'Last Activity At',
        value: 'last_activity_at',
      },
      {
        name: 'Name',
        value: '-name',
      },
      {
        name: 'Email',
        value: '-email',
      },
      {
        name: 'Phone Number',
        value: '-phone_number',
      },
      {
        name: 'Last Activity At',
        value: '-last_activity_at',
      },
    ],
    routing: {
      send: {
        type: 'query',
        property: 'sort',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact List'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    description: 'The page parameter',
    default: 1,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact List'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/contacts',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    required: true,
    name: 'inbox_id',
    type: 'number',
    default: 1,
    description: 'ID of the inbox to which the contact belongs',
    routing: {
      send: {
        property: 'inbox_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Alice',
    description: 'name of the contact',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: 'alice@acme.inc',
    description: 'email of the contact',
    routing: {
      send: {
        property: 'email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Blocked',
    name: 'blocked',
    type: 'boolean',
    default: false,
    description: 'whether the contact is blocked or not',
    routing: {
      send: {
        property: 'blocked',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Phone Number',
    name: 'phone_number',
    type: 'string',
    default: '+123456789',
    description: 'phone number of the contact',
    routing: {
      send: {
        property: 'phone_number',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Avatar Url',
    name: 'avatar_url',
    type: 'string',
    default: 'https://example.com/avatar.png',
    description: 'The url to a jpeg, png file for the contact avatar',
    routing: {
      send: {
        property: 'avatar_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Identifier',
    name: 'identifier',
    type: 'string',
    default: '1234567890',
    description: 'A unique identifier for the contact in external system',
    routing: {
      send: {
        property: 'identifier',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Additional Attributes',
    name: 'additional_attributes',
    type: 'json',
    default: '{\n  "type": "customer",\n  "age": 30\n}',
    description:
      'An object where you can store additional attributes for contact. example {"type":"customer", "age":30}',
    routing: {
      send: {
        property: 'additional_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description:
      'An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Create'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/contacts/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Details'],
      },
    },
  },
  {
    displayName: 'PUT /api/v1/accounts/{account_id}/contacts/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Alice',
    description: 'name of the contact',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: 'alice@acme.inc',
    description: 'email of the contact',
    routing: {
      send: {
        property: 'email',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Blocked',
    name: 'blocked',
    type: 'boolean',
    default: false,
    description: 'whether the contact is blocked or not',
    routing: {
      send: {
        property: 'blocked',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Phone Number',
    name: 'phone_number',
    type: 'string',
    default: '+123456789',
    description: 'phone number of the contact',
    routing: {
      send: {
        property: 'phone_number',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description:
      'Send the form data with the avatar image binary or use the avatar_url',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Avatar Url',
    name: 'avatar_url',
    type: 'string',
    default: 'https://example.com/avatar.png',
    description: 'The url to a jpeg, png file for the contact avatar',
    routing: {
      send: {
        property: 'avatar_url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Identifier',
    name: 'identifier',
    type: 'string',
    default: '1234567890',
    description: 'A unique identifier for the contact in external system',
    routing: {
      send: {
        property: 'identifier',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Additional Attributes',
    name: 'additional_attributes',
    type: 'json',
    default: '{\n  "type": "customer",\n  "age": 30\n}',
    description:
      'An object where you can store additional attributes for contact. example {"type":"customer", "age":30}',
    routing: {
      send: {
        property: 'additional_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default: '{}',
    description:
      'An object where you can store custom attributes for contact. example {"type":"customer", "age":30}, this should have a valid custom attribute definition.',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Update'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/contacts/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Delete'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/contacts/{id}/conversations',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Conversations'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'ID of the contact',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Conversations'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/contacts/{id}/labels',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contact Labels'],
        operation: ['List All Labels Of A Contact'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/contacts/{id}/labels',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contact Labels'],
        operation: ['Contact Add Labels'],
      },
    },
  },
  {
    displayName: 'Labels',
    required: true,
    name: 'labels',
    type: 'json',
    default: '[\n  "support",\n  "billing"\n]',
    description: 'Array of labels (comma-separated strings)',
    routing: {
      send: {
        property: 'labels',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contact Labels'],
        operation: ['Contact Add Labels'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/contacts/search',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Search'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Search'],
      },
    },
  },
  {
    displayName: 'Q',
    name: 'q',
    description:
      'Search using contact `name`, `identifier`, `email` or `phone number`',
    default: '',
    type: 'string',
    routing: {
      send: {
        type: 'query',
        property: 'q',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Search'],
      },
    },
  },
  {
    displayName: 'Sort',
    name: 'sort',
    description: 'The attribute by which list should be sorted',
    default: 'name',
    type: 'options',
    options: [
      {
        name: 'Name',
        value: 'name',
      },
      {
        name: 'Email',
        value: 'email',
      },
      {
        name: 'Phone Number',
        value: 'phone_number',
      },
      {
        name: 'Last Activity At',
        value: 'last_activity_at',
      },
      {
        name: 'Name',
        value: '-name',
      },
      {
        name: 'Email',
        value: '-email',
      },
      {
        name: 'Phone Number',
        value: '-phone_number',
      },
      {
        name: 'Last Activity At',
        value: '-last_activity_at',
      },
    ],
    routing: {
      send: {
        type: 'query',
        property: 'sort',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Search'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    description: 'The page parameter',
    default: 1,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Search'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/contacts/filter',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Filter'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Filter'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Filter'],
      },
    },
  },
  {
    displayName: 'Payload',
    name: 'payload',
    type: 'json',
    default:
      '[\n  {\n    "attribute_key": "name",\n    "filter_operator": "equal_to",\n    "values": [\n      "en"\n    ],\n    "query_operator": "AND"\n  },\n  {\n    "attribute_key": "country_code",\n    "filter_operator": "equal_to",\n    "values": [\n      "us"\n    ],\n    "query_operator": null\n  }\n]',
    routing: {
      send: {
        property: 'payload',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Filter'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'ID of the contact',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    required: true,
    name: 'inbox_id',
    type: 'number',
    default: 1,
    description: 'The ID of the inbox',
    routing: {
      send: {
        property: 'inbox_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Source Id',
    name: 'source_id',
    type: 'string',
    default: '',
    description: 'Contact Inbox Source Id',
    routing: {
      send: {
        property: 'source_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contact Inbox Creation'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contactable Inboxes Get'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contactable Inboxes Get'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'ID of the contact',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Contacts'],
        operation: ['Contactable Inboxes Get'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/automation_rules',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Get Account Automation Rule'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Get Account Automation Rule'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    description: 'The page parameter',
    default: 1,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Get Account Automation Rule'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/automation_rules',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Add New Automation Rule To Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Add label on message create event',
    description: 'Rule name',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Add New Automation Rule To Account'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default:
      'Add label support and sales on message create event if incoming message content contains text help',
    description: 'The description about the automation and actions',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Add New Automation Rule To Account'],
      },
    },
  },
  {
    displayName: 'Event Name',
    name: 'event_name',
    type: 'options',
    default: 'message_created',
    description: 'The event when you want to execute the automation actions',
    options: [
      {
        name: 'Conversation Created',
        value: 'conversation_created',
      },
      {
        name: 'Conversation Updated',
        value: 'conversation_updated',
      },
      {
        name: 'Conversation Resolved',
        value: 'conversation_resolved',
      },
      {
        name: 'Message Created',
        value: 'message_created',
      },
    ],
    routing: {
      send: {
        property: 'event_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Add New Automation Rule To Account'],
      },
    },
  },
  {
    displayName: 'Active',
    name: 'active',
    type: 'boolean',
    default: true,
    description: 'Enable/disable automation rule',
    routing: {
      send: {
        property: 'active',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Add New Automation Rule To Account'],
      },
    },
  },
  {
    displayName: 'Actions',
    name: 'actions',
    type: 'json',
    default:
      '[\n  {\n    "action_name": "add_label",\n    "action_params": [\n      "support"\n    ]\n  }\n]',
    description:
      'Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.',
    routing: {
      send: {
        property: 'actions',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Add New Automation Rule To Account'],
      },
    },
  },
  {
    displayName: 'Conditions',
    name: 'conditions',
    type: 'json',
    default:
      '[\n  {\n    "attribute_key": "content",\n    "filter_operator": "contains",\n    "query_operator": "OR",\n    "values": [\n      "help"\n    ]\n  }\n]',
    description:
      'Array of conditions on which conversation filter would work, e.g message content contains text help.',
    routing: {
      send: {
        property: 'conditions',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Add New Automation Rule To Account'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/automation_rules/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Get Details Of A Single Automation Rule'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the automation rule to be updated.',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Get Details Of A Single Automation Rule'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/automation_rules/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the automation rule to be updated.',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Add label on message create event',
    description: 'Rule name',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default:
      'Add label support and sales on message create event if incoming message content contains text help',
    description: 'The description about the automation and actions',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'Event Name',
    name: 'event_name',
    type: 'options',
    default: 'message_created',
    description: 'The event when you want to execute the automation actions',
    options: [
      {
        name: 'Conversation Created',
        value: 'conversation_created',
      },
      {
        name: 'Conversation Updated',
        value: 'conversation_updated',
      },
      {
        name: 'Conversation Resolved',
        value: 'conversation_resolved',
      },
      {
        name: 'Message Created',
        value: 'message_created',
      },
    ],
    routing: {
      send: {
        property: 'event_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'Active',
    name: 'active',
    type: 'boolean',
    default: true,
    description: 'Enable/disable automation rule',
    routing: {
      send: {
        property: 'active',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'Actions',
    name: 'actions',
    type: 'json',
    default:
      '[\n  {\n    "action_name": "add_label",\n    "action_params": [\n      "support"\n    ]\n  }\n]',
    description:
      'Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.',
    routing: {
      send: {
        property: 'actions',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'Conditions',
    name: 'conditions',
    type: 'json',
    default:
      '[\n  {\n    "attribute_key": "content",\n    "filter_operator": "contains",\n    "query_operator": "OR",\n    "values": [\n      "help"\n    ]\n  }\n]',
    description:
      'Array of conditions on which conversation filter would work, e.g message content contains text help.',
    routing: {
      send: {
        property: 'conditions',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Update Automation Rule In Account'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/automation_rules/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Delete Automation Rule From Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The ID of the automation rule to be deleted',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Automation Rule'],
        operation: ['Delete Automation Rule From Account'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/portals',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Color',
    name: 'color',
    type: 'string',
    default: '#FFFFFF',
    description: 'Header color for help-center in hex format',
    routing: {
      send: {
        property: 'color',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Custom Domain',
    name: 'custom_domain',
    type: 'string',
    default: 'chatwoot.help',
    description: 'Custom domain to display help center.',
    routing: {
      send: {
        property: 'custom_domain',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Header Text',
    name: 'header_text',
    type: 'string',
    default: 'Handbook',
    description: 'Help center header',
    routing: {
      send: {
        property: 'header_text',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Homepage Link',
    name: 'homepage_link',
    type: 'string',
    default: 'https://www.chatwoot.com/',
    description: 'link to main dashboard',
    routing: {
      send: {
        property: 'homepage_link',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Handbook',
    description: 'Name for the portal',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Page Title',
    name: 'page_title',
    type: 'string',
    default: 'Handbook',
    description: 'Page title for the portal',
    routing: {
      send: {
        property: 'page_title',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Slug',
    name: 'slug',
    type: 'string',
    default: 'handbook',
    description: 'Slug for the portal to display in link',
    routing: {
      send: {
        property: 'slug',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Archived',
    name: 'archived',
    type: 'boolean',
    default: false,
    description: 'Status to check if portal is live',
    routing: {
      send: {
        property: 'archived',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'Config',
    name: 'config',
    type: 'json',
    default:
      '{\n  "allowed_locales": [\n    "en",\n    "es"\n  ],\n  "default_locale": "en"\n}',
    description: 'Configuration about supporting locales',
    routing: {
      send: {
        property: 'config',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Portal To Account'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/portals',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Get Portal'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Get Portal'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/portals/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'The slug identifier of the portal',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Color',
    name: 'color',
    type: 'string',
    default: '#FFFFFF',
    description: 'Header color for help-center in hex format',
    routing: {
      send: {
        property: 'color',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Custom Domain',
    name: 'custom_domain',
    type: 'string',
    default: 'chatwoot.help',
    description: 'Custom domain to display help center.',
    routing: {
      send: {
        property: 'custom_domain',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Header Text',
    name: 'header_text',
    type: 'string',
    default: 'Handbook',
    description: 'Help center header',
    routing: {
      send: {
        property: 'header_text',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Homepage Link',
    name: 'homepage_link',
    type: 'string',
    default: 'https://www.chatwoot.com/',
    description: 'link to main dashboard',
    routing: {
      send: {
        property: 'homepage_link',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Handbook',
    description: 'Name for the portal',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Page Title',
    name: 'page_title',
    type: 'string',
    default: 'Handbook',
    description: 'Page title for the portal',
    routing: {
      send: {
        property: 'page_title',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Slug',
    name: 'slug',
    type: 'string',
    default: 'handbook',
    description: 'Slug for the portal to display in link',
    routing: {
      send: {
        property: 'slug',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Archived',
    name: 'archived',
    type: 'boolean',
    default: false,
    description: 'Status to check if portal is live',
    routing: {
      send: {
        property: 'archived',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'Config',
    name: 'config',
    type: 'json',
    default:
      '{\n  "allowed_locales": [\n    "en",\n    "es"\n  ],\n  "default_locale": "en"\n}',
    description: 'Configuration about supporting locales',
    routing: {
      send: {
        property: 'config',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Update Portal To Account'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/portals/{id}/categories',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Category Name',
    description: 'The name of the category',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'Category description',
    description: 'A description for the category',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Position',
    name: 'position',
    type: 'number',
    default: 1,
    description: 'Category position in the portal list to sort',
    routing: {
      send: {
        property: 'position',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Slug',
    name: 'slug',
    type: 'string',
    default: 'category-name',
    description: 'The category slug used in the URL',
    routing: {
      send: {
        property: 'slug',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: 'en',
    description: 'The locale of the category',
    routing: {
      send: {
        property: 'locale',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Icon',
    name: 'icon',
    type: 'string',
    default: '📚',
    description: 'The icon of the category as a string (emoji)',
    routing: {
      send: {
        property: 'icon',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Parent Category Id',
    name: 'parent_category_id',
    type: 'number',
    default: 1,
    description:
      'To define parent category, e.g product documentation has multiple level features in sales category or in engineering category.',
    routing: {
      send: {
        property: 'parent_category_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'Associated Category Id',
    name: 'associated_category_id',
    type: 'number',
    default: 2,
    description:
      'To associate similar categories to each other, e.g same category of product documentation in different languages',
    routing: {
      send: {
        property: 'associated_category_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Category To Account'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/portals/{id}/articles',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Title',
    name: 'title',
    type: 'string',
    default: 'Article Title',
    description: 'The title of the article',
    routing: {
      send: {
        property: 'title',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Slug',
    name: 'slug',
    type: 'string',
    default: 'article-title',
    description: 'The slug of the article',
    routing: {
      send: {
        property: 'slug',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Position',
    name: 'position',
    type: 'number',
    default: 1,
    description: 'article position in category',
    routing: {
      send: {
        property: 'position',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: 'This is the content of the article',
    description: 'The text content.',
    routing: {
      send: {
        property: 'content',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'This is the description of the article',
    description: 'The description of the article',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Category Id',
    name: 'category_id',
    type: 'number',
    default: 1,
    description: 'The category id of the article',
    routing: {
      send: {
        property: 'category_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Author Id',
    name: 'author_id',
    type: 'number',
    default: 1,
    description: 'The author agent id of the article',
    routing: {
      send: {
        property: 'author_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Associated Article Id',
    name: 'associated_article_id',
    type: 'number',
    default: 2,
    description:
      'To associate similar articles to each other, e.g to provide the link for the reference.',
    routing: {
      send: {
        property: 'associated_article_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'number',
    default: 1,
    description:
      'The status of the article. 0 for draft, 1 for published, 2 for archived',
    routing: {
      send: {
        property: 'status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: 'en',
    description: 'The locale of the article',
    routing: {
      send: {
        property: 'locale',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'Meta',
    name: 'meta',
    type: 'json',
    default:
      '{\n  "tags": [\n    "article_name"\n  ],\n  "title": "article title",\n  "description": "article description"\n}',
    description: 'Use for search',
    routing: {
      send: {
        property: 'meta',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Help Center'],
        operation: ['Add New Article To Account'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/conversations/meta',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List Meta'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    description: 'Filter by conversation status.',
    default: 'open',
    type: 'options',
    options: [
      {
        name: 'All',
        value: 'all',
      },
      {
        name: 'Open',
        value: 'open',
      },
      {
        name: 'Resolved',
        value: 'resolved',
      },
      {
        name: 'Pending',
        value: 'pending',
      },
      {
        name: 'Snoozed',
        value: 'snoozed',
      },
    ],
    routing: {
      send: {
        type: 'query',
        property: 'status',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List Meta'],
      },
    },
  },
  {
    displayName: 'Q',
    name: 'q',
    description:
      'Filters conversations with messages containing the search term',
    default: '',
    type: 'string',
    routing: {
      send: {
        type: 'query',
        property: 'q',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List Meta'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    name: 'inbox_id',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'inbox_id',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List Meta'],
      },
    },
  },
  {
    displayName: 'Team Id',
    name: 'team_id',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'team_id',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List Meta'],
      },
    },
  },
  {
    displayName: 'Labels',
    name: 'labels',
    default: '[\n  null\n]',
    type: 'json',
    routing: {
      send: {
        type: 'query',
        property: 'labels',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List Meta'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/conversations',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'Assignee Type',
    name: 'assignee_type',
    description: 'Filter conversations by assignee type.',
    default: 'all',
    type: 'options',
    options: [
      {
        name: 'Me',
        value: 'me',
      },
      {
        name: 'Unassigned',
        value: 'unassigned',
      },
      {
        name: 'All',
        value: 'all',
      },
      {
        name: 'Assigned',
        value: 'assigned',
      },
    ],
    routing: {
      send: {
        type: 'query',
        property: 'assignee_type',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    description: 'Filter by conversation status.',
    default: 'open',
    type: 'options',
    options: [
      {
        name: 'All',
        value: 'all',
      },
      {
        name: 'Open',
        value: 'open',
      },
      {
        name: 'Resolved',
        value: 'resolved',
      },
      {
        name: 'Pending',
        value: 'pending',
      },
      {
        name: 'Snoozed',
        value: 'snoozed',
      },
    ],
    routing: {
      send: {
        type: 'query',
        property: 'status',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'Q',
    name: 'q',
    description:
      'Filters conversations with messages containing the search term',
    default: '',
    type: 'string',
    routing: {
      send: {
        type: 'query',
        property: 'q',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    name: 'inbox_id',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'inbox_id',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'Team Id',
    name: 'team_id',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'team_id',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'Labels',
    name: 'labels',
    default: '[\n  null\n]',
    type: 'json',
    routing: {
      send: {
        type: 'query',
        property: 'labels',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    description: 'paginate through conversations',
    default: 1,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation List'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/conversations',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Source Id',
    required: true,
    name: 'source_id',
    type: 'string',
    default: '1234567890',
    description: 'Conversation source id',
    routing: {
      send: {
        property: 'source_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    required: true,
    name: 'inbox_id',
    type: 'number',
    default: 1,
    description:
      'Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email',
    routing: {
      send: {
        property: 'inbox_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Contact Id',
    name: 'contact_id',
    type: 'number',
    default: 1,
    description: 'Contact Id for which conversation is created',
    routing: {
      send: {
        property: 'contact_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Additional Attributes',
    name: 'additional_attributes',
    type: 'json',
    default:
      '{\n  "browser": "Chrome",\n  "browser_version": "89.0.4389.82",\n  "os": "Windows",\n  "os_version": "10"\n}',
    description: 'Lets you specify attributes like browser information',
    routing: {
      send: {
        property: 'additional_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    name: 'custom_attributes',
    type: 'json',
    default:
      '{\n  "attribute_key": "attribute_value",\n  "priority_conversation_number": 3\n}',
    description:
      'The object to save custom attributes for conversation, accepts custom attributes key and value',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: 'open',
    description: "Specify the conversation whether it's pending, open, closed",
    options: [
      {
        name: 'Open',
        value: 'open',
      },
      {
        name: 'Resolved',
        value: 'resolved',
      },
      {
        name: 'Pending',
        value: 'pending',
      },
    ],
    routing: {
      send: {
        property: 'status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Assignee Id',
    name: 'assignee_id',
    type: 'number',
    default: 1,
    description: 'Agent Id for assigning a conversation to an agent',
    routing: {
      send: {
        property: 'assignee_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Team Id',
    name: 'team_id',
    type: 'number',
    default: 1,
    description: 'Team Id for assigning a conversation to a team\\',
    routing: {
      send: {
        property: 'team_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Snoozed Until',
    name: 'snoozed_until',
    type: 'string',
    default: '2030-07-21T17:32:28Z',
    description: 'Snoozed until date time',
    routing: {
      send: {
        property: 'snoozed_until',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'Message',
    name: 'message',
    type: 'json',
    default:
      '{\n  "content": "Hello, how can I help you?",\n  "template_params": {\n    "name": "sample_issue_resolution",\n    "category": "UTILITY",\n    "language": "en_US",\n    "processed_params": {\n      "1": "Chatwoot"\n    }\n  }\n}',
    description: 'The initial message to be sent to the conversation',
    routing: {
      send: {
        property: 'message',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['New Conversation'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/conversations/filter',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation Filter'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation Filter'],
      },
    },
  },
  {
    displayName: 'Payload',
    name: 'payload',
    type: 'json',
    default:
      '[\n  {\n    "attribute_key": "browser_language",\n    "filter_operator": "not_equal_to",\n    "values": [\n      "en"\n    ],\n    "query_operator": "AND"\n  },\n  {\n    "attribute_key": "status",\n    "filter_operator": "equal_to",\n    "values": [\n      "pending"\n    ],\n    "query_operator": null\n  }\n]',
    routing: {
      send: {
        property: 'payload',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation Filter'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Get Details Of A Conversation'],
      },
    },
  },
  {
    displayName:
      'PATCH /api/v1/accounts/{account_id}/conversations/{conversation_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Update Conversation'],
      },
    },
  },
  {
    displayName: 'Priority',
    name: 'priority',
    type: 'options',
    default: 'high',
    description: 'The priority of the conversation',
    options: [
      {
        name: 'Urgent',
        value: 'urgent',
      },
      {
        name: 'High',
        value: 'high',
      },
      {
        name: 'Medium',
        value: 'medium',
      },
      {
        name: 'Low',
        value: 'low',
      },
      {
        name: 'None',
        value: 'none',
      },
    ],
    routing: {
      send: {
        property: 'priority',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Update Conversation'],
      },
    },
  },
  {
    displayName: 'Sla Policy Id',
    name: 'sla_policy_id',
    type: 'number',
    default: 1,
    description:
      'The ID of the SLA policy (Available only in Enterprise edition)',
    routing: {
      send: {
        property: 'sla_policy_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Update Conversation'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Toggle Status Of A Conversation'],
      },
    },
  },
  {
    displayName: 'Status',
    required: true,
    name: 'status',
    type: 'options',
    default: 'open',
    description: 'The status of the conversation',
    options: [
      {
        name: 'Open',
        value: 'open',
      },
      {
        name: 'Resolved',
        value: 'resolved',
      },
      {
        name: 'Pending',
        value: 'pending',
      },
      {
        name: 'Snoozed',
        value: 'snoozed',
      },
    ],
    routing: {
      send: {
        property: 'status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Toggle Status Of A Conversation'],
      },
    },
  },
  {
    displayName: 'Snoozed Until',
    name: 'snoozed_until',
    type: 'number',
    default: 1757506877,
    description:
      'When status is `snoozed`, schedule the reopen time as a Unix timestamp in seconds. If not provided, the conversation is snoozed until the next customer reply. The conversation always reopens when the customer replies.',
    routing: {
      send: {
        property: 'snoozed_until',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Toggle Status Of A Conversation'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Toggle Priority Of A Conversation'],
      },
    },
  },
  {
    displayName: 'Priority',
    required: true,
    name: 'priority',
    type: 'options',
    default: 'high',
    description: 'The priority of the conversation',
    options: [
      {
        name: 'Urgent',
        value: 'urgent',
      },
      {
        name: 'High',
        value: 'high',
      },
      {
        name: 'Medium',
        value: 'medium',
      },
      {
        name: 'Low',
        value: 'low',
      },
      {
        name: 'None',
        value: 'none',
      },
    ],
    routing: {
      send: {
        property: 'priority',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Toggle Priority Of A Conversation'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/custom_attributes',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Update Custom Attributes Of A Conversation'],
      },
    },
  },
  {
    displayName: 'Custom Attributes',
    required: true,
    name: 'custom_attributes',
    type: 'json',
    default: '{\n  "order_id": "12345",\n  "previous_conversation": "67890"\n}',
    description: 'The custom attributes to be set for the conversation',
    routing: {
      send: {
        property: 'custom_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Update Custom Attributes Of A Conversation'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversation Assignments'],
        operation: ['Assign A Conversation'],
      },
    },
  },
  {
    displayName: 'Assignee Id',
    name: 'assignee_id',
    type: 'number',
    default: 1,
    description: 'Id of the assignee user',
    routing: {
      send: {
        property: 'assignee_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversation Assignments'],
        operation: ['Assign A Conversation'],
      },
    },
  },
  {
    displayName: 'Team Id',
    name: 'team_id',
    type: 'number',
    default: 1,
    description:
      'Id of the team. If the assignee_id is present, this param would be ignored',
    routing: {
      send: {
        property: 'team_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversation Assignments'],
        operation: ['Assign A Conversation'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['List All Labels Of A Conversation'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation Add Labels'],
      },
    },
  },
  {
    displayName: 'Labels',
    required: true,
    name: 'labels',
    type: 'json',
    default: '[\n  "support",\n  "billing"\n]',
    description: 'Array of labels (comma-separated strings)',
    routing: {
      send: {
        property: 'labels',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Conversation Add Labels'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversations'],
        operation: ['Get Conversation Reporting Events'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/inboxes',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['List All Inboxes'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['List All Inboxes'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/inboxes/{id}/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'ID of the inbox',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/inboxes/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Support',
    description: 'The name of the inbox',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description: 'Image file for avatar',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Greeting Enabled',
    name: 'greeting_enabled',
    type: 'boolean',
    default: true,
    description: 'Enable greeting message',
    routing: {
      send: {
        property: 'greeting_enabled',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Greeting Message',
    name: 'greeting_message',
    type: 'string',
    default: 'Hello, how can I help you?',
    description: 'Greeting message to be displayed on the widget',
    routing: {
      send: {
        property: 'greeting_message',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Enable Email Collect',
    name: 'enable_email_collect',
    type: 'boolean',
    default: true,
    description: 'Enable email collection',
    routing: {
      send: {
        property: 'enable_email_collect',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Csat Survey Enabled',
    name: 'csat_survey_enabled',
    type: 'boolean',
    default: true,
    description: 'Enable CSAT survey',
    routing: {
      send: {
        property: 'csat_survey_enabled',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Enable Auto Assignment',
    name: 'enable_auto_assignment',
    type: 'boolean',
    default: true,
    description: 'Enable Auto Assignment',
    routing: {
      send: {
        property: 'enable_auto_assignment',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Working Hours Enabled',
    name: 'working_hours_enabled',
    type: 'boolean',
    default: true,
    description: 'Enable working hours',
    routing: {
      send: {
        property: 'working_hours_enabled',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Out Of Office Message',
    name: 'out_of_office_message',
    type: 'string',
    default:
      'We are currently out of office. Please leave a message and we will get back to you.',
    description: 'Out of office message to be displayed on the widget',
    routing: {
      send: {
        property: 'out_of_office_message',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Timezone',
    name: 'timezone',
    type: 'string',
    default: 'America/New_York',
    description: 'Timezone of the inbox',
    routing: {
      send: {
        property: 'timezone',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Allow Messages After Resolved',
    name: 'allow_messages_after_resolved',
    type: 'boolean',
    default: true,
    description: 'Allow messages after conversation is resolved',
    routing: {
      send: {
        property: 'allow_messages_after_resolved',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Lock To Single Conversation',
    name: 'lock_to_single_conversation',
    type: 'boolean',
    default: true,
    description: 'Lock to single conversation',
    routing: {
      send: {
        property: 'lock_to_single_conversation',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Portal Id',
    name: 'portal_id',
    type: 'number',
    default: 1,
    description: 'Id of the help center portal to attach to the inbox',
    routing: {
      send: {
        property: 'portal_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Sender Name Type',
    name: 'sender_name_type',
    type: 'options',
    default: 'friendly',
    description: 'Sender name type for the inbox',
    options: [
      {
        name: 'Friendly',
        value: 'friendly',
      },
      {
        name: 'Professional',
        value: 'professional',
      },
    ],
    routing: {
      send: {
        property: 'sender_name_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Business Name',
    name: 'business_name',
    type: 'string',
    default: 'My Business',
    description: 'Business name for the inbox',
    routing: {
      send: {
        property: 'business_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'Channel',
    name: 'channel',
    type: 'json',
    default:
      '{\n  "type": "web_widget",\n  "website_url": "https://example.com",\n  "welcome_title": "Welcome to our support",\n  "welcome_tagline": "We are here to help you",\n  "widget_color": "#FF5733"\n}',
    routing: {
      send: {
        property: 'channel',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Inbox Creation'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/inboxes/{id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'ID of the inbox',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Support',
    description: 'The name of the inbox',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description: 'Image file for avatar',
    routing: {
      send: {
        property: 'avatar',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Greeting Enabled',
    name: 'greeting_enabled',
    type: 'boolean',
    default: true,
    description: 'Enable greeting message',
    routing: {
      send: {
        property: 'greeting_enabled',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Greeting Message',
    name: 'greeting_message',
    type: 'string',
    default: 'Hello, how can I help you?',
    description: 'Greeting message to be displayed on the widget',
    routing: {
      send: {
        property: 'greeting_message',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Enable Email Collect',
    name: 'enable_email_collect',
    type: 'boolean',
    default: true,
    description: 'Enable email collection',
    routing: {
      send: {
        property: 'enable_email_collect',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Csat Survey Enabled',
    name: 'csat_survey_enabled',
    type: 'boolean',
    default: true,
    description: 'Enable CSAT survey',
    routing: {
      send: {
        property: 'csat_survey_enabled',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Enable Auto Assignment',
    name: 'enable_auto_assignment',
    type: 'boolean',
    default: true,
    description: 'Enable Auto Assignment',
    routing: {
      send: {
        property: 'enable_auto_assignment',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Working Hours Enabled',
    name: 'working_hours_enabled',
    type: 'boolean',
    default: true,
    description: 'Enable working hours',
    routing: {
      send: {
        property: 'working_hours_enabled',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Out Of Office Message',
    name: 'out_of_office_message',
    type: 'string',
    default:
      'We are currently out of office. Please leave a message and we will get back to you.',
    description: 'Out of office message to be displayed on the widget',
    routing: {
      send: {
        property: 'out_of_office_message',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Timezone',
    name: 'timezone',
    type: 'string',
    default: 'America/New_York',
    description: 'Timezone of the inbox',
    routing: {
      send: {
        property: 'timezone',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Allow Messages After Resolved',
    name: 'allow_messages_after_resolved',
    type: 'boolean',
    default: true,
    description: 'Allow messages after conversation is resolved',
    routing: {
      send: {
        property: 'allow_messages_after_resolved',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Lock To Single Conversation',
    name: 'lock_to_single_conversation',
    type: 'boolean',
    default: true,
    description: 'Lock to single conversation',
    routing: {
      send: {
        property: 'lock_to_single_conversation',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Portal Id',
    name: 'portal_id',
    type: 'number',
    default: 1,
    description: 'Id of the help center portal to attach to the inbox',
    routing: {
      send: {
        property: 'portal_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Sender Name Type',
    name: 'sender_name_type',
    type: 'options',
    default: 'friendly',
    description: 'Sender name type for the inbox',
    options: [
      {
        name: 'Friendly',
        value: 'friendly',
      },
      {
        name: 'Professional',
        value: 'professional',
      },
    ],
    routing: {
      send: {
        property: 'sender_name_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Business Name',
    name: 'business_name',
    type: 'string',
    default: 'My Business',
    description: 'Business name for the inbox',
    routing: {
      send: {
        property: 'business_name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'Channel',
    name: 'channel',
    type: 'json',
    default:
      '{\n  "website_url": "https://example.com",\n  "welcome_title": "Welcome to our support",\n  "welcome_tagline": "We are here to help you",\n  "widget_color": "#FF5733"\n}',
    routing: {
      send: {
        property: 'channel',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Inbox'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/inboxes/{id}/agent_bot',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox Agent Bot'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox Agent Bot'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'ID of the inbox',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox Agent Bot'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Agent Bot'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Agent Bot'],
      },
    },
  },
  {
    displayName: 'Id',
    name: 'id',
    required: true,
    description: 'ID of the inbox',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Agent Bot'],
      },
    },
  },
  {
    displayName: 'Agent Bot',
    required: true,
    name: 'agent_bot',
    type: 'number',
    default: 1,
    description: 'Agent bot ID',
    routing: {
      send: {
        property: 'agent_bot',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Agent Bot'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/inbox_members/{inbox_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox Members'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    name: 'inbox_id',
    required: true,
    description: 'The ID of the Inbox',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Get Inbox Members'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/inbox_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Add New Agent To Inbox'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    required: true,
    name: 'inbox_id',
    type: 'number',
    default: 1,
    description: 'The ID of the inbox',
    routing: {
      send: {
        property: 'inbox_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Add New Agent To Inbox'],
      },
    },
  },
  {
    displayName: 'User Ids',
    required: true,
    name: 'user_ids',
    type: 'json',
    default: '[\n  1\n]',
    description: 'IDs of users to be added to the inbox',
    routing: {
      send: {
        property: 'user_ids',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Add New Agent To Inbox'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/inbox_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Agents In Inbox'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    required: true,
    name: 'inbox_id',
    type: 'string',
    default: 1,
    description: 'The ID of the inbox',
    routing: {
      send: {
        property: 'inbox_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Agents In Inbox'],
      },
    },
  },
  {
    displayName: 'User Ids',
    required: true,
    name: 'user_ids',
    type: 'json',
    default: '[\n  1\n]',
    description: 'IDs of users to be added to the inbox',
    routing: {
      send: {
        property: 'user_ids',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Update Agents In Inbox'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/inbox_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Delete Agent In Inbox'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    required: true,
    name: 'inbox_id',
    type: 'string',
    default: '',
    description: 'The ID of the inbox',
    routing: {
      send: {
        property: 'inbox_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Delete Agent In Inbox'],
      },
    },
  },
  {
    displayName: 'User Ids',
    required: true,
    name: 'user_ids',
    type: 'json',
    default: '[\n  null\n]',
    description: 'IDs of users to be deleted from the inbox',
    routing: {
      send: {
        property: 'user_ids',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Inboxes'],
        operation: ['Delete Agent In Inbox'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['List All Messages'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName: 'Content',
    required: true,
    name: 'content',
    type: 'string',
    default: 'Hello, how can I help you?',
    description: 'The content of the message',
    routing: {
      send: {
        property: 'content',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName: 'Message Type',
    name: 'message_type',
    type: 'options',
    default: 'outgoing',
    description: 'The type of the message',
    options: [
      {
        name: 'Outgoing',
        value: 'outgoing',
      },
      {
        name: 'Incoming',
        value: 'incoming',
      },
    ],
    routing: {
      send: {
        property: 'message_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName: 'Private',
    name: 'private',
    type: 'boolean',
    default: false,
    description: 'Flag to identify if it is a private note',
    routing: {
      send: {
        property: 'private',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName: 'Content Type',
    name: 'content_type',
    type: 'options',
    default: 'text',
    description: 'Content type of the message',
    options: [
      {
        name: 'Text',
        value: 'text',
      },
      {
        name: 'Input Email',
        value: 'input_email',
      },
      {
        name: 'Cards',
        value: 'cards',
      },
      {
        name: 'Input Select',
        value: 'input_select',
      },
      {
        name: 'Form',
        value: 'form',
      },
      {
        name: 'Article',
        value: 'article',
      },
    ],
    routing: {
      send: {
        property: 'content_type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName: 'Content Attributes',
    name: 'content_attributes',
    type: 'json',
    default: '{}',
    description: 'Attributes based on the content type',
    routing: {
      send: {
        property: 'content_attributes',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName: 'Campaign Id',
    name: 'campaign_id',
    type: 'number',
    default: 1,
    description: 'The campaign id to which the message belongs',
    routing: {
      send: {
        property: 'campaign_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName: 'Template Params',
    name: 'template_params',
    type: 'json',
    default:
      '{\n  "name": "purchase_receipt",\n  "category": "UTILITY",\n  "language": "en_US",\n  "processed_params": {\n    "body": {\n      "1": "Visa",\n      "2": "Nike",\n      "3": "Bill"\n    },\n    "header": {\n      "media_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",\n      "media_type": "document"\n    },\n    "buttons": [\n      {\n        "parameter": "SSFSDFSD"\n      }\n    ]\n  }\n}',
    description: 'WhatsApp template parameters for sending structured messages',
    routing: {
      send: {
        property: 'template_params',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Create A New Message In A Conversation'],
      },
    },
  },
  {
    displayName:
      'DELETE /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messages'],
        operation: ['Delete A Message'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/integrations/apps',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Get Details Of All Integrations'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/integrations/hooks',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Create An Integration Hook'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Create An Integration Hook'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    type: 'number',
    default: 1,
    description: 'The ID of app for which integration hook is being created',
    routing: {
      send: {
        property: 'app_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Create An Integration Hook'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    name: 'inbox_id',
    type: 'number',
    default: 1,
    description: 'The inbox ID, if the hook is an inbox hook',
    routing: {
      send: {
        property: 'inbox_id',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Create An Integration Hook'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'number',
    default: 1,
    description: 'The status of the integration (0 for inactive, 1 for active)',
    routing: {
      send: {
        property: 'status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Create An Integration Hook'],
      },
    },
  },
  {
    displayName: 'Settings',
    name: 'settings',
    type: 'json',
    default: '{}',
    description: 'The settings required by the integration',
    routing: {
      send: {
        property: 'settings',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Create An Integration Hook'],
      },
    },
  },
  {
    displayName:
      'PATCH /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Update An Integrations Hook'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Update An Integrations Hook'],
      },
    },
  },
  {
    displayName: 'Hook Id',
    name: 'hook_id',
    required: true,
    description: 'The numeric ID of the integration hook',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Update An Integrations Hook'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'number',
    default: 1,
    description: 'The status of the integration (0 for inactive, 1 for active)',
    routing: {
      send: {
        property: 'status',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Update An Integrations Hook'],
      },
    },
  },
  {
    displayName: 'Settings',
    name: 'settings',
    type: 'json',
    default: '{}',
    description: 'The settings required by the integration',
    routing: {
      send: {
        property: 'settings',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Update An Integrations Hook'],
      },
    },
  },
  {
    displayName:
      'DELETE /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Delete An Integration Hook'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Delete An Integration Hook'],
      },
    },
  },
  {
    displayName: 'Hook Id',
    name: 'hook_id',
    required: true,
    description: 'The numeric ID of the integration hook',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Integrations'],
        operation: ['Delete An Integration Hook'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/profile',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Profile'],
        operation: ['Fetch Profile'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/teams',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['List All Teams'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/teams',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Create A Team'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Create A Team'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Support Team',
    description: 'The name of the team',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Create A Team'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'This is a team of support agents',
    description: 'The description of the team',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Create A Team'],
      },
    },
  },
  {
    displayName: 'Allow Auto Assign',
    name: 'allow_auto_assign',
    type: 'boolean',
    default: true,
    description:
      'If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team',
    routing: {
      send: {
        property: 'allow_auto_assign',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Create A Team'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/teams/{team_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Get Details Of A Single Team'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/teams/{team_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Update A Team'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'Support Team',
    description: 'The name of the team',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Update A Team'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: 'This is a team of support agents',
    description: 'The description of the team',
    routing: {
      send: {
        property: 'description',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Update A Team'],
      },
    },
  },
  {
    displayName: 'Allow Auto Assign',
    name: 'allow_auto_assign',
    type: 'boolean',
    default: true,
    description:
      'If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team',
    routing: {
      send: {
        property: 'allow_auto_assign',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Update A Team'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/teams/{team_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Delete A Team'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Get Team Members'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Get Team Members'],
      },
    },
  },
  {
    displayName: 'Team Id',
    name: 'team_id',
    required: true,
    description: 'The ID of the team to be updated',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Get Team Members'],
      },
    },
  },
  {
    displayName:
      'POST /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Add New Agent To Team'],
      },
    },
  },
  {
    displayName: 'User Ids',
    required: true,
    name: 'user_ids',
    type: 'json',
    default: '[\n  1\n]',
    description: 'IDs of users to be added to the team',
    routing: {
      send: {
        property: 'user_ids',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Add New Agent To Team'],
      },
    },
  },
  {
    displayName:
      'PATCH /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Update Agents In Team'],
      },
    },
  },
  {
    displayName: 'User Ids',
    required: true,
    name: 'user_ids',
    type: 'json',
    default: '[\n  1\n]',
    description: 'IDs of users to be added to the team',
    routing: {
      send: {
        property: 'user_ids',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Update Agents In Team'],
      },
    },
  },
  {
    displayName:
      'DELETE /api/v1/accounts/{account_id}/teams/{team_id}/team_members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Delete Agent In Team'],
      },
    },
  },
  {
    displayName: 'User Ids',
    required: true,
    name: 'user_ids',
    type: 'json',
    default: '[\n  null\n]',
    description: 'IDs of users to be deleted from the team',
    routing: {
      send: {
        property: 'user_ids',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Teams'],
        operation: ['Delete Agent In Team'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/custom_filters',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['List All Filters'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/custom_filters',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Create A Custom Filter'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Create A Custom Filter'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Custom Filter',
    description: 'The name of the custom filter',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Create A Custom Filter'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'options',
    default: 'conversation',
    description: 'The description about the custom filter',
    options: [
      {
        name: 'Conversation',
        value: 'conversation',
      },
      {
        name: 'Contact',
        value: 'contact',
      },
      {
        name: 'Report',
        value: 'report',
      },
    ],
    routing: {
      send: {
        property: 'type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Create A Custom Filter'],
      },
    },
  },
  {
    displayName: 'Query',
    name: 'query',
    type: 'json',
    default: '{}',
    description: 'A query that needs to be saved as a custom filter',
    routing: {
      send: {
        property: 'query',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Create A Custom Filter'],
      },
    },
  },
  {
    displayName:
      'GET /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Get Details Of A Single Custom Filter'],
      },
    },
  },
  {
    displayName:
      'PATCH /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Update A Custom Filter'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: 'My Custom Filter',
    description: 'The name of the custom filter',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Update A Custom Filter'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'options',
    default: 'conversation',
    description: 'The description about the custom filter',
    options: [
      {
        name: 'Conversation',
        value: 'conversation',
      },
      {
        name: 'Contact',
        value: 'contact',
      },
      {
        name: 'Report',
        value: 'report',
      },
    ],
    routing: {
      send: {
        property: 'type',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Update A Custom Filter'],
      },
    },
  },
  {
    displayName: 'Query',
    name: 'query',
    type: 'json',
    default: '{}',
    description: 'A query that needs to be saved as a custom filter',
    routing: {
      send: {
        property: 'query',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Update A Custom Filter'],
      },
    },
  },
  {
    displayName:
      'DELETE /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Custom Filters'],
        operation: ['Delete A Custom Filter'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/webhooks',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['List All Webhooks'],
      },
    },
  },
  {
    displayName: 'POST /api/v1/accounts/{account_id}/webhooks',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Create A Webhook'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Create A Webhook'],
      },
    },
  },
  {
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: 'https://example.com/webhook',
    description: 'The url where the events should be sent',
    routing: {
      send: {
        property: 'url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Create A Webhook'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    description: 'The name of the webhook',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Create A Webhook'],
      },
    },
  },
  {
    displayName: 'Subscriptions',
    name: 'subscriptions',
    type: 'json',
    default: '[\n  "conversation_created",\n  "conversation_status_changed"\n]',
    description: 'The events you want to subscribe to.',
    routing: {
      send: {
        property: 'subscriptions',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Create A Webhook'],
      },
    },
  },
  {
    displayName: 'PATCH /api/v1/accounts/{account_id}/webhooks/{webhook_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Update A Webhook'],
      },
    },
  },
  {
    displayName: 'Account Id',
    name: 'account_id',
    required: true,
    description: 'The numeric ID of the account',
    default: 0,
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Update A Webhook'],
      },
    },
  },
  {
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: 'https://example.com/webhook',
    description: 'The url where the events should be sent',
    routing: {
      send: {
        property: 'url',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Update A Webhook'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    description: 'The name of the webhook',
    routing: {
      send: {
        property: 'name',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ $value }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Update A Webhook'],
      },
    },
  },
  {
    displayName: 'Subscriptions',
    name: 'subscriptions',
    type: 'json',
    default: '[\n  "conversation_created",\n  "conversation_status_changed"\n]',
    description: 'The events you want to subscribe to.',
    routing: {
      send: {
        property: 'subscriptions',
        propertyInDotNotation: false,
        type: 'body',
        value: '={{ JSON.parse($value) }}',
      },
    },
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Update A Webhook'],
      },
    },
  },
  {
    displayName: 'DELETE /api/v1/accounts/{account_id}/webhooks/{webhook_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Webhooks'],
        operation: ['Delete A Webhook'],
      },
    },
  },
  {
    displayName: 'GET /api/v1/accounts/{account_id}/reporting_events',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Reporting Events'],
      },
    },
  },
  {
    displayName: 'Page',
    name: 'page',
    description: 'The page parameter',
    default: 1,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'page',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Reporting Events'],
      },
    },
  },
  {
    displayName: 'Since',
    name: 'since',
    description:
      'The timestamp from where events should start (Unix timestamp in seconds)',
    default: '',
    type: 'string',
    routing: {
      send: {
        type: 'query',
        property: 'since',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Reporting Events'],
      },
    },
  },
  {
    displayName: 'Until',
    name: 'until',
    description:
      'The timestamp from where events should stop (Unix timestamp in seconds)',
    default: '',
    type: 'string',
    routing: {
      send: {
        type: 'query',
        property: 'until',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Reporting Events'],
      },
    },
  },
  {
    displayName: 'Inbox Id',
    name: 'inbox_id',
    description: 'Filter events by inbox ID',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'inbox_id',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Reporting Events'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    description: 'Filter events by user/agent ID',
    default: 0,
    type: 'number',
    routing: {
      send: {
        type: 'query',
        property: 'user_id',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Reporting Events'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    description:
      'Filter events by event name (e.g., first_response, resolution, reply_time)',
    default: '',
    type: 'string',
    routing: {
      send: {
        type: 'query',
        property: 'name',
        value: '={{ $value }}',
        propertyInDotNotation: false,
      },
    },
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Reporting Events'],
      },
    },
  },
  {
    displayName: 'GET /api/v2/accounts/{account_id}/reports',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['List All Conversation Statistics'],
      },
    },
  },
  {
    displayName: 'GET /api/v2/accounts/{account_id}/reports/summary',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['List All Conversation Statistics Summary'],
      },
    },
  },
  {
    displayName: 'GET /api/v2/accounts/{account_id}/reports/conversations',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Account Conversation Metrics'],
      },
    },
  },
  {
    displayName: 'GET /api/v2/accounts/{account_id}/reports/conversations/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Reports'],
        operation: ['Get Agent Conversation Metrics'],
      },
    },
  },
  {
    displayName:
      'GET /accounts/{account_id}/conversations/{conversation_id}/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Conversation'],
        operation: ['Get Conversation Messages'],
      },
    },
  },
];

export default properties;
