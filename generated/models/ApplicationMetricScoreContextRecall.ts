/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationMetricScoreContextRecall = {
    score?: number;
    metric_type: ApplicationMetricScoreContextRecall.metric_type;
    category: ApplicationMetricScoreContextRecall.category;
};
export namespace ApplicationMetricScoreContextRecall {
    export enum metric_type {
        CONTEXT_RECALL = 'context-recall',
    }
    export enum category {
        RETRIEVAL = 'retrieval',
    }
}

