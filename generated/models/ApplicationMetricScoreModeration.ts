/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationMetricScoreModeration = {
    score?: number;
    metric_type: ApplicationMetricScoreModeration.metric_type;
    category: ApplicationMetricScoreModeration.category;
};
export namespace ApplicationMetricScoreModeration {
    export enum metric_type {
        MODERATION = 'moderation',
    }
    export enum category {
        TRUST_AND_SAFETY = 'trust-and-safety',
    }
}

