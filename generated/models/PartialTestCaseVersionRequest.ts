/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSchemaGeneration } from './ArtifactSchemaGeneration';
import type { SchemaFlexible } from './SchemaFlexible';
import type { SchemaGenerationBase } from './SchemaGenerationBase';
export type PartialTestCaseVersionRequest = {
    test_case_data?: (ArtifactSchemaGeneration | SchemaGenerationBase | SchemaFlexible);
    chat_history?: Record<string, any>;
    test_case_metadata?: Record<string, any>;
    account_id?: string;
    /**
     * Set to true to restore the entity from the database.
     */
    restore?: 'False';
};

