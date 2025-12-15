.PHONY: clean build link start dev

build:
	#npm run lint && npm run build
	npm run build

link:
	npm link

start:
	cd ~/.n8n/custom && npm link @devlikeapro/n8n-nodes-chatwoot && n8n start

tests:
	npm run test

dev:
	make clean
	#make tests
	make build
	make link
	make start

clean:
	rm -rf ./dist

up-swagger:
	wget -qO- https://raw.githubusercontent.com/chatwoot/chatwoot/refs/heads/develop/swagger/swagger.json | jq '.' > ./openapi.json
