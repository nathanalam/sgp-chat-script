/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AutoGeneratedEvaluationDatasetRequest = {
    /**
     * Manually or automatically generated dataset
     */
    type?: 'autogenerated';
    /**
     * The name of the dataset
     */
    name: string;
    /**
     * The schema type of the dataset. Only GENERATION is currently supported.
     */
    schema_type: AutoGeneratedEvaluationDatasetRequest.schema_type;
    /**
     * ID of the knowledge base to generate the evaluation dataset from.
     */
    knowledge_base_id: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};
export namespace AutoGeneratedEvaluationDatasetRequest {
    /**
     * The schema type of the dataset. Only GENERATION is currently supported.
     */
    export enum schema_type {
        GENERATION = 'GENERATION',
    }
}

