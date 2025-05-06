/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Span } from '../models/Span';
import type { SpanCreateRequest } from '../models/SpanCreateRequest';
import type { SpanList } from '../models/SpanList';
import type { SpanUpdateRequest } from '../models/SpanUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SpansService {
    /**
     * Create Span
     * @param requestBody
     * @returns Span Successful Response
     * @throws ApiError
     */
    public static postV5V5Spans(
        requestBody: SpanCreateRequest,
    ): CancelablePromise<Span> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/spans',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Spans
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @param traceId
     * @param parentsOnly
     * @param fromTs The starting (oldest) timestamp window in seconds.
     * @param toTs The ending (most recent) timestamp in seconds.
     * @returns SpanList Successful Response
     * @throws ApiError
     */
    public static getV5V5Spans(
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
        traceId?: (string | null),
        parentsOnly?: (boolean | null),
        fromTs?: number,
        toTs?: number,
    ): CancelablePromise<SpanList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/spans',
            query: {
                'starting_after': startingAfter,
                'ending_before': endingBefore,
                'limit': limit,
                'trace_id': traceId,
                'parents_only': parentsOnly,
                'from_ts': fromTs,
                'to_ts': toTs,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Span
     * @param spanId
     * @returns Span Successful Response
     * @throws ApiError
     */
    public static getV5V5SpansSpanId(
        spanId: string,
    ): CancelablePromise<Span> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/spans/{span_id}',
            path: {
                'span_id': spanId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Span
     * @param spanId
     * @param requestBody
     * @returns Span Successful Response
     * @throws ApiError
     */
    public static patchV5V5SpansSpanId(
        spanId: string,
        requestBody: SpanUpdateRequest,
    ): CancelablePromise<Span> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/spans/{span_id}',
            path: {
                'span_id': spanId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
