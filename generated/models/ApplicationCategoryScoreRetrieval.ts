/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationMetricScoreContextRecall } from './ApplicationMetricScoreContextRecall';
import type { ApplicationMetricScoreFaithfulness } from './ApplicationMetricScoreFaithfulness';
export type ApplicationCategoryScoreRetrieval = {
    category: ApplicationCategoryScoreRetrieval.category;
    score?: number;
    metric_scores: Array<(ApplicationMetricScoreFaithfulness | ApplicationMetricScoreContextRecall)>;
};
export namespace ApplicationCategoryScoreRetrieval {
    export enum category {
        RETRIEVAL = 'retrieval',
    }
}

