/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationMetricScoreFaithfulness = {
    score?: number;
    metric_type: ApplicationMetricScoreFaithfulness.metric_type;
    category: ApplicationMetricScoreFaithfulness.category;
};
export namespace ApplicationMetricScoreFaithfulness {
    export enum metric_type {
        FAITHFULNESS = 'faithfulness',
    }
    export enum category {
        RETRIEVAL = 'retrieval',
    }
}

