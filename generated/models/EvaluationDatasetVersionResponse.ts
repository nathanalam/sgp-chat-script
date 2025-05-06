/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EvaluationDatasetVersionResponse = {
    /**
     * The version number, automatically incremented on creation
     */
    num: number;
    /**
     * The ID of the associated evaluation dataset.
     */
    evaluation_dataset_id: string;
    /**
     * Boolean to check whether or not the evaluation dataset is in draft mode
     */
    draft: boolean;
    /**
     * The date and time that all test case results for the evaluation were completed for the evaluation in ISO format.
     */
    published_at?: string;
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
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
};

