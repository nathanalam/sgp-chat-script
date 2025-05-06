/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataLoc } from './DataLoc';
import type { MetricScorerType } from './MetricScorerType';
export type MetricItem = {
    type: MetricScorerType;
    name: string;
    mappings?: Record<string, DataLoc>;
    params?: Record<string, any>;
};

