/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationMetricScoreAnswerCorrectness } from './ApplicationMetricScoreAnswerCorrectness';
import type { ApplicationMetricScoreAnswerRelevance } from './ApplicationMetricScoreAnswerRelevance';
export type ApplicationCategoryScoreAccuracy = {
    category: ApplicationCategoryScoreAccuracy.category;
    score?: number;
    metric_scores: Array<(ApplicationMetricScoreAnswerCorrectness | ApplicationMetricScoreAnswerRelevance)>;
};
export namespace ApplicationCategoryScoreAccuracy {
    export enum category {
        ACCURACY = 'accuracy',
    }
}

