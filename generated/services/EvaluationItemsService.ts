/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationItem } from '../models/EvaluationItem';
import type { EvaluationItemList } from '../models/EvaluationItemList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EvaluationItemsService {
    /**
     * Get Evaluation Item
     * @param evaluationItemId
     * @param includeArchived
     * @returns EvaluationItem Successful Response
     * @throws ApiError
     */
    public static getV5V5EvaluationItemsEvaluationItemId(
        evaluationItemId: string,
        includeArchived: boolean = false,
    ): CancelablePromise<EvaluationItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/evaluation-items/{evaluation_item_id}',
            path: {
                'evaluation_item_id': evaluationItemId,
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
     * List Evaluation Items
     * @param includeArchived
     * @param evaluationId
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns EvaluationItemList Successful Response
     * @throws ApiError
     */
    public static getV5V5EvaluationItems(
        includeArchived: boolean = false,
        evaluationId?: (string | null),
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<EvaluationItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/evaluation-items',
            query: {
                'include_archived': includeArchived,
                'evaluation_id': evaluationId,
                'starting_after': startingAfter,
                'ending_before': endingBefore,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
