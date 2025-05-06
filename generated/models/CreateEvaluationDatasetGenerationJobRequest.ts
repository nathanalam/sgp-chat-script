/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateEvaluationDatasetGenerationJobRequest = {
    /**
     * Number of test cases to generate for the evaluation dataset
     */
    num_test_cases?: number;
    /**
     * If this flag is true, for every generated test case, the chunks used to generate it will be guaranteed to be from the same document (artifact).
     */
    group_by_artifact_id?: boolean;
    /**
     * List of harms to be used for the evaluation dataset generation. If not provided, generation will use the knowledge base id.
     */
    harms_list?: Array<string>;
    /**
     * Advanced configuration for the evaluation dataset generation job.
     */
    advanced_config?: Record<string, Array<string>>;
    /**
     * Custom instructions for test case generation
     */
    custom_instructions?: string;
};

