/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationCategoryScoreAccuracy } from './ApplicationCategoryScoreAccuracy';
import type { ApplicationCategoryScoreQuality } from './ApplicationCategoryScoreQuality';
import type { ApplicationCategoryScoreRetrieval } from './ApplicationCategoryScoreRetrieval';
import type { ApplicationCategoryScoreTrustAndSafety } from './ApplicationCategoryScoreTrustAndSafety';
import type { EvaluationDatasetReportGeneration } from './EvaluationDatasetReportGeneration';
export type ApplicationVariantReportWithScoresResponse = {
    application_spec_id: string;
    application_variant_id: string;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
    evaluation_datasets?: Array<EvaluationDatasetReportGeneration>;
    score?: number;
    category_scores?: Array<(ApplicationCategoryScoreAccuracy | ApplicationCategoryScoreRetrieval | ApplicationCategoryScoreQuality | ApplicationCategoryScoreTrustAndSafety)>;
};

