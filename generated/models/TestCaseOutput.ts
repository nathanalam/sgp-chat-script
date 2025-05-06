/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__api__models__eval_models__TestCaseVersionResponse } from './egp_api_backend__server__api__models__eval_models__TestCaseVersionResponse';
import type { EvaluationDatasetORMSchemaTypeEnum } from './EvaluationDatasetORMSchemaTypeEnum';
import type { EvaluationTraceSpanResponse } from './EvaluationTraceSpanResponse';
import type { ResultSchemaFlexible } from './ResultSchemaFlexible';
import type { ResultSchemaGeneration } from './ResultSchemaGeneration';
export type TestCaseOutput = {
    /**
     * The unique identifier of the entity.
     */
    id: string;
    object?: TestCaseOutput.object;
    application_variant_id: string;
    evaluation_dataset_id: string;
    test_case_id: string;
    output: (ResultSchemaGeneration | ResultSchemaFlexible);
    schema_type: EvaluationDatasetORMSchemaTypeEnum;
    application_interaction_id?: string;
    test_case_output_group_id?: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    metrics?: Record<string, number>;
    test_case?: egp_api_backend__server__api__models__eval_models__TestCaseVersionResponse;
    trace_spans?: Array<EvaluationTraceSpanResponse>;
};
export namespace TestCaseOutput {
    export enum object {
        TEST_CASE_OUTPUT = 'test_case_output',
    }
}

