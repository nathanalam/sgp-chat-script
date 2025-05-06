/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionResponse } from './ApplicationInteractionResponse';
import type { ApplicationTraceSpanResponse } from './ApplicationTraceSpanResponse';
import type { egp_api_backend__server__api__models__application_models__ApplicationVariantResponse } from './egp_api_backend__server__api__models__application_models__ApplicationVariantResponse';
import type { FeedbackSentiment } from './FeedbackSentiment';
import type { GuardrailCheckResultWithPolicy } from './GuardrailCheckResultWithPolicy';
export type ApplicationTraceDetail = {
    /**
     * Interaction details
     */
    interaction: ApplicationInteractionResponse;
    /**
     * Input guardrail results
     */
    interaction_guardrail_results?: Array<GuardrailCheckResultWithPolicy>;
    /**
     * Application variant
     */
    application_variant: egp_api_backend__server__api__models__application_models__ApplicationVariantResponse;
    /**
     * List of interactions in the same thread
     */
    thread_interactions?: Array<ApplicationInteractionResponse>;
    /**
     * Trace metadata
     */
    metadata?: Record<string, any>;
    /**
     * List of Span IDs belonging to this trace
     */
    spans?: Array<ApplicationTraceSpanResponse>;
    /**
     * Feedback sentiment
     */
    feedback?: FeedbackSentiment;
    /**
     * Feedback comment
     */
    feedback_comment?: string;
};

