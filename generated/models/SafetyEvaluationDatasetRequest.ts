/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SafetyEvaluationDatasetRequest = {
    /**
     * Manually or automatically generated dataset
     */
    type?: 'safety';
    /**
     * The name of the dataset
     */
    name: string;
    /**
     * The schema type of the dataset. Only GENERATION is currently supported.
     */
    schema_type: SafetyEvaluationDatasetRequest.schema_type;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * List of harms to generate the dataset for.
     */
    harms_list: Array<string>;
    /**
     * Advanced configuration for the safety evaluation dataset.
     */
    advanced_config: Record<string, Array<string>>;
};
export namespace SafetyEvaluationDatasetRequest {
    /**
     * The schema type of the dataset. Only GENERATION is currently supported.
     */
    export enum schema_type {
        GENERATION = 'GENERATION',
    }
}

