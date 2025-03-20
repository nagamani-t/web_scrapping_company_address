"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUsersResponseSchema = exports.readUsersRequestSchema = exports.deleteUserResponseSchema = exports.deleteUserRequestSchema = exports.updateUserResponseSchema = exports.updateUserRequestSchema = exports.readUserResponseSchema = exports.readUserRequestSchema = exports.createUserResponseSchema = exports.createUserRequestSchema = exports.userSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.userSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String(),
    first_name: typebox_1.Type.String(),
    last_name: typebox_1.Type.String(),
    designation: typebox_1.Type.String(),
    employee_code: typebox_1.Type.String(),
    email: typebox_1.Type.String()
});
exports.createUserRequestSchema = typebox_1.Type.Omit(exports.userSchema, ['_id']);
exports.createUserResponseSchema = exports.userSchema;
exports.readUserRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String()
});
exports.readUserResponseSchema = exports.userSchema;
exports.updateUserRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String(),
    user: typebox_1.Type.Partial(exports.userSchema)
});
exports.updateUserResponseSchema = exports.userSchema;
exports.deleteUserRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String()
});
exports.deleteUserResponseSchema = typebox_1.Type.Object({
    message: typebox_1.Type.String()
});
exports.readUsersRequestSchema = typebox_1.Type.Object({
    limit: typebox_1.Type.Optional(typebox_1.Type.Number()),
    offset: typebox_1.Type.Optional(typebox_1.Type.Number())
});
exports.readUsersResponseSchema = typebox_1.Type.Array(exports.userSchema);
//# sourceMappingURL=example.schema.js.map