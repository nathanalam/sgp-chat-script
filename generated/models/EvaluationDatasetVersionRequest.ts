/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EvaluationDatasetVersionRequest = {
    /**
     * Boolean to check whether or not the evaluation dataset is in draft mode
     */
    draft?: boolean;
    /**
     * The date and time that all test case results for the evaluation were completed for the evaluation in ISO format.
     */
    published_at?: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id?: string;
};

