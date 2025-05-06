/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationMetricScoreCoherence } from './ApplicationMetricScoreCoherence';
import type { ApplicationMetricScoreGrammar } from './ApplicationMetricScoreGrammar';
export type ApplicationCategoryScoreQuality = {
    category: ApplicationCategoryScoreQuality.category;
    score?: number;
    metric_scores: Array<(ApplicationMetricScoreCoherence | ApplicationMetricScoreGrammar)>;
};
export namespace ApplicationCategoryScoreQuality {
    export enum category {
        QUALITY = 'quality',
    }
}

