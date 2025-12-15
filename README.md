# @devlikeapro/n8n-nodes-chatwoot

<p align="center">
  <img src="./chatwoot.png" width='150px'/>
  <img src="./n8n.png" width='150px'/>
</p>

Automate your
[**ChatWoot**](https://www.chatwoot.com/)
workflows with
[**n8n**](https://n8n.io/)
!

![screenshot](node.png)

[![npm version](https://img.shields.io/npm/v/@devlikeapro/n8n-nodes-chatwoot.svg)](https://www.npmjs.com/package/@devlikeapro/n8n-nodes-chatwoot)

- GitHub: [devlikeapro/n8n-nodes-chatwoot](http://github.com/devlikeapro/n8n-nodes-chatwoot)
- npm: [@devlikeapro/n8n-nodes-chatwoot](https://www.npmjs.com/package/@devlikeapro/n8n-nodes-chatwoot)
- ChatWoot API reference: [https://www.chatwoot.com/developers/api/](https://www.chatwoot.com/developers/api/)
- 👉 Generated from
  [ChatWoot OpenAPI](https://www.chatwoot.com/developers/api/)
  using
  [**devlikeapro/n8n-openapi-node**](https://github.com/devlikeapro/n8n-openapi-node)

# Tables of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Credentials](#credentials)
    + [Platform](#platform)
    + [User](#user)
    + [Inbox](#inbox)
- [Development](#development)
- [Support the project](#support-the-project)

<!-- tocstop -->

## 🚀 Help Build This Project

If this project saves you time or helps in production, consider supporting its development 🙌

**Your support helps ship features faster and keep the project stable.**

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Development-6f42c1?logo=patreon&logoColor=white)](https://patreon.com/devlikeapro)

# Installation
Install [the community node package in your n8n instance](https://docs.n8n.io/integrations/community-nodes/installation/gui-install/):
```
@devlikeapro/n8n-nodes-chatwoot
```

# Usage
1. Install the community package to your n8n instance.
2. Add **ChatWoot API** **credentials** in **n8n**.
3. Create a new workflow with the **ChatWoot** node.

## Credentials
There are few types of credentials (accounts) that you can use to authenticate with ChatWoot API.

For different ChatWoot API Endpoints you'll need different credentials - please
refer to the [ChatWoot API documentation](https://www.chatwoot.com/developers/api/) for more information.

We suggest you create **ChatWoot API** credentials in **n8n** for each type of account and name it `ChatWoot - {TYPE}` 
for better clarity.

![](./screenshots/n8n-credentials.png)

### Platform
This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.

![](./screenshots/chatwoot-platform-token.png)

### User
This token can be obtained by visiting the profile page or via rails console.
![](./screenshots/chatwoot-profile-token.png)

or **Super Admin** token in some cases

![](./screenshots/chatwoot-admin-token.png)

### Inbox
This token can be obtained by visiting the inbox settings page.

![](./screenshots/chatwoot-inbox-token.png)

# Development
The node is generated from the
[ChatWoot OpenAPI](https://www.chatwoot.com/developers/api/)
using
[**devlikeapro/n8n-openapi-node**](https://github.com/devlikeapro/n8n-openapi-node).

Likely the fix should be done in the OpenAPI specification file or in the generator itself.

# Support the project

You can support the project by donating a small amount to help us improve the project even more.
- [https://patreon.com/devlikeapro](https://patreon.com/devlikeapro)
