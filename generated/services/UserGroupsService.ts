/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserGroup } from '../models/PaginatedUserGroup';
import type { PaginatedUserGroupUserMembership } from '../models/PaginatedUserGroupUserMembership';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserGroupsService {
    /**
     * List user groups
     * This endpoint is used to list the user groups that are visibile to you in
     * your organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroup Successful Response
     * @throws ApiError
     */
    public static getV1UserGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user-groups',
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
     * List user groups
     * This endpoint is used to list the user groups that are visibile to you in
     * your organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroup Successful Response
     * @throws ApiError
     */
    public static getV2UserGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/user-groups',
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
     * List user groups
     * This endpoint is used to list the user groups that are visibile to you in
     * your organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroup Successful Response
     * @throws ApiError
     */
    public static getV3UserGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/user-groups',
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
     * List user groups
     * This endpoint is used to list the user groups that are visibile to you in
     * your organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroup Successful Response
     * @throws ApiError
     */
    public static getV4UserGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/user-groups',
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
     * List the users under a given group
     * This endpoint gets a list of users under a given group. The group must be
     * under your organization.
     * @param groupId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroupUserMembership Successful Response
     * @throws ApiError
     */
    public static getV1UserGroupsGroupIdUserMemberships(
        groupId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroupUserMembership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/user-groups/{group_id}/user-memberships',
            path: {
                'group_id': groupId,
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
     * List the users under a given group
     * This endpoint gets a list of users under a given group. The group must be
     * under your organization.
     * @param groupId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroupUserMembership Successful Response
     * @throws ApiError
     */
    public static getV2UserGroupsGroupIdUserMemberships(
        groupId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroupUserMembership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/user-groups/{group_id}/user-memberships',
            path: {
                'group_id': groupId,
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
     * List the users under a given group
     * This endpoint gets a list of users under a given group. The group must be
     * under your organization.
     * @param groupId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroupUserMembership Successful Response
     * @throws ApiError
     */
    public static getV3UserGroupsGroupIdUserMemberships(
        groupId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroupUserMembership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/user-groups/{group_id}/user-memberships',
            path: {
                'group_id': groupId,
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
     * List the users under a given group
     * This endpoint gets a list of users under a given group. The group must be
     * under your organization.
     * @param groupId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserGroupUserMembership Successful Response
     * @throws ApiError
     */
    public static getV4UserGroupsGroupIdUserMemberships(
        groupId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserGroupUserMembership> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/user-groups/{group_id}/user-memberships',
            path: {
                'group_id': groupId,
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
}
