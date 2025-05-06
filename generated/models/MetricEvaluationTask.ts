/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetricEvaluationRequestWithItemLocators } from './MetricEvaluationRequestWithItemLocators';
export type MetricEvaluationTask = {
    task_type?: 'metric';
    /**
     * Alias to title the results column. Defaults to the `task_type`
     */
    alias?: string;
    configuration: MetricEvaluationRequestWithItemLocators;
};

