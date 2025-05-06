/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationMetricScoreModeration } from './ApplicationMetricScoreModeration';
import type { ApplicationMetricScoreSafety } from './ApplicationMetricScoreSafety';
export type ApplicationCategoryScoreTrustAndSafety = {
    category: ApplicationCategoryScoreTrustAndSafety.category;
    score?: number;
    metric_scores: Array<(ApplicationMetricScoreSafety | ApplicationMetricScoreModeration)>;
};
export namespace ApplicationCategoryScoreTrustAndSafety {
    export enum category {
        TRUST_AND_SAFETY = 'trust-and-safety',
    }
}

