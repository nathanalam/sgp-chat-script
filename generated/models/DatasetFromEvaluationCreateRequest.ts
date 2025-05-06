/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DatasetFromEvaluationCreateRequest = {
    name: string;
    description?: string;
    /**
     * The tags associated with the entity
     */
    tags?: Array<string>;
    /**
     * Keys from items in the `data` field that should be included in the dataset. If not provided, all keys will be included.
     */
    keys?: Array<string>;
};

