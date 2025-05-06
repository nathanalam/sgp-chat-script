/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericInferenceRequestWithItemLocator } from './GenericInferenceRequestWithItemLocator';
export type GenericInferenceEvaluationTask = {
    task_type?: 'inference';
    /**
     * Alias to title the results column. Defaults to the `task_type`
     */
    alias?: string;
    configuration: GenericInferenceRequestWithItemLocator;
};

