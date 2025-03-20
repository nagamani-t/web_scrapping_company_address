"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleModel = void 0;
const mongoose_1 = require("mongoose");
const exampleSchema = new mongoose_1.default.Schema({});
exports.exampleModel = mongoose_1.default.model('example', exampleSchema);
//# sourceMappingURL=example.model.js.map