/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the possible types of values for an application configuration, inputs and outputs.
 *
 * The available types are:
 * - TEXT: Represents a single line of text.
 * - STRING_ARRAY: Represents an array of strings.
 * - NUMBER: Represents a numeric value.
 * - BOOL: Represents a boolean value.
 * - CHUNK_ARRAY: Represents an array of chunks.
 * - DOCUMENT_ARRAY: Represents an array of documents.
 * - KNOWLEDGE_BASE_ID: Represents the ID of a knowledge base.
 * - KNOWLEDGE_BASE_ID_ARRAY: Represents an array of knowledge base IDs.
 * - COMPLETION_MODEL_ID: Represents the ID of a completion model.
 */
export enum ApplicationConfigurationValueType {
    TEXT = 'TEXT',
    STRING_ARRAY = 'STRING_ARRAY',
    NUMBER = 'NUMBER',
    BOOL = 'BOOL',
    CHUNK_ARRAY = 'CHUNK_ARRAY',
    DOCUMENT_ARRAY = 'DOCUMENT_ARRAY',
    KNOWLEDGE_BASE_ID = 'KNOWLEDGE_BASE_ID',
    KNOWLEDGE_BASE_ID_ARRAY = 'KNOWLEDGE_BASE_ID_ARRAY',
    COMPLETION_MODEL_ID = 'COMPLETION_MODEL_ID',
}
