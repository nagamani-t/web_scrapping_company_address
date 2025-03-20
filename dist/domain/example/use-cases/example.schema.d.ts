import { Static } from '@sinclair/typebox';
export declare const userSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export type User = Static<typeof userSchema>;
export declare const createUserRequestSchema: import("@sinclair/typebox").TObject<{
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const createUserResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const readUserRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const readUserResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const updateUserRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    user: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        first_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        last_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        designation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        employee_code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const updateUserResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const deleteUserRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const deleteUserResponseSchema: import("@sinclair/typebox").TObject<{
    message: import("@sinclair/typebox").TString;
}>;
export declare const readUsersRequestSchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    offset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const readUsersResponseSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>>;
