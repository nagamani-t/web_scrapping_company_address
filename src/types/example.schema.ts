import { Type, Static } from '@sinclair/typebox'

// Example Schema
export const exampleSchema = Type.Object({
  _id: Type.String()
})

// Type Alias for Example
export type Example = Static<typeof exampleSchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new Example.
export const createExampleRequestSchema = Type.Omit(exampleSchema, ['_id'])

// 2. Response schema for creating a new Example.
export const createExampleResponseSchema = exampleSchema

// 3. Request schema for reading an existing Example.
export const readExampleRequestSchema = Type.Object({
  _id: Type.String()
})

// 4. Response schema for reading an existing Example.
export const readExampleResponseSchema = exampleSchema

// 5. Request schema for updating an existing Example.
export const updateExampleRequestSchema = Type.Object({
  _id: Type.String(),
  Example: Type.Partial(exampleSchema)
})

// 6. Response schema for updating an existing Example.
export const updateExampleResponseSchema = exampleSchema

// 7. Request schema for deleting an existing Example.
export const deleteExampleRequestSchema = Type.Object({
  _id: Type.String()
})

// 8. Response schema for deleting an existing Example.
export const deleteExampleResponseSchema = Type.Object({
  message: Type.String()
})

// 9. Request schema for reading existing Examples.
export const readExamplesRequestSchema = Type.Object({
  limit: Type.Optional(Type.Number()),
  offset: Type.Optional(Type.Number())
})

// 10. Response schema for reading existing Examples.
export const readExamplesResponseSchema = Type.Array(exampleSchema)
