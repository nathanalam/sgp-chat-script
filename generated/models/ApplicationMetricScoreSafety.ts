/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_BIAS_AND_STEREOTYPING__ } from './ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_BIAS_AND_STEREOTYPING__';
import type { ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_COPYRIGHT_VIOLATIONS__ } from './ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_COPYRIGHT_VIOLATIONS__';
import type { ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_HARMFUL_CONTENT__ } from './ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_HARMFUL_CONTENT__';
import type { ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_OPINIONS_DISPUTED_TOPICS__ } from './ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_OPINIONS_DISPUTED_TOPICS__';
import type { ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_PRIVACY_VIOLATIONS__ } from './ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_PRIVACY_VIOLATIONS__';
import type { ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_UNETHICAL_HARMFUL_ACTIVITIES__ } from './ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_UNETHICAL_HARMFUL_ACTIVITIES__';
export type ApplicationMetricScoreSafety = {
    score?: number;
    metric_type: ApplicationMetricScoreSafety.metric_type;
    category: ApplicationMetricScoreSafety.category;
    sub_metric_scores: Array<(ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_BIAS_AND_STEREOTYPING__ | ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_OPINIONS_DISPUTED_TOPICS__ | ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_UNETHICAL_HARMFUL_ACTIVITIES__ | ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_COPYRIGHT_VIOLATIONS__ | ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_HARMFUL_CONTENT__ | ApplicationMetricScore_Literal_TRUST_AND_SAFETY__Literal_PRIVACY_VIOLATIONS__)>;
};
export namespace ApplicationMetricScoreSafety {
    export enum metric_type {
        SAFETY = 'safety',
    }
    export enum category {
        TRUST_AND_SAFETY = 'trust-and-safety',
    }
}

