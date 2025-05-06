/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationMetricScoreCoherence = {
    score?: number;
    metric_type: ApplicationMetricScoreCoherence.metric_type;
    category: ApplicationMetricScoreCoherence.category;
};
export namespace ApplicationMetricScoreCoherence {
    export enum metric_type {
        COHERENCE = 'coherence',
    }
    export enum category {
        QUALITY = 'quality',
    }
}

