/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatasetFromEvaluationCreateRequest } from './DatasetFromEvaluationCreateRequest';
import type { EvaluationTask } from './EvaluationTask';
export type EvaluationWithDatasetCreateRequest = {
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
     * Items to be evaluated
     */
    data: Array<Record<string, any>>;
    /**
     * Create a reusable dataset from items in the `data` field
     */
    dataset: DatasetFromEvaluationCreateRequest;
};

