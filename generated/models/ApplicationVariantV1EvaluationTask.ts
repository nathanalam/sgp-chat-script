/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationVariantV1RequestWithItemLocator } from './ApplicationVariantV1RequestWithItemLocator';
export type ApplicationVariantV1EvaluationTask = {
    task_type?: 'application_variant';
    /**
     * Alias to title the results column. Defaults to the `task_type`
     */
    alias?: string;
    configuration: ApplicationVariantV1RequestWithItemLocator;
};

