/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationMetricScoreAnswerCorrectness = {
    score?: number;
    metric_type: ApplicationMetricScoreAnswerCorrectness.metric_type;
    category: ApplicationMetricScoreAnswerCorrectness.category;
};
export namespace ApplicationMetricScoreAnswerCorrectness {
    export enum metric_type {
        ANSWER_CORRECTNESS = 'answer-correctness',
    }
    export enum category {
        ACCURACY = 'accuracy',
    }
}

