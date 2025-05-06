/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationDatasetResponse } from './EvaluationDatasetResponse';
import type { GenericAsyncJobStatusEnum } from './GenericAsyncJobStatusEnum';
export type EvaluationDatasetReportGeneration = {
    generation_status: GenericAsyncJobStatusEnum;
    evaluation_dataset_version_num: number;
    evaluation_dataset: EvaluationDatasetResponse;
    scored_test_case_count?: number;
};

