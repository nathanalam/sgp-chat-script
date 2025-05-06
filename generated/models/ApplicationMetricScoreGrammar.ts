/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationMetricScoreGrammar = {
    score?: number;
    metric_type: ApplicationMetricScoreGrammar.metric_type;
    category: ApplicationMetricScoreGrammar.category;
};
export namespace ApplicationMetricScoreGrammar {
    export enum metric_type {
        GRAMMAR = 'grammar',
    }
    export enum category {
        QUALITY = 'quality',
    }
}

