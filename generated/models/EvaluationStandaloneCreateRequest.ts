/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationTask } from './EvaluationTask';
export type EvaluationStandaloneCreateRequest = {
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
};

