/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateDatasetMethod } from './GenerateDatasetMethod';
export type GenerateDatasetRequest = {
    /**
     * ID of the existing evaluation dataset, if appending
     */
    evaluation_dataset_id?: string;
    /**
     * Name of dataset, if creating a new one
     */
    name?: string;
    /**
     * Maximum mumber of test cases to generate (max. 1000)
     */
    limit?: number;
    /**
     * Method to use for generating the dataset, CREATE or APPEND
     */
    method: GenerateDatasetMethod;
};

