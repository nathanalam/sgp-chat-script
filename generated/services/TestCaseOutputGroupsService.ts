/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestCaseOutputDataLocs } from '../models/TestCaseOutputDataLocs';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TestCaseOutputGroupsService {
    /**
     * Get Test Case Output Data Locations
     * @param testCaseOutputGroupId
     * @returns TestCaseOutputDataLocs Successful Response
     * @throws ApiError
     */
    public static getV5V5TestCaseOutputGroupsTestCaseOutputGroupIdDataLocs(
        testCaseOutputGroupId: string,
    ): CancelablePromise<TestCaseOutputDataLocs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/test-case-output-groups/{test_case_output_group_id}/data-locs',
            path: {
                'test_case_output_group_id': testCaseOutputGroupId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
