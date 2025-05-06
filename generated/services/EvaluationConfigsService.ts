/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteResponse } from '../models/DeleteResponse';
import type { EvaluationConfigRequestUnion } from '../models/EvaluationConfigRequestUnion';
import type { EvaluationConfigResponse } from '../models/EvaluationConfigResponse';
import type { PaginatedEvaluationConfigResponse } from '../models/PaginatedEvaluationConfigResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EvaluationConfigsService {
    /**
     * List Evaluation Configs
     * ### Description
     * Lists all evaluation configs accessible to the user.
     *
     * ### Details
     * This API can be used to list evaluation configs. If a user has access to multiple accounts, all evaluation configs from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationConfigs(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<EvaluationConfigResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluation-configs',
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
     * Create Evaluation Config
     * ### Description
     * Creates a evaluation config
     *
     * ### Details
     * This API can be used to create a evaluation config. To use this API, review the request schema and pass in all fields that are required to create a evaluation config.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static postV2EvaluationConfigs(
        requestBody: EvaluationConfigRequestUnion,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationConfigResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/evaluation-configs',
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
     * Get Evaluation Config
     * ### Description
     * Gets the details of a evaluation config
     *
     * ### Details
     * This API can be used to get information about a single evaluation config by ID. To use this API, pass in the `id` that was returned from your Create Evaluation Config API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationConfigId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationConfigsEvaluationConfigId(
        evaluationConfigId: string,
    ): CancelablePromise<EvaluationConfigResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluation-configs/{evaluation_config_id}',
            path: {
                'evaluation_config_id': evaluationConfigId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Evaluation Config
     * ### Description
     * Deletes a evaluation config
     *
     * ### Details
     * This API can be used to delete a evaluation config by ID. To use this API, pass in the `id` that was returned from your Create Evaluation Config API call as a path parameter.
     * @param evaluationConfigId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2EvaluationConfigsEvaluationConfigId(
        evaluationConfigId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/evaluation-configs/{evaluation_config_id}',
            path: {
                'evaluation_config_id': evaluationConfigId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Evaluation Configs
     * ### Description
     * Lists all evaluation configs accessible to the user.
     *
     * ### Details
     * This API can be used to list evaluation configs. If a user has access to multiple accounts, all evaluation configs from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationConfigs(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<EvaluationConfigResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluation-configs',
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
     * Create Evaluation Config
     * ### Description
     * Creates a evaluation config
     *
     * ### Details
     * This API can be used to create a evaluation config. To use this API, review the request schema and pass in all fields that are required to create a evaluation config.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static postV3EvaluationConfigs(
        requestBody: EvaluationConfigRequestUnion,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationConfigResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/evaluation-configs',
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
     * Get Evaluation Config
     * ### Description
     * Gets the details of a evaluation config
     *
     * ### Details
     * This API can be used to get information about a single evaluation config by ID. To use this API, pass in the `id` that was returned from your Create Evaluation Config API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationConfigId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationConfigsEvaluationConfigId(
        evaluationConfigId: string,
    ): CancelablePromise<EvaluationConfigResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluation-configs/{evaluation_config_id}',
            path: {
                'evaluation_config_id': evaluationConfigId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Evaluation Config
     * ### Description
     * Deletes a evaluation config
     *
     * ### Details
     * This API can be used to delete a evaluation config by ID. To use this API, pass in the `id` that was returned from your Create Evaluation Config API call as a path parameter.
     * @param evaluationConfigId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3EvaluationConfigsEvaluationConfigId(
        evaluationConfigId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/evaluation-configs/{evaluation_config_id}',
            path: {
                'evaluation_config_id': evaluationConfigId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Evaluation Configs
     * ### Description
     * Lists all evaluation configs accessible to the user.
     *
     * ### Details
     * This API can be used to list evaluation configs. If a user has access to multiple accounts, all evaluation configs from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedEvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationConfigs(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedEvaluationConfigResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluation-configs',
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
     * Create Evaluation Config
     * ### Description
     * Creates a evaluation config
     *
     * ### Details
     * This API can be used to create a evaluation config. To use this API, review the request schema and pass in all fields that are required to create a evaluation config.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static postV4EvaluationConfigs(
        requestBody: EvaluationConfigRequestUnion,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationConfigResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/evaluation-configs',
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
     * Get Evaluation Config
     * ### Description
     * Gets the details of a evaluation config
     *
     * ### Details
     * This API can be used to get information about a single evaluation config by ID. To use this API, pass in the `id` that was returned from your Create Evaluation Config API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param evaluationConfigId
     * @returns EvaluationConfigResponse Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationConfigsEvaluationConfigId(
        evaluationConfigId: string,
    ): CancelablePromise<EvaluationConfigResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluation-configs/{evaluation_config_id}',
            path: {
                'evaluation_config_id': evaluationConfigId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Evaluation Config
     * ### Description
     * Deletes a evaluation config
     *
     * ### Details
     * This API can be used to delete a evaluation config by ID. To use this API, pass in the `id` that was returned from your Create Evaluation Config API call as a path parameter.
     * @param evaluationConfigId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4EvaluationConfigsEvaluationConfigId(
        evaluationConfigId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/evaluation-configs/{evaluation_config_id}',
            path: {
                'evaluation_config_id': evaluationConfigId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
