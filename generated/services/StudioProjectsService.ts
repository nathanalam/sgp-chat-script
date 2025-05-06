/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteResponse } from '../models/DeleteResponse';
import type { PaginatedStudioProjectResponse } from '../models/PaginatedStudioProjectResponse';
import type { PartialStudioProjectRequest } from '../models/PartialStudioProjectRequest';
import type { StudioProjectRequest } from '../models/StudioProjectRequest';
import type { StudioProjectResponse } from '../models/StudioProjectResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StudioProjectsService {
    /**
     * List Studio Projects
     * ### Description
     * Lists all studio projects accessible to the user.
     *
     * ### Details
     * This API can be used to list studio projects. If a user has access to multiple accounts, all studio projects from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static getV2StudioProjects(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<StudioProjectResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/studio-projects',
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
     * Create Studio Project
     * ### Description
     * Creates a studio project
     *
     * ### Details
     * This API can be used to create a studio project. To use this API, review the request schema and pass in all fields that are required to create a studio project.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static postV2StudioProjects(
        requestBody: StudioProjectRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/studio-projects',
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
     * Get Studio Project
     * ### Description
     * Gets the details of a studio project
     *
     * ### Details
     * This API can be used to get information about a single studio project by ID. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param studioProjectId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static getV2StudioProjectsStudioProjectId(
        studioProjectId: string,
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Studio Project
     * ### Description
     * Updates a studio project
     *
     * ### Details
     * This API can be used to update the studio project that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param studioProjectId
     * @param requestBody
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static patchV2StudioProjectsStudioProjectId(
        studioProjectId: string,
        requestBody: PartialStudioProjectRequest,
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Studio Project
     * ### Description
     * Deletes a studio project
     *
     * ### Details
     * This API can be used to delete a studio project by ID. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     * @param studioProjectId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2StudioProjectsStudioProjectId(
        studioProjectId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Studio Projects
     * ### Description
     * Lists all studio projects accessible to the user.
     *
     * ### Details
     * This API can be used to list studio projects. If a user has access to multiple accounts, all studio projects from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static getV3StudioProjects(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<StudioProjectResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/studio-projects',
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
     * Create Studio Project
     * ### Description
     * Creates a studio project
     *
     * ### Details
     * This API can be used to create a studio project. To use this API, review the request schema and pass in all fields that are required to create a studio project.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static postV3StudioProjects(
        requestBody: StudioProjectRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/studio-projects',
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
     * Get Studio Project
     * ### Description
     * Gets the details of a studio project
     *
     * ### Details
     * This API can be used to get information about a single studio project by ID. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param studioProjectId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static getV3StudioProjectsStudioProjectId(
        studioProjectId: string,
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Studio Project
     * ### Description
     * Updates a studio project
     *
     * ### Details
     * This API can be used to update the studio project that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param studioProjectId
     * @param requestBody
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static patchV3StudioProjectsStudioProjectId(
        studioProjectId: string,
        requestBody: PartialStudioProjectRequest,
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Studio Project
     * ### Description
     * Deletes a studio project
     *
     * ### Details
     * This API can be used to delete a studio project by ID. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     * @param studioProjectId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3StudioProjectsStudioProjectId(
        studioProjectId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Studio Projects
     * ### Description
     * Lists all studio projects accessible to the user.
     *
     * ### Details
     * This API can be used to list studio projects. If a user has access to multiple accounts, all studio projects from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedStudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static getV4StudioProjects(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedStudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/studio-projects',
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
     * Create Studio Project
     * ### Description
     * Creates a studio project
     *
     * ### Details
     * This API can be used to create a studio project. To use this API, review the request schema and pass in all fields that are required to create a studio project.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static postV4StudioProjects(
        requestBody: StudioProjectRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/studio-projects',
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
     * Get Studio Project
     * ### Description
     * Gets the details of a studio project
     *
     * ### Details
     * This API can be used to get information about a single studio project by ID. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param studioProjectId
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static getV4StudioProjectsStudioProjectId(
        studioProjectId: string,
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Studio Project
     * ### Description
     * Updates a studio project
     *
     * ### Details
     * This API can be used to update the studio project that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param studioProjectId
     * @param requestBody
     * @returns StudioProjectResponse Successful Response
     * @throws ApiError
     */
    public static patchV4StudioProjectsStudioProjectId(
        studioProjectId: string,
        requestBody: PartialStudioProjectRequest,
    ): CancelablePromise<StudioProjectResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Studio Project
     * ### Description
     * Deletes a studio project
     *
     * ### Details
     * This API can be used to delete a studio project by ID. To use this API, pass in the `id` that was returned from your Create Studio Project API call as a path parameter.
     * @param studioProjectId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4StudioProjectsStudioProjectId(
        studioProjectId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/studio-projects/{studio_project_id}',
            path: {
                'studio_project_id': studioProjectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
