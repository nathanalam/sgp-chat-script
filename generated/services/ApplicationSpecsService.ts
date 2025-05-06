/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationSpecRequest } from '../models/ApplicationSpecRequest';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse } from '../models/egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse';
import type { PaginatedApplicationSpecResponse } from '../models/PaginatedApplicationSpecResponse';
import type { RestorablePartialApplicationSpecRequest } from '../models/RestorablePartialApplicationSpecRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationSpecsService {
    /**
     * List Application Specs
     * ### Description
     * Lists all application specs accessible to the user.
     *
     * ### Details
     * This API can be used to list application specs. If a user has access to multiple accounts, all application specs from all accounts the user is associated with will be returned.
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static getV2ApplicationSpecs(
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/application-specs',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Application Spec
     * ### Description
     * Creates a application spec
     *
     * ### Details
     * This API can be used to create a application spec. To use this API, review the request schema and pass in all fields that are required to create a application spec.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static postV2ApplicationSpecs(
        requestBody: ApplicationSpecRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/application-specs',
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
     * Get Application Spec
     * ### Description
     * Gets the details of a application spec
     *
     * ### Details
     * This API can be used to get information about a single application spec by ID. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param applicationSpecId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static getV2ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Application Spec
     * ### Description
     * Updates a application spec
     *
     * ### Details
     * This API can be used to update the application spec that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param applicationSpecId
     * @param requestBody
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static patchV2ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
        requestBody: RestorablePartialApplicationSpecRequest,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Application Spec
     * ### Description
     * Deletes a application spec
     *
     * ### Details
     * This API can be used to delete a application spec by ID. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     * @param applicationSpecId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Specs
     * ### Description
     * Lists all application specs accessible to the user.
     *
     * ### Details
     * This API can be used to list application specs. If a user has access to multiple accounts, all application specs from all accounts the user is associated with will be returned.
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static getV3ApplicationSpecs(
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/application-specs',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Application Spec
     * ### Description
     * Creates a application spec
     *
     * ### Details
     * This API can be used to create a application spec. To use this API, review the request schema and pass in all fields that are required to create a application spec.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static postV3ApplicationSpecs(
        requestBody: ApplicationSpecRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/application-specs',
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
     * Get Application Spec
     * ### Description
     * Gets the details of a application spec
     *
     * ### Details
     * This API can be used to get information about a single application spec by ID. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param applicationSpecId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static getV3ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Application Spec
     * ### Description
     * Updates a application spec
     *
     * ### Details
     * This API can be used to update the application spec that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param applicationSpecId
     * @param requestBody
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static patchV3ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
        requestBody: RestorablePartialApplicationSpecRequest,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Application Spec
     * ### Description
     * Deletes a application spec
     *
     * ### Details
     * This API can be used to delete a application spec by ID. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     * @param applicationSpecId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Specs
     * ### Description
     * Lists all application specs accessible to the user.
     *
     * ### Details
     * This API can be used to list application specs. If a user has access to multiple accounts, all application specs from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns PaginatedApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationSpecs(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-specs',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
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
     * Create Application Spec
     * ### Description
     * Creates a application spec
     *
     * ### Details
     * This API can be used to create a application spec. To use this API, review the request schema and pass in all fields that are required to create a application spec.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationSpecs(
        requestBody: ApplicationSpecRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/application-specs',
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
     * Get Application Spec
     * ### Description
     * Gets the details of a application spec
     *
     * ### Details
     * This API can be used to get information about a single application spec by ID. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param applicationSpecId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Application Spec
     * ### Description
     * Updates a application spec
     *
     * ### Details
     * This API can be used to update the application spec that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param applicationSpecId
     * @param requestBody
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse Successful Response
     * @throws ApiError
     */
    public static patchV4ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
        requestBody: RestorablePartialApplicationSpecRequest,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Application Spec
     * ### Description
     * Deletes a application spec
     *
     * ### Details
     * This API can be used to delete a application spec by ID. To use this API, pass in the `id` that was returned from your Create Application Spec API call as a path parameter.
     * @param applicationSpecId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4ApplicationSpecsApplicationSpecId(
        applicationSpecId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/application-specs/{application_spec_id}',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
