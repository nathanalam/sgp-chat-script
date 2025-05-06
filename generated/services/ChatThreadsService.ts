/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionResponse } from '../models/ApplicationInteractionResponse';
import type { ChatThreadFeedbackRequest } from '../models/ChatThreadFeedbackRequest';
import type { ChatThreadFeedbackResponse } from '../models/ChatThreadFeedbackResponse';
import type { ChatThreadHistory } from '../models/ChatThreadHistory';
import type { ChatThreadRequest } from '../models/ChatThreadRequest';
import type { ChatThreadResponse } from '../models/ChatThreadResponse';
import type { UpdateChatThreadEntryRequest } from '../models/UpdateChatThreadEntryRequest';
import type { UpdateChatThreadRequest } from '../models/UpdateChatThreadRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatThreadsService {
    /**
     * List Application Threads
     * @param applicationVariantId
     * @param includeArchived Include archived threads in the response.
     * @param xSelectedAccountId
     * @returns ChatThreadResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationsApplicationVariantIdThreads(
        applicationVariantId: string,
        includeArchived: boolean = true,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ChatThreadResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_variant_id}/threads',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create New Application Thread
     * @param applicationVariantId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ChatThreadResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsApplicationVariantIdThreads(
        applicationVariantId: string,
        requestBody: ChatThreadRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ChatThreadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/{application_variant_id}/threads',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Thread Messages
     * @param threadId
     * @param fetchByAccount Fetch the thread by account instead of user
     * @param fetchSpans Fetch spans for each message
     * @param xSelectedAccountId
     * @returns ChatThreadHistory Successful Response
     * @throws ApiError
     */
    public static getV4ThreadsThreadIdMessages(
        threadId: string,
        fetchByAccount?: (boolean | null),
        fetchSpans?: (boolean | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ChatThreadHistory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/threads/{thread_id}/messages',
            path: {
                'thread_id': threadId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'fetch_by_account': fetchByAccount,
                'fetch_spans': fetchSpans,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Chat Thread
     * @param threadId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ChatThreadResponse Successful Response
     * @throws ApiError
     */
    public static patchV4ThreadsThreadId(
        threadId: string,
        requestBody: UpdateChatThreadRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ChatThreadResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Chat Thread
     * @param threadId
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteV4ThreadsThreadId(
        threadId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Chat Thread Entry
     * @param threadId
     * @param applicationInteractionId
     * @param requestBody
     * @param fetchByAccount Fetch the thread by account instead of user
     * @param xSelectedAccountId
     * @returns ApplicationInteractionResponse Successful Response
     * @throws ApiError
     */
    public static patchV4ThreadsThreadIdMessagesApplicationInteractionId(
        threadId: string,
        applicationInteractionId: string,
        requestBody: UpdateChatThreadEntryRequest,
        fetchByAccount?: (boolean | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ApplicationInteractionResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/threads/{thread_id}/messages/{application_interaction_id}',
            path: {
                'thread_id': threadId,
                'application_interaction_id': applicationInteractionId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'fetch_by_account': fetchByAccount,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Feedback To Thread Entry
     * @param threadId
     * @param applicationInteractionId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ChatThreadFeedbackResponse Successful Response
     * @throws ApiError
     */
    public static putV4ThreadsThreadIdMessagesApplicationInteractionIdFeedback(
        threadId: string,
        applicationInteractionId: string,
        requestBody: ChatThreadFeedbackRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ChatThreadFeedbackResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v4/threads/{thread_id}/messages/{application_interaction_id}/feedback',
            path: {
                'thread_id': threadId,
                'application_interaction_id': applicationInteractionId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Interaction Feedback
     * @param threadId
     * @param applicationInteractionId
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteV4ThreadsThreadIdMessagesApplicationInteractionIdFeedback(
        threadId: string,
        applicationInteractionId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/threads/{thread_id}/messages/{application_interaction_id}/feedback',
            path: {
                'thread_id': threadId,
                'application_interaction_id': applicationInteractionId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
