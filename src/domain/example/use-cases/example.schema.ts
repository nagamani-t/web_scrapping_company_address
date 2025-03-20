import { Type, Static } from '@sinclair/typebox'

// User Schema
export const userSchema = Type.Object({
  _id: Type.String(),
  first_name: Type.String(),
  last_name: Type.String(),
  designation: Type.String(),
  employee_code: Type.String(),
  email: Type.String()
})

// Type Alias for User
export type User = Static<typeof userSchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new user.
export const createUserRequestSchema = Type.Omit(userSchema, ['_id'])

// 2. Response schema for creating a new user.
export const createUserResponseSchema = userSchema

// 3. Request schema for reading an existing user.
export const readUserRequestSchema = Type.Object({
  _id: Type.String()
})

// 4. Response schema for reading an existing user.
export const readUserResponseSchema = userSchema

// 5. Request schema for updating an existing user.
export const updateUserRequestSchema = Type.Object({
  _id: Type.String(),
  user: Type.Partial(userSchema)
})

// 6. Response schema for updating an existing user.
export const updateUserResponseSchema = userSchema

// 7. Request schema for deleting an existing user.
export const deleteUserRequestSchema = Type.Object({
  _id: Type.String()
})

// 8. Response schema for deleting an existing user.
export const deleteUserResponseSchema = Type.Object({
  message: Type.String()
})

// 9. Request schema for reading existing users.
export const readUsersRequestSchema = Type.Object({
  limit: Type.Optional(Type.Number()),
  offset: Type.Optional(Type.Number())
})

// 10. Response schema for reading existing users.
export const readUsersResponseSchema = Type.Array(userSchema)
