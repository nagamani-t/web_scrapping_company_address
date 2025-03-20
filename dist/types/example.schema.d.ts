import { Static } from '@sinclair/typebox';
export declare const exampleSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export type Example = Static<typeof exampleSchema>;
export declare const createExampleRequestSchema: import("@sinclair/typebox").TObject<{}>;
export declare const createExampleResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const readExampleRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const readExampleResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const updateExampleRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    Example: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const updateExampleResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const deleteExampleRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const deleteExampleResponseSchema: import("@sinclair/typebox").TObject<{
    message: import("@sinclair/typebox").TString;
}>;
export declare const readExamplesRequestSchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    offset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const readExamplesResponseSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>>;
