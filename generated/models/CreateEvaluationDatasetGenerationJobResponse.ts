/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericAsyncJobStatusEnum } from './GenericAsyncJobStatusEnum';
export type CreateEvaluationDatasetGenerationJobResponse = {
    /**
     * ID of the async job associated with this evaluation dataset generation
     */
    generation_job_id: string;
    /**
     * Status of the async job
     */
    status: GenericAsyncJobStatusEnum;
    /**
     * The timestamp at which the upload job started.
     */
    created_at: string;
    /**
     * The timestamp at which the upload job was last updated.
     */
    updated_at: string;
    /**
     * Optional number of test cases input to the job
     */
    num_test_cases?: number;
    /**
     * Number of test cases that have been generated
     */
    num_completed_test_cases?: number;
    /**
     * Number of chunks in the knowledge base
     */
    total_chunk_count?: number;
    /**
     * Reason for the job's failure, if applicable
     */
    failure_reason?: string;
};

