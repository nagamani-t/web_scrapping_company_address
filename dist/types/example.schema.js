"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readExamplesResponseSchema = exports.readExamplesRequestSchema = exports.deleteExampleResponseSchema = exports.deleteExampleRequestSchema = exports.updateExampleResponseSchema = exports.updateExampleRequestSchema = exports.readExampleResponseSchema = exports.readExampleRequestSchema = exports.createExampleResponseSchema = exports.createExampleRequestSchema = exports.exampleSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.exampleSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String()
});
exports.createExampleRequestSchema = typebox_1.Type.Omit(exports.exampleSchema, ['_id']);
exports.createExampleResponseSchema = exports.exampleSchema;
exports.readExampleRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String()
});
exports.readExampleResponseSchema = exports.exampleSchema;
exports.updateExampleRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String(),
    Example: typebox_1.Type.Partial(exports.exampleSchema)
});
exports.updateExampleResponseSchema = exports.exampleSchema;
exports.deleteExampleRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String()
});
exports.deleteExampleResponseSchema = typebox_1.Type.Object({
    message: typebox_1.Type.String()
});
exports.readExamplesRequestSchema = typebox_1.Type.Object({
    limit: typebox_1.Type.Optional(typebox_1.Type.Number()),
    offset: typebox_1.Type.Optional(typebox_1.Type.Number())
});
exports.readExamplesResponseSchema = typebox_1.Type.Array(exports.exampleSchema);
//# sourceMappingURL=example.schema.js.map