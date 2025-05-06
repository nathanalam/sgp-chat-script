/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIList_UserResource_ } from '../models/APIList_UserResource_';
import type { PermissionsCreateRequest } from '../models/PermissionsCreateRequest';
import type { PermissionsUpdateRequest } from '../models/PermissionsUpdateRequest';
import type { ResourcePermissionType } from '../models/ResourcePermissionType';
import type { UserResourceList } from '../models/UserResourceList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionsService {
    /**
     * List Permissions
     * @param resourceType
     * @param permission
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param xSelectedAccountId
     * @returns UserResourceList Successful Response
     * @throws ApiError
     */
    public static getV5V5Permissions(
        resourceType: ResourcePermissionType,
        permission: string = 'read',
        page: number = 1,
        limit: number = 100,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<UserResourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/permissions',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'resource_type': resourceType,
                'permission': permission,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Permissions
     * @param requestBody
     * @param xSelectedAccountId
     * @returns APIList_UserResource_ Successful Response
     * @throws ApiError
     */
    public static postV5V5Permissions(
        requestBody: PermissionsCreateRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<APIList_UserResource_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/permissions',
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
     * Get Permissions for Resource
     * @param resourceId
     * @param resourceType
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param xSelectedAccountId
     * @returns UserResourceList Successful Response
     * @throws ApiError
     */
    public static getV5V5PermissionsResourceId(
        resourceId: string,
        resourceType: ResourcePermissionType = 'knowledge_base',
        page: number = 1,
        limit: number = 100,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<UserResourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/permissions/{resource_id}',
            path: {
                'resource_id': resourceId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'resource_type': resourceType,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Permissions for Resource
     * @param resourceId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns APIList_UserResource_ Successful Response
     * @throws ApiError
     */
    public static putV5V5PermissionsResourceId(
        resourceId: string,
        requestBody: PermissionsUpdateRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<APIList_UserResource_> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v5/permissions/{resource_id}',
            path: {
                'resource_id': resourceId,
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
}
