/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchAssignTaskRequest } from '../models/BatchAssignTaskRequest';
import type { ClaimTaskRequest } from '../models/ClaimTaskRequest';
import type { ContributorMetricsResponse } from '../models/ContributorMetricsResponse';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { Evaluation } from '../models/Evaluation';
import type { EvaluationCreateRequest } from '../models/EvaluationCreateRequest';
import type { EvaluationDelete } from '../models/EvaluationDelete';
import type { EvaluationList } from '../models/EvaluationList';
import type { EvaluationMetricsResponse } from '../models/EvaluationMetricsResponse';
import type { EvaluationRequestUnion } from '../models/EvaluationRequestUnion';
import type { EvaluationUpdateRequest } from '../models/EvaluationUpdateRequest';
import type { EvaluationViews } from '../models/EvaluationViews';
import type { EvaluationViewsOptions } from '../models/EvaluationViewsOptions';
import type { HybridEvaluationMetricsResponse } from '../models/HybridEvaluationMetricsResponse';
import type { LegacyEvaluationResponse } from '../models/LegacyEvaluationResponse';
import type { LegacyEvaluationResponseWithViews } from '../models/LegacyEvaluationResponseWithViews';
import type { PaginatedContributorMetricsResponse } from '../models/PaginatedContributorMetricsResponse';
import type { PaginatedLegacyEvaluationResponseWithViews } from '../models/PaginatedLegacyEvaluationResponseWithViews';
import type { PaginatedTestCaseResultResponse } from '../models/PaginatedTestCaseResultResponse';
import type { PaginatedTestCaseResultResponseWithViews } from '../models/PaginatedTestCaseResultResponseWithViews';
import type { PartialTestCaseResultRequest } from '../models/PartialTestCaseResultRequest';
import type { RestorablePartialPatchEvaluationRequest } from '../models/RestorablePartialPatchEvaluationRequest';
import type { SortByEnumForLegacyEvaluation } from '../models/SortByEnumForLegacyEvaluation';
import type { TaskORMTaskTypeEnum } from '../models/TaskORMTaskTypeEnum';
import type { TaskResponse } from '../models/TaskResponse';
import type { TestCaseResultRequest } from '../models/TestCaseResultRequest';
import type { TestCaseResultResponse } from '../models/TestCaseResultResponse';
import type { TestCaseResultResponseWithViews } from '../models/TestCaseResultResponseWithViews';
import type { TestCaseResultViewsOptions } from '../models/TestCaseResultViewsOptions';
import type { UpdateTaskRequest } from '../models/UpdateTaskRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EvaluationsService {
    /**
     * Claim Evaluation Task
     * @param evaluationId
     * @param taskType
     * @param xSelectedAccountId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV2ClaimTask(
        evaluationId: string,
        taskType: TaskORMTaskTypeEnum = 'EVALUATION_ANNOTATION',
        xSelectedAccountId?: (string | null),
        requestBody?: (ClaimTaskRequest | null),
    ): CancelablePromise<(TaskResponse | null)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/evaluations/{evaluation_id}/claim-task',
            path: {
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'task_type': taskType,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Evaluation Task
     * @param evaluationId
     * @param taskId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static patchV2TasksTaskId(
        evaluationId: string,
        taskId: string,
        requestBody: UpdateTaskRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(TaskResponse | null)> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/evaluations/{evaluation_id}/tasks/{task_id}',
            path: {
                'evaluation_id': evaluationId,
                'task_id': taskId,
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
     * Get Contributor Metrics
     * @param evaluationId
     * @param contributorId
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getV2ContributorMetricsContributorId(
        evaluationId: string,
        contributorId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(ContributorMetricsResponse | null)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/contributor-metrics/{contributor_id}',
            path: {
                'evaluation_id': evaluationId,
                'contributor_id': contributorId,
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
     * List Contributor Metrics
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns ContributorMetricsResponse Successful Response
     * @throws ApiError
     */
    public static getV2ContributorMetrics(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ContributorMetricsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/contributor-metrics',
            path: {
                'evaluation_id': evaluationId,
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
     * Get Evaluation Metrics
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns EvaluationMetricsResponse Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationMetrics(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/evaluation-metrics',
            path: {
                'evaluation_id': evaluationId,
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
     * List Evaluations
     * ### Description
     * Lists all evaluations accessible to the user.
     *
     * ### Details
     * This API can be used to list evaluations. If a user has access to multiple accounts, all evaluations from all accounts the user is associated with will be returned.
     * @param view
     * @param accountId
     * @param applicationSpecId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns LegacyEvaluationResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV2Evaluations(
        view?: (Array<EvaluationViewsOptions> | null),
        accountId?: (string | null),
        applicationSpecId?: (number | string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<LegacyEvaluationResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
                'application_spec_id': applicationSpecId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Evaluation
     * ### Description
     * Creates a evaluation
     *
     * ### Details
     * This API can be used to create a evaluation. To use this API, review the request schema and pass in all fields that are required to create a evaluation.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns LegacyEvaluationResponse Successful Response
     * @throws ApiError
     */
    public static postV2Evaluations(
        requestBody: EvaluationRequestUnion,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<LegacyEvaluationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/evaluations',
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
     * Get Evaluation
     * ### Description
     * Gets the details of a evaluation
     *
     * ### Details
     * This API can be used to get information about a single evaluation by ID. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationId
     * @param view
     * @returns LegacyEvaluationResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationsEvaluationId(
        evaluationId: string,
        view?: (Array<EvaluationViewsOptions> | null),
    ): CancelablePromise<LegacyEvaluationResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Evaluation
     * ### Description
     * Updates a evaluation
     *
     * ### Details
     * This API can be used to update the evaluation that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param evaluationId
     * @param requestBody
     * @returns LegacyEvaluationResponse Successful Response
     * @throws ApiError
     */
    public static patchV2EvaluationsEvaluationId(
        evaluationId: string,
        requestBody: RestorablePartialPatchEvaluationRequest,
    ): CancelablePromise<LegacyEvaluationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Evaluation
     * ### Description
     * Deletes a evaluation
     *
     * ### Details
     * This API can be used to delete a evaluation by ID. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     * @param evaluationId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2EvaluationsEvaluationId(
        evaluationId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Test Case Results
     * ### Description
     * Lists all test case results accessible to the user.
     *
     * ### Details
     * This API can be used to list test case results. If a user has access to multiple accounts, all test case results from all accounts the user is associated with will be returned.
     * @param evaluationId
     * @param view
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns TestCaseResultResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationsEvaluationIdTestCaseResults(
        evaluationId: string,
        view?: (Array<TestCaseResultViewsOptions> | null),
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TestCaseResultResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/test-case-results',
            path: {
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Test Case Result
     * ### Description
     * Creates a test case result
     *
     * ### Details
     * This API can be used to create a test case result. To use this API, review the request schema and pass in all fields that are required to create a test case result.
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static postV2EvaluationsEvaluationIdTestCaseResults(
        evaluationId: string,
        requestBody: TestCaseResultRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/evaluations/{evaluation_id}/test-case-results',
            path: {
                'evaluation_id': evaluationId,
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
     * Batch Create Test Case Results
     * ### Description
     * Creates a batch of test case results
     *
     * ### Details
     * This API can be used to create multiple test case results so users do not have to the incur the cost of repeated network calls. To use this API, pass in a list of test case results in the request body.
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static postV2EvaluationsEvaluationIdTestCaseResultsBatch(
        evaluationId: string,
        requestBody: Array<TestCaseResultRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/evaluations/{evaluation_id}/test-case-results/batch',
            path: {
                'evaluation_id': evaluationId,
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
     * Get Test Case Result
     * ### Description
     * Gets the details of a test case result
     *
     * ### Details
     * This API can be used to get information about a single test case result by ID. To use this API, pass in the `id` that was returned from your Create Test Case Result API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationId
     * @param testCaseResultId
     * @param view
     * @returns TestCaseResultResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationsEvaluationIdTestCaseResultsTestCaseResultId(
        evaluationId: string,
        testCaseResultId: string,
        view?: (Array<TestCaseResultViewsOptions> | null),
    ): CancelablePromise<TestCaseResultResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Test Case Result
     * ### Description
     * Updates a test case result
     *
     * ### Details
     * This API can be used to update the test case result that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Test Case Result API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param evaluationId
     * @param testCaseResultId
     * @param requestBody
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static patchV2EvaluationsEvaluationIdTestCaseResultsTestCaseResultId(
        evaluationId: string,
        testCaseResultId: string,
        requestBody: PartialTestCaseResultRequest,
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Historical Test Case Result
     * @param num
     * @param evaluationId
     * @param testCaseResultId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationsEvaluationIdTestCaseResultsTestCaseResultIdHistoryNum(
        num: string,
        evaluationId: string,
        testCaseResultId: string,
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}/history/{num}',
            path: {
                'num': num,
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Versions of Test Case Result
     * Get all versions of a Test Case Result by lineage ID.
     * @param evaluationId
     * @param testCaseResultId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationsEvaluationIdTestCaseResultsTestCaseResultIdHistory(
        evaluationId: string,
        testCaseResultId: string,
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}/history',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Historical Test Case Results
     * @param num
     * @param evaluationId
     * @param accountId
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationsEvaluationIdTestCaseResultsHistoryNum(
        num: string,
        evaluationId: string,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/test-case-results/history/{num}',
            path: {
                'num': num,
                'evaluation_id': evaluationId,
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
     * Claim Evaluation Task
     * @param evaluationId
     * @param taskType
     * @param xSelectedAccountId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV3ClaimTask(
        evaluationId: string,
        taskType: TaskORMTaskTypeEnum = 'EVALUATION_ANNOTATION',
        xSelectedAccountId?: (string | null),
        requestBody?: (ClaimTaskRequest | null),
    ): CancelablePromise<(TaskResponse | null)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/evaluations/{evaluation_id}/claim-task',
            path: {
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'task_type': taskType,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Evaluation Task
     * @param evaluationId
     * @param taskId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static patchV3TasksTaskId(
        evaluationId: string,
        taskId: string,
        requestBody: UpdateTaskRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(TaskResponse | null)> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/evaluations/{evaluation_id}/tasks/{task_id}',
            path: {
                'evaluation_id': evaluationId,
                'task_id': taskId,
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
     * Get Contributor Metrics
     * @param evaluationId
     * @param contributorId
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getV3ContributorMetricsContributorId(
        evaluationId: string,
        contributorId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(ContributorMetricsResponse | null)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/contributor-metrics/{contributor_id}',
            path: {
                'evaluation_id': evaluationId,
                'contributor_id': contributorId,
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
     * List Contributor Metrics
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns ContributorMetricsResponse Successful Response
     * @throws ApiError
     */
    public static getV3ContributorMetrics(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ContributorMetricsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/contributor-metrics',
            path: {
                'evaluation_id': evaluationId,
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
     * Get Evaluation Metrics
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns EvaluationMetricsResponse Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationMetrics(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/evaluation-metrics',
            path: {
                'evaluation_id': evaluationId,
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
     * List Evaluations
     * ### Description
     * Lists all evaluations accessible to the user.
     *
     * ### Details
     * This API can be used to list evaluations. If a user has access to multiple accounts, all evaluations from all accounts the user is associated with will be returned.
     * @param view
     * @param accountId
     * @param applicationSpecId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns LegacyEvaluationResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV3Evaluations(
        view?: (Array<EvaluationViewsOptions> | null),
        accountId?: (string | null),
        applicationSpecId?: (number | string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<LegacyEvaluationResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
                'application_spec_id': applicationSpecId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Evaluation
     * ### Description
     * Creates a evaluation
     *
     * ### Details
     * This API can be used to create a evaluation. To use this API, review the request schema and pass in all fields that are required to create a evaluation.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns LegacyEvaluationResponse Successful Response
     * @throws ApiError
     */
    public static postV3Evaluations(
        requestBody: EvaluationRequestUnion,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<LegacyEvaluationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/evaluations',
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
     * Get Evaluation
     * ### Description
     * Gets the details of a evaluation
     *
     * ### Details
     * This API can be used to get information about a single evaluation by ID. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationId
     * @param view
     * @returns LegacyEvaluationResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationsEvaluationId(
        evaluationId: string,
        view?: (Array<EvaluationViewsOptions> | null),
    ): CancelablePromise<LegacyEvaluationResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Evaluation
     * ### Description
     * Updates a evaluation
     *
     * ### Details
     * This API can be used to update the evaluation that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param evaluationId
     * @param requestBody
     * @returns LegacyEvaluationResponse Successful Response
     * @throws ApiError
     */
    public static patchV3EvaluationsEvaluationId(
        evaluationId: string,
        requestBody: RestorablePartialPatchEvaluationRequest,
    ): CancelablePromise<LegacyEvaluationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Evaluation
     * ### Description
     * Deletes a evaluation
     *
     * ### Details
     * This API can be used to delete a evaluation by ID. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     * @param evaluationId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3EvaluationsEvaluationId(
        evaluationId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Test Case Results
     * ### Description
     * Lists all test case results accessible to the user.
     *
     * ### Details
     * This API can be used to list test case results. If a user has access to multiple accounts, all test case results from all accounts the user is associated with will be returned.
     * @param evaluationId
     * @param view
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns TestCaseResultResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationsEvaluationIdTestCaseResults(
        evaluationId: string,
        view?: (Array<TestCaseResultViewsOptions> | null),
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TestCaseResultResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/test-case-results',
            path: {
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Test Case Result
     * ### Description
     * Creates a test case result
     *
     * ### Details
     * This API can be used to create a test case result. To use this API, review the request schema and pass in all fields that are required to create a test case result.
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static postV3EvaluationsEvaluationIdTestCaseResults(
        evaluationId: string,
        requestBody: TestCaseResultRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/evaluations/{evaluation_id}/test-case-results',
            path: {
                'evaluation_id': evaluationId,
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
     * Batch Create Test Case Results
     * ### Description
     * Creates a batch of test case results
     *
     * ### Details
     * This API can be used to create multiple test case results so users do not have to the incur the cost of repeated network calls. To use this API, pass in a list of test case results in the request body.
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static postV3EvaluationsEvaluationIdTestCaseResultsBatch(
        evaluationId: string,
        requestBody: Array<TestCaseResultRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/evaluations/{evaluation_id}/test-case-results/batch',
            path: {
                'evaluation_id': evaluationId,
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
     * Get Test Case Result
     * ### Description
     * Gets the details of a test case result
     *
     * ### Details
     * This API can be used to get information about a single test case result by ID. To use this API, pass in the `id` that was returned from your Create Test Case Result API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationId
     * @param testCaseResultId
     * @param view
     * @returns TestCaseResultResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationsEvaluationIdTestCaseResultsTestCaseResultId(
        evaluationId: string,
        testCaseResultId: string,
        view?: (Array<TestCaseResultViewsOptions> | null),
    ): CancelablePromise<TestCaseResultResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Test Case Result
     * ### Description
     * Updates a test case result
     *
     * ### Details
     * This API can be used to update the test case result that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Test Case Result API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param evaluationId
     * @param testCaseResultId
     * @param requestBody
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static patchV3EvaluationsEvaluationIdTestCaseResultsTestCaseResultId(
        evaluationId: string,
        testCaseResultId: string,
        requestBody: PartialTestCaseResultRequest,
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Historical Test Case Result
     * @param num
     * @param evaluationId
     * @param testCaseResultId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationsEvaluationIdTestCaseResultsTestCaseResultIdHistoryNum(
        num: string,
        evaluationId: string,
        testCaseResultId: string,
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}/history/{num}',
            path: {
                'num': num,
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Versions of Test Case Result
     * Get all versions of a Test Case Result by lineage ID.
     * @param evaluationId
     * @param testCaseResultId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationsEvaluationIdTestCaseResultsTestCaseResultIdHistory(
        evaluationId: string,
        testCaseResultId: string,
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}/history',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Historical Test Case Results
     * @param num
     * @param evaluationId
     * @param accountId
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationsEvaluationIdTestCaseResultsHistoryNum(
        num: string,
        evaluationId: string,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/test-case-results/history/{num}',
            path: {
                'num': num,
                'evaluation_id': evaluationId,
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
     * Claim Evaluation Task
     * @param evaluationId
     * @param taskType
     * @param xSelectedAccountId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4ClaimTask(
        evaluationId: string,
        taskType: TaskORMTaskTypeEnum = 'EVALUATION_ANNOTATION',
        xSelectedAccountId?: (string | null),
        requestBody?: (ClaimTaskRequest | null),
    ): CancelablePromise<(TaskResponse | null)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/evaluations/{evaluation_id}/claim-task',
            path: {
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'task_type': taskType,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Batch assign tasks to user
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static patchV4TasksBatchAssign(
        evaluationId: string,
        requestBody: BatchAssignTaskRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(Array<TaskResponse> | null)> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/evaluations/{evaluation_id}/tasks/batch-assign',
            path: {
                'evaluation_id': evaluationId,
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
     * Update Evaluation Task
     * @param evaluationId
     * @param taskId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static patchV4TasksTaskId(
        evaluationId: string,
        taskId: string,
        requestBody: UpdateTaskRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(TaskResponse | null)> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/evaluations/{evaluation_id}/tasks/{task_id}',
            path: {
                'evaluation_id': evaluationId,
                'task_id': taskId,
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
     * Get Contributor Metrics
     * @param evaluationId
     * @param contributorId
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getV4ContributorMetricsContributorId(
        evaluationId: string,
        contributorId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(ContributorMetricsResponse | null)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/contributor-metrics/{contributor_id}',
            path: {
                'evaluation_id': evaluationId,
                'contributor_id': contributorId,
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
     * List Contributor Metrics
     * @param evaluationId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param xSelectedAccountId
     * @returns PaginatedContributorMetricsResponse Successful Response
     * @throws ApiError
     */
    public static getV4ContributorMetrics(
        evaluationId: string,
        page: number = 1,
        limit: number = 100,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedContributorMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/contributor-metrics',
            path: {
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Evaluation Metrics
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns EvaluationMetricsResponse Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationMetrics(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/evaluation-metrics',
            path: {
                'evaluation_id': evaluationId,
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
     * Get Hybrid Evaluation Metrics
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns HybridEvaluationMetricsResponse Successful Response
     * @throws ApiError
     */
    public static getV4HybridEvalMetrics(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<HybridEvaluationMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/hybrid-eval-metrics',
            path: {
                'evaluation_id': evaluationId,
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
     * List Evaluations
     * ### Description
     * Lists all evaluations accessible to the user.
     *
     * ### Details
     * This API can be used to list evaluations. If a user has access to multiple accounts, all evaluations from all accounts the user is associated with will be returned.
     * @param view
     * @param sortBy
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param applicationSpecId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns PaginatedLegacyEvaluationResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4Evaluations(
        view?: (Array<EvaluationViewsOptions> | null),
        sortBy?: Array<SortByEnumForLegacyEvaluation>,
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        applicationSpecId?: (number | string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedLegacyEvaluationResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'sort_by': sortBy,
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'application_spec_id': applicationSpecId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Evaluation
     * ### Description
     * Creates a evaluation
     *
     * ### Details
     * This API can be used to create a evaluation. To use this API, review the request schema and pass in all fields that are required to create a evaluation.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns LegacyEvaluationResponse Successful Response
     * @throws ApiError
     */
    public static postV4Evaluations(
        requestBody: EvaluationRequestUnion,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<LegacyEvaluationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/evaluations',
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
     * Get Evaluation
     * ### Description
     * Gets the details of a evaluation
     *
     * ### Details
     * This API can be used to get information about a single evaluation by ID. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationId
     * @param view
     * @returns LegacyEvaluationResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationsEvaluationId(
        evaluationId: string,
        view?: (Array<EvaluationViewsOptions> | null),
    ): CancelablePromise<LegacyEvaluationResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Evaluation
     * ### Description
     * Updates a evaluation
     *
     * ### Details
     * This API can be used to update the evaluation that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param evaluationId
     * @param requestBody
     * @returns LegacyEvaluationResponse Successful Response
     * @throws ApiError
     */
    public static patchV4EvaluationsEvaluationId(
        evaluationId: string,
        requestBody: RestorablePartialPatchEvaluationRequest,
    ): CancelablePromise<LegacyEvaluationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Evaluation
     * ### Description
     * Deletes a evaluation
     *
     * ### Details
     * This API can be used to delete a evaluation by ID. To use this API, pass in the `id` that was returned from your Create Evaluation API call as a path parameter.
     * @param evaluationId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4EvaluationsEvaluationId(
        evaluationId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Test Case Results
     * ### Description
     * Lists all test case results accessible to the user.
     *
     * ### Details
     * This API can be used to list test case results. If a user has access to multiple accounts, all test case results from all accounts the user is associated with will be returned.
     * @param evaluationId
     * @param view
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns PaginatedTestCaseResultResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationsEvaluationIdTestCaseResults(
        evaluationId: string,
        view?: (Array<TestCaseResultViewsOptions> | null),
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedTestCaseResultResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/test-case-results',
            path: {
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Test Case Result
     * ### Description
     * Creates a test case result
     *
     * ### Details
     * This API can be used to create a test case result. To use this API, review the request schema and pass in all fields that are required to create a test case result.
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static postV4EvaluationsEvaluationIdTestCaseResults(
        evaluationId: string,
        requestBody: TestCaseResultRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/evaluations/{evaluation_id}/test-case-results',
            path: {
                'evaluation_id': evaluationId,
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
     * Batch Create Test Case Results
     * ### Description
     * Creates a batch of test case results
     *
     * ### Details
     * This API can be used to create multiple test case results so users do not have to the incur the cost of repeated network calls. To use this API, pass in a list of test case results in the request body.
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static postV4EvaluationsEvaluationIdTestCaseResultsBatch(
        evaluationId: string,
        requestBody: Array<TestCaseResultRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/evaluations/{evaluation_id}/test-case-results/batch',
            path: {
                'evaluation_id': evaluationId,
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
     * Get Test Case Result
     * ### Description
     * Gets the details of a test case result
     *
     * ### Details
     * This API can be used to get information about a single test case result by ID. To use this API, pass in the `id` that was returned from your Create Test Case Result API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationId
     * @param testCaseResultId
     * @param view
     * @returns TestCaseResultResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationsEvaluationIdTestCaseResultsTestCaseResultId(
        evaluationId: string,
        testCaseResultId: string,
        view?: (Array<TestCaseResultViewsOptions> | null),
    ): CancelablePromise<TestCaseResultResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Test Case Result
     * ### Description
     * Updates a test case result
     *
     * ### Details
     * This API can be used to update the test case result that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Test Case Result API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param evaluationId
     * @param testCaseResultId
     * @param requestBody
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static patchV4EvaluationsEvaluationIdTestCaseResultsTestCaseResultId(
        evaluationId: string,
        testCaseResultId: string,
        requestBody: PartialTestCaseResultRequest,
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Historical Test Case Result
     * @param num
     * @param evaluationId
     * @param testCaseResultId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationsEvaluationIdTestCaseResultsTestCaseResultIdHistoryNum(
        num: string,
        evaluationId: string,
        testCaseResultId: string,
    ): CancelablePromise<TestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}/history/{num}',
            path: {
                'num': num,
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Versions of Test Case Result
     * Get all versions of a Test Case Result by lineage ID.
     * @param evaluationId
     * @param testCaseResultId
     * @returns TestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationsEvaluationIdTestCaseResultsTestCaseResultIdHistory(
        evaluationId: string,
        testCaseResultId: string,
    ): CancelablePromise<Array<TestCaseResultResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/test-case-results/{test_case_result_id}/history',
            path: {
                'evaluation_id': evaluationId,
                'test_case_result_id': testCaseResultId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Historical Test Case Results
     * @param num
     * @param evaluationId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedTestCaseResultResponse Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationsEvaluationIdTestCaseResultsHistoryNum(
        num: string,
        evaluationId: string,
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedTestCaseResultResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/test-case-results/history/{num}',
            path: {
                'num': num,
                'evaluation_id': evaluationId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Evaluation
     * @param requestBody
     * @returns Evaluation Successful Response
     * @throws ApiError
     */
    public static postV5V5Evaluations(
        requestBody: EvaluationCreateRequest,
    ): CancelablePromise<Evaluation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/evaluations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Evaluations
     * @param includeArchived
     * @param tags
     * @param views
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @param name
     * @returns EvaluationList Successful Response
     * @throws ApiError
     */
    public static getV5V5Evaluations(
        includeArchived: boolean = false,
        tags?: (Array<string> | null),
        views?: Array<EvaluationViews>,
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
        name?: (string | null),
    ): CancelablePromise<EvaluationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/evaluations',
            query: {
                'include_archived': includeArchived,
                'tags': tags,
                'views': views,
                'starting_after': startingAfter,
                'ending_before': endingBefore,
                'limit': limit,
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Evaluation
     * @param evaluationId
     * @param requestBody
     * @returns Evaluation Successful Response
     * @throws ApiError
     */
    public static patchV5V5EvaluationsEvaluationId(
        evaluationId: string,
        requestBody: EvaluationUpdateRequest,
    ): CancelablePromise<Evaluation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Evaluation
     * @param evaluationId
     * @param includeArchived
     * @param views
     * @returns Evaluation Successful Response
     * @throws ApiError
     */
    public static getV5V5EvaluationsEvaluationId(
        evaluationId: string,
        includeArchived: boolean = false,
        views?: Array<EvaluationViews>,
    ): CancelablePromise<Evaluation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            query: {
                'include_archived': includeArchived,
                'views': views,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Archive Evaluation
     * @param evaluationId
     * @returns EvaluationDelete Successful Response
     * @throws ApiError
     */
    public static deleteV5V5EvaluationsEvaluationId(
        evaluationId: string,
    ): CancelablePromise<EvaluationDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/evaluations/{evaluation_id}',
            path: {
                'evaluation_id': evaluationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
