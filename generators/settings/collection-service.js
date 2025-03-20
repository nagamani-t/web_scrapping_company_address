/* eslint-disable no-undef */

module.export = {
  description: 'Creates a new collection',
  prompts: [
    {
      type: 'input',
      name: 'collection_name',
      message: 'What is the name of the collection?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/data/client/{{dashCase name}}.ts',
      templateFile: 'templates/client.template.ts.hbs',
      skipIfExists: true
    },
    {
      type: 'add',
      path: '../src/data/{{dashCase name}}.ts',
      templateFile: 'templates/network-calls.template.ts.hbs',
      skipIfExists: true
    },
    {
      type: 'modify',
      path: '../src/data/client/api-endpoints.ts',
      pattern: /(export const API_ENDPOINTS = {\s*)(\n*)(\s*)/,
      template: `$1$2$3{{constantCase name}}: '{{apiEndPoint}}',\n$3`
    }
  ]
}
