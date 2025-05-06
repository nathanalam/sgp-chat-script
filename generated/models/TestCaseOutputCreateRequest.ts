/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationTraceSpanRequest } from './EvaluationTraceSpanRequest';
import type { ResultSchemaFlexible } from './ResultSchemaFlexible';
import type { ResultSchemaGeneration } from './ResultSchemaGeneration';
export type TestCaseOutputCreateRequest = {
    application_variant_id: string;
    test_case_id: string;
    output: (ResultSchemaGeneration | ResultSchemaFlexible);
    evaluation_dataset_version_num: number;
    /**
     * List of trace spans associated with the application's execution. These spans provide insight into the individual steps taken by nodes involved in generating the output.
     */
    trace_spans?: Array<EvaluationTraceSpanRequest>;
    metrics?: Record<string, number>;
    /**
     * If set to true, the output batch will be saved even if there are missing outputs for some test cases.
     */
    ignore_missing?: boolean;
};

