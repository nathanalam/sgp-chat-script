/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationMetricScoreAnswerRelevance = {
    score?: number;
    metric_type: ApplicationMetricScoreAnswerRelevance.metric_type;
    category: ApplicationMetricScoreAnswerRelevance.category;
};
export namespace ApplicationMetricScoreAnswerRelevance {
    export enum metric_type {
        ANSWER_RELEVANCE = 'answer-relevance',
    }
    export enum category {
        ACCURACY = 'accuracy',
    }
}

