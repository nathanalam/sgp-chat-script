/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationScoreCategoryEnum } from './ApplicationScoreCategoryEnum';
import type { ApplicationScoreMetricTypeEnum } from './ApplicationScoreMetricTypeEnum';
import type { GenericApplicationScorerMetadata } from './GenericApplicationScorerMetadata';
import type { SafetySubMetricTypeEnum } from './SafetySubMetricTypeEnum';
export type ApplicationMetricScoreWithMetadata = {
    score?: number;
    metric_type: (ApplicationScoreMetricTypeEnum | SafetySubMetricTypeEnum);
    category: ApplicationScoreCategoryEnum;
    llm_metadata?: GenericApplicationScorerMetadata;
};

