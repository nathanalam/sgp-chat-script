/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIList_TestCaseOutput_ } from '../models/APIList_TestCaseOutput_';
import type { TestCaseOutput } from '../models/TestCaseOutput';
import type { TestCaseOutputCreateRequest } from '../models/TestCaseOutputCreateRequest';
import type { TestCaseOutputList } from '../models/TestCaseOutputList';
import type { TestCaseOutputViews } from '../models/TestCaseOutputViews';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TestCaseOutputsService {
    /**
     * Batch Create Test Case Output
     * @param requestBody
     * @returns APIList_TestCaseOutput_ Successful Response
     * @throws ApiError
     */
    public static postV5V5TestCaseOutputsBatch(
        requestBody: Array<TestCaseOutputCreateRequest>,
    ): CancelablePromise<APIList_TestCaseOutput_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/test-case-outputs/batch',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Test Case Outputs
     * @param views
     * @param includeArchived
     * @param applicationVariantId
     * @param evaluationDatasetId
     * @param evaluationDatasetVersionNum
     * @param testCaseOutputGroupId
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns TestCaseOutputList Successful Response
     * @throws ApiError
     */
    public static getV5V5TestCaseOutputs(
        views?: Array<TestCaseOutputViews>,
        includeArchived: boolean = false,
        applicationVariantId?: (string | null),
        evaluationDatasetId?: (string | null),
        evaluationDatasetVersionNum?: (number | null),
        testCaseOutputGroupId?: (string | null),
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<TestCaseOutputList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/test-case-outputs',
            query: {
                'views': views,
                'include_archived': includeArchived,
                'application_variant_id': applicationVariantId,
                'evaluation_dataset_id': evaluationDatasetId,
                'evaluation_dataset_version_num': evaluationDatasetVersionNum,
                'test_case_output_group_id': testCaseOutputGroupId,
                'starting_after': startingAfter,
                'ending_before': endingBefore,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Test Case Output
     * @param testCaseOutputId
     * @param views
     * @returns TestCaseOutput Successful Response
     * @throws ApiError
     */
    public static getV5V5TestCaseOutputsTestCaseOutputId(
        testCaseOutputId: string,
        views?: Array<TestCaseOutputViews>,
    ): CancelablePromise<TestCaseOutput> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/test-case-outputs/{test_case_output_id}',
            path: {
                'test_case_output_id': testCaseOutputId,
            },
            query: {
                'views': views,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
