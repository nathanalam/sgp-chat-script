/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionExportResponse } from '../models/ApplicationInteractionExportResponse';
import type { ApplicationOnlineEvaluationDetails } from '../models/ApplicationOnlineEvaluationDetails';
import type { ApplicationOperationStatus } from '../models/ApplicationOperationStatus';
import type { ApplicationTraceDetail } from '../models/ApplicationTraceDetail';
import type { GenerateDatasetRequest } from '../models/GenerateDatasetRequest';
import type { GenerateDatasetResponse } from '../models/GenerateDatasetResponse';
import type { PaginatedApplicationInteractionEntry } from '../models/PaginatedApplicationInteractionEntry';
import type { SortOrder } from '../models/SortOrder';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MonitoringService {
    /**
     * List Application Interactions
     * @param applicationSpecId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param fromTs The starting (oldest) timestamp window in seconds.
     * @param toTs The ending (most recent) timestamp in seconds.
     * @param accountId Account ID used for authorization
     * @param variants Which variants to filter on
     * @param searchText Return only interactions where either the prompt or the response contain this substring.
     * @param relevanceMinScore Return only interactions with a relevance score above this value.
     * @param relevanceMaxScore Return only interactions with a relevance score below this value.
     * @param faithfulnessMinScore Return only interactions with a faithfulness score above this value.
     * @param faithfulnessMaxScore Return only interactions with a faithfulness score below this value.
     * @param hasPositiveFeedback Return only interactions with the positive feedback.
     * @param hasNegativeFeedback Return only interactions with the negative feedback.
     * @param hasFeedbackResponse Return only interactions where the user has provided a feedback response.
     * @param guardrailCategories Return only interactions with the given guardrail categories.
     * @param hasGuardrailTrigger Return only interactions where the guardrail triggered.
     * @param operationStatus Return only interactions with the given operation status.
     * @param sortKey Sort interactions by this field.
     * @param sortOrder Sort interactions in this order, asc or desc.
     * @param xSelectedAccountId
     * @returns PaginatedApplicationInteractionEntry Successful Response
     * @throws ApiError
     */
    public static getV4Interactions(
        applicationSpecId: string,
        page: number = 1,
        limit: number = 100,
        fromTs?: number,
        toTs?: number,
        accountId?: (string | null),
        variants?: (Array<string> | null),
        searchText?: (string | null),
        relevanceMinScore?: (number | null),
        relevanceMaxScore?: (number | null),
        faithfulnessMinScore?: (number | null),
        faithfulnessMaxScore?: (number | null),
        hasPositiveFeedback?: (boolean | null),
        hasNegativeFeedback?: (boolean | null),
        hasFeedbackResponse?: (boolean | null),
        guardrailCategories?: (Array<string> | null),
        hasGuardrailTrigger?: (boolean | null),
        operationStatus?: (ApplicationOperationStatus | null),
        sortKey?: (string | null),
        sortOrder?: (SortOrder | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedApplicationInteractionEntry> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/interactions',
            path: {
                'application_spec_id': applicationSpecId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'from_ts': fromTs,
                'to_ts': toTs,
                'account_id': accountId,
                'variants': variants,
                'search_text': searchText,
                'relevance_min_score': relevanceMinScore,
                'relevance_max_score': relevanceMaxScore,
                'faithfulness_min_score': faithfulnessMinScore,
                'faithfulness_max_score': faithfulnessMaxScore,
                'has_positive_feedback': hasPositiveFeedback,
                'has_negative_feedback': hasNegativeFeedback,
                'has_feedback_response': hasFeedbackResponse,
                'guardrail_categories': guardrailCategories,
                'has_guardrail_trigger': hasGuardrailTrigger,
                'operation_status': operationStatus,
                'sort_key': sortKey,
                'sort_order': sortOrder,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Export Application Interactions
     * @param applicationSpecId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param fromTs The starting (oldest) timestamp window in seconds.
     * @param toTs The ending (most recent) timestamp in seconds.
     * @param accountId Account ID used for authorization
     * @param variants Which variants to filter on
     * @param searchText Return only interactions where either the prompt or the response contain this substring.
     * @param relevanceMinScore Return only interactions with a relevance score above this value.
     * @param relevanceMaxScore Return only interactions with a relevance score below this value.
     * @param faithfulnessMinScore Return only interactions with a faithfulness score above this value.
     * @param faithfulnessMaxScore Return only interactions with a faithfulness score below this value.
     * @param hasPositiveFeedback Return only interactions with the positive feedback.
     * @param hasNegativeFeedback Return only interactions with the negative feedback.
     * @param hasFeedbackResponse Return only interactions where the user has provided a feedback response.
     * @param guardrailCategories Return only interactions with the given guardrail categories.
     * @param hasGuardrailTrigger Return only interactions where the guardrail triggered.
     * @param operationStatus Return only interactions with the given operation status.
     * @param xSelectedAccountId
     * @returns ApplicationInteractionExportResponse Successful Response
     * @throws ApiError
     */
    public static getV4InteractionsExport(
        applicationSpecId: string,
        page: number = 1,
        limit: number = 100,
        fromTs?: number,
        toTs?: number,
        accountId?: (string | null),
        variants?: (Array<string> | null),
        searchText?: (string | null),
        relevanceMinScore?: (number | null),
        relevanceMaxScore?: (number | null),
        faithfulnessMinScore?: (number | null),
        faithfulnessMaxScore?: (number | null),
        hasPositiveFeedback?: (boolean | null),
        hasNegativeFeedback?: (boolean | null),
        hasFeedbackResponse?: (boolean | null),
        guardrailCategories?: (Array<string> | null),
        hasGuardrailTrigger?: (boolean | null),
        operationStatus?: (ApplicationOperationStatus | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ApplicationInteractionExportResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/interactions/export',
            path: {
                'application_spec_id': applicationSpecId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'from_ts': fromTs,
                'to_ts': toTs,
                'account_id': accountId,
                'variants': variants,
                'search_text': searchText,
                'relevance_min_score': relevanceMinScore,
                'relevance_max_score': relevanceMaxScore,
                'faithfulness_min_score': faithfulnessMinScore,
                'faithfulness_max_score': faithfulnessMaxScore,
                'has_positive_feedback': hasPositiveFeedback,
                'has_negative_feedback': hasNegativeFeedback,
                'has_feedback_response': hasFeedbackResponse,
                'guardrail_categories': guardrailCategories,
                'has_guardrail_trigger': hasGuardrailTrigger,
                'operation_status': operationStatus,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Interaction Details
     * @param applicationInteractionId
     * @param applicationSpecId
     * @param accountId Account ID used for authorization
     * @param xSelectedAccountId
     * @returns ApplicationTraceDetail Successful Response
     * @throws ApiError
     */
    public static getV4InteractionsApplicationInteractionIdDetails(
        applicationInteractionId: string,
        applicationSpecId: string,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ApplicationTraceDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/interactions/{application_interaction_id}/details',
            path: {
                'application_interaction_id': applicationInteractionId,
                'application_spec_id': applicationSpecId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Online Evaluation Results With Job Status
     * @param applicationInteractionId
     * @param applicationSpecId
     * @param accountId Account ID used for authorization
     * @param xSelectedAccountId
     * @returns ApplicationOnlineEvaluationDetails Successful Response
     * @throws ApiError
     */
    public static getV4InteractionsApplicationInteractionIdEvaluationResults(
        applicationInteractionId: string,
        applicationSpecId: string,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ApplicationOnlineEvaluationDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/interactions/{application_interaction_id}/evaluation-results',
            path: {
                'application_interaction_id': applicationInteractionId,
                'application_spec_id': applicationSpecId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Batch Get Application Online Evaluation Results With Job Status
     * @param applicationSpecId
     * @param applicationInteractionIds List of application interaction IDs to check
     * @param accountId Account ID used for authorization
     * @param xSelectedAccountId
     * @returns ApplicationOnlineEvaluationDetails Successful Response
     * @throws ApiError
     */
    public static getV4InteractionsEvaluationResults(
        applicationSpecId: string,
        applicationInteractionIds?: Array<string>,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ApplicationOnlineEvaluationDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/interactions/evaluation-results',
            path: {
                'application_spec_id': applicationSpecId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'application_interaction_ids': applicationInteractionIds,
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Dataset From Interactions
     * @param applicationSpecId
     * @param requestBody
     * @param accountId Account ID used for authorization
     * @param fromTs The starting (oldest) timestamp window in seconds.
     * @param toTs The ending (most recent) timestamp in seconds.
     * @param variants Which variants to filter on
     * @param searchText Return only interactions where either the prompt or the response contain this substring.
     * @param relevanceMinScore Return only interactions with a relevance score above this value.
     * @param relevanceMaxScore Return only interactions with a relevance score below this value.
     * @param faithfulnessMinScore Return only interactions with a faithfulness score above this value.
     * @param faithfulnessMaxScore Return only interactions with a faithfulness score below this value.
     * @param hasPositiveFeedback Return only interactions with the positive feedback.
     * @param hasNegativeFeedback Return only interactions with the negative feedback.
     * @param hasFeedbackResponse Return only interactions where the user has provided a feedback response.
     * @param guardrailCategories Return only interactions with the given guardrail categories.
     * @param hasGuardrailTrigger Return only interactions where the guardrail triggered.
     * @param operationStatus Return only interactions with the given operation status.
     * @param xSelectedAccountId
     * @returns GenerateDatasetResponse Successful Response
     * @throws ApiError
     */
    public static postV4InteractionsGenerateDataset(
        applicationSpecId: string,
        requestBody: GenerateDatasetRequest,
        accountId?: (string | null),
        fromTs?: number,
        toTs?: number,
        variants?: (Array<string> | null),
        searchText?: (string | null),
        relevanceMinScore?: (number | null),
        relevanceMaxScore?: (number | null),
        faithfulnessMinScore?: (number | null),
        faithfulnessMaxScore?: (number | null),
        hasPositiveFeedback?: (boolean | null),
        hasNegativeFeedback?: (boolean | null),
        hasFeedbackResponse?: (boolean | null),
        guardrailCategories?: (Array<string> | null),
        hasGuardrailTrigger?: (boolean | null),
        operationStatus?: (ApplicationOperationStatus | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<GenerateDatasetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/{application_spec_id}/interactions/generate-dataset',
            path: {
                'application_spec_id': applicationSpecId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
                'from_ts': fromTs,
                'to_ts': toTs,
                'variants': variants,
                'search_text': searchText,
                'relevance_min_score': relevanceMinScore,
                'relevance_max_score': relevanceMaxScore,
                'faithfulness_min_score': faithfulnessMinScore,
                'faithfulness_max_score': faithfulnessMaxScore,
                'has_positive_feedback': hasPositiveFeedback,
                'has_negative_feedback': hasNegativeFeedback,
                'has_feedback_response': hasFeedbackResponse,
                'guardrail_categories': guardrailCategories,
                'has_guardrail_trigger': hasGuardrailTrigger,
                'operation_status': operationStatus,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
