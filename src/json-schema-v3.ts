/* eslint-disable */
// From https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/schemas/v3.0/schema.json
export const jsonSchemaV3 ={
  type: 'object',
  definitions: {
    Reference: {
      type: 'object',
      required: ['$ref'],
      patternProperties: {
        '^\\$ref$': {
          type: 'string',
          format: 'uri-reference'
        }
      }
    },
    Discriminator: {
      type: 'object',
      required: ['propertyName'],
      properties: {
        propertyName: {
          type: 'string'
        },
        mapping: {
          type: 'object',
          additionalProperties: {
            type: 'string'
          }
        }
      }
    },
    ExternalDocumentation: {
      type: 'object',
      required: ['url'],
      properties: {
        description: {
          type: 'string'
        },
        url: {
          type: 'string',
          format: 'uri-reference'
        }
      },
      patternProperties: {
        '^x-': {}
      },
      additionalProperties: false
    },
    XML: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string',
          format: 'uri'
        },
        prefix: {
          type: 'string'
        },
        attribute: {
          type: 'boolean',
          default: false
        },
        wrapped: {
          type: 'boolean',
          default: false
        }
      },
      patternProperties: {
        '^x-': {}
      },
      additionalProperties: false
    }
  },
  properties: {
    title: {
      type: 'string'
    },
    multipleOf: {
      type: 'number',
      exclusiveMinimum: 0
    },
    maximum: {
      type: 'number'
    },
    exclusiveMaximum: {
      type: 'boolean',
      default: false
    },
    minimum: {
      type: 'number'
    },
    exclusiveMinimum: {
      type: 'boolean',
      default: false
    },
    maxLength: {
      type: 'integer',
      minimum: 0
    },
    minLength: {
      type: 'integer',
      minimum: 0,
      default: 0
    },
    pattern: {
      type: 'string',
      format: 'regex'
    },
    maxItems: {
      type: 'integer',
      minimum: 0
    },
    minItems: {
      type: 'integer',
      minimum: 0,
      default: 0
    },
    uniqueItems: {
      type: 'boolean',
      default: false
    },
    maxProperties: {
      type: 'integer',
      minimum: 0
    },
    minProperties: {
      type: 'integer',
      minimum: 0,
      default: 0
    },
    required: {
      type: 'array',
      items: {
        type: 'string'
      },
      minItems: 1,
      uniqueItems: true
    },
    enum: {
      type: 'array',
      items: {},
      minItems: 1,
      uniqueItems: false
    },
    type: {
      type: 'string',
      enum: ['array', 'boolean', 'integer', 'number', 'object', 'string']
    },
    not: {
      oneOf: [
        {
          $ref: '#'
        },
        {
          $ref: '#/definitions/Reference'
        }
      ]
    },
    allOf: {
      type: 'array',
      items: {
        oneOf: [
          {
            $ref: '#'
          },
          {
            $ref: '#/definitions/Reference'
          }
        ]
      }
    },
    oneOf: {
      type: 'array',
      items: {
        oneOf: [
          {
            $ref: '#'
          },
          {
            $ref: '#/definitions/Reference'
          }
        ]
      }
    },
    anyOf: {
      type: 'array',
      items: {
        oneOf: [
          {
            $ref: '#'
          },
          {
            $ref: '#/definitions/Reference'
          }
        ]
      }
    },
    items: {
      oneOf: [
        {
          $ref: '#'
        },
        {
          $ref: '#/definitions/Reference'
        }
      ]
    },
    properties: {
      type: 'object',
      additionalProperties: {
        oneOf: [
          {
            $ref: '#'
          },
          {
            $ref: '#/definitions/Reference'
          }
        ]
      }
    },
    additionalProperties: {
      oneOf: [
        {
          $ref: '#'
        },
        {
          $ref: '#/definitions/Reference'
        },
        {
          type: 'boolean'
        }
      ],
      default: true
    },
    description: {
      type: 'string'
    },
    format: {
      type: 'string'
    },
    default: {},
    nullable: {
      type: 'boolean',
      default: false
    },
    discriminator: {
      $ref: '#/definitions/Discriminator'
    },
    readOnly: {
      type: 'boolean',
      default: false
    },
    writeOnly: {
      type: 'boolean',
      default: false
    },
    example: {},
    externalDocs: {
      $ref: '#/definitions/ExternalDocumentation'
    },
    deprecated: {
      type: 'boolean',
      default: false
    },
    xml: {
      $ref: '#/definitions/XML'
    }
  },
  patternProperties: {
    '^x-': {}
  },
  additionalProperties: false
};