/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationDatasetResponse } from './EvaluationDatasetResponse';
export type OfflineApplicationEvaluationDataset = {
    application_variant_id: string;
    evaluation_dataset_id: string;
    evaluation_dataset_version_num: number;
    output_count: number;
    test_case_count: number;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    evaluation_dataset: EvaluationDatasetResponse;
};

