/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionWithSpansResponse } from './ApplicationInteractionWithSpansResponse';
import type { EvaluationDatasetORMSchemaTypeEnum } from './EvaluationDatasetORMSchemaTypeEnum';
import type { ResultSchemaFlexible } from './ResultSchemaFlexible';
import type { ResultSchemaGeneration } from './ResultSchemaGeneration';
export type ApplicationTestCaseOutputWithTraces = {
    application_variant_id: string;
    evaluation_dataset_id: string;
    test_case_version_id: string;
    test_case_id: string;
    output: (ResultSchemaGeneration | ResultSchemaFlexible);
    schema_type: EvaluationDatasetORMSchemaTypeEnum;
    application_interaction_id?: string;
    application_test_case_output_group_id?: string;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    interaction?: ApplicationInteractionWithSpansResponse;
};

