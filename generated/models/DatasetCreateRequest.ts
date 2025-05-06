/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DatasetCreateRequest = {
    name: string;
    description?: string;
    /**
     * The tags associated with the entity
     */
    tags?: Array<string>;
    /**
     * Items to be included in the dataset
     */
    data: Array<Record<string, any>>;
};

