/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatasetItemReference } from './DatasetItemReference';
import type { EvaluationTask } from './EvaluationTask';
export type EvaluationFromDatasetCreateRequest = {
    name: string;
    description?: string;
    /**
     * The tags associated with the entity
     */
    tags?: Array<string>;
    /**
     * Tasks allow you to augment and evaluate your data
     */
    tasks?: Array<EvaluationTask>;
    /**
     * Items to be evaluated, including references to the input dataset items
     */
    data?: Array<DatasetItemReference>;
    /**
     * The ID of the dataset containing the items referenced by the `data` field
     */
    dataset_id: string;
};

