/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionWithSpansResponse } from './ApplicationInteractionWithSpansResponse';
import type { ApplicationMetricScoreWithMetadata } from './ApplicationMetricScoreWithMetadata';
import type { egp_api_backend__server__api__models__eval_models_no_gen__TestCaseVersionResponse } from './egp_api_backend__server__api__models__eval_models_no_gen__TestCaseVersionResponse';
import type { ResultSchemaGeneration } from './ResultSchemaGeneration';
export type ApplicationTestCaseGenerationOutputResponseWithViews = {
    interaction?: ApplicationInteractionWithSpansResponse;
    test_case_version?: egp_api_backend__server__api__models__eval_models_no_gen__TestCaseVersionResponse;
    metric_scores?: Array<ApplicationMetricScoreWithMetadata>;
    application_variant_id: string;
    evaluation_dataset_id: string;
    test_case_id: string;
    output: ResultSchemaGeneration;
    schema_type?: 'GENERATION';
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
    metrics?: Record<string, number>;
};

