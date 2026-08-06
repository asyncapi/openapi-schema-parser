# OpenAPI Schema Parser

> **This repository has moved.**  
> `@asyncapi/openapi-schema-parser` is now maintained inside [`asyncapi/parser-js`](https://github.com/asyncapi/parser-js) as a monorepo package at [`packages/openapi-schema-parser`](https://github.com/asyncapi/parser-js/tree/master/packages/openapi-schema-parser).  
> Please open new issues and pull requests there. The npm package name and public API are unchanged.

An AsyncAPI schema parser for OpenAPI 3.0.x and Swagger 2.x schemas.

> **Note**
> Version >= `3.0.0` of package is only supported by `@asyncapi/parser` version >= `2.0.0`.

<!-- toc is generated with GitHub Actions do not remove toc markers -->

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)

<!-- tocstop -->

## Installation

```bash
npm install @asyncapi/openapi-schema-parser
// OR
yarn add @asyncapi/openapi-schema-parser
```

## Usage

```ts
import { Parser } from '@asyncapi/parser';
import { OpenAPISchemaParser } from '@asyncapi/openapi-schema-parser';

const parser = new Parser();
parser.registerSchemaParser(OpenAPISchemaParser()); 

const asyncapiWithOpenAPI = `
asyncapi: 2.0.0
info:
  title: Example with OpenAPI
  version: 0.1.0
channels:
  example:
    publish:
      message:
        schemaFormat: 'application/vnd.oai.openapi;version=3.0.0'
        payload: # The following is an OpenAPI schema
          type: object
          properties:
            title:
              type: string
              nullable: true
            author:
              type: string
              example: Jack Johnson
`;

const { document } = await parser.parse(asyncapiWithOpenAPI);
```

```js
const { Parser } = require('@asyncapi/parser');
const { OpenAPISchemaParser } = require('@asyncapi/openapi-schema-parser');

const parser = new Parser();
parser.registerSchemaParser(OpenAPISchemaParser()); 

const asyncapiWithOpenAPI = `
asyncapi: 2.0.0
info:
  title: Example with OpenAPI
  version: 0.1.0
channels:
  example:
    publish:
      message:
        schemaFormat: 'application/vnd.oai.openapi;version=3.0.0'
        payload: # The following is an OpenAPI schema
          type: object
          properties:
            title:
              type: string
              nullable: true
            author:
              type: string
              example: Jack Johnson
`;

const { document } = await parser.parse(asyncapiWithOpenAPI);
```

It also supports referencing remote OpenAPI schemas:

```ts
import { Parser } from '@asyncapi/parser';
import { OpenAPISchemaParser } from '@asyncapi/openapi-schema-parser';

const parser = new Parser();
parser.registerSchemaParser(OpenAPISchemaParser()); 

const asyncapiWithOpenAPI = `
asyncapi: 2.0.0
info:
  title: Example with OpenAPI
  version: 0.1.0
channels:
  example:
    publish:
      message:
        schemaFormat: 'application/vnd.oai.openapi;version=3.0.0'
        payload:
          $ref: 'yourserver.com/schemas#/Book'
`;

const { document } = await parser.parse(asyncapiWithOpenAPI);
```
