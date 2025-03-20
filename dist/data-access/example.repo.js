"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExamples = exports.getExample = void 0;
const example_model_1 = require("./models/example.model");
const getExamples = async () => {
    example_model_1.exampleModel.find({});
};
exports.getExamples = getExamples;
const getExample = async (id) => {
    example_model_1.exampleModel.findById({ id });
};
exports.getExample = getExample;
//# sourceMappingURL=example.repo.js.map