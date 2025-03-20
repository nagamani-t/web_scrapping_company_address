"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFastifySchema = void 0;
const example_schema_1 = require("@/types/example.schema");
exports.getUserFastifySchema = {
    summary: 'Get all examples',
    tags: ['Example'],
    security: [{}],
    response: {
        200: example_schema_1.readExampleResponseSchema
    }
};
//# sourceMappingURL=get-example.schema.js.map