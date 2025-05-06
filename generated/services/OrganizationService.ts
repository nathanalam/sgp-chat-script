/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Organization } from '../models/Organization';
import type { PaginatedUserV2Details } from '../models/PaginatedUserV2Details';
import type { UserGroup } from '../models/UserGroup';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationService {
    /**
     * Get organization by ID
     * Get an organization by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns Organization Successful Response
     * @throws ApiError
     */
    public static getV1OrganizationsOrganizationId(
        organizationId: string,
    ): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/organizations/{organization_id}',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get organization by ID
     * Get an organization by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns Organization Successful Response
     * @throws ApiError
     */
    public static getV2OrganizationsOrganizationId(
        organizationId: string,
    ): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/organizations/{organization_id}',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get organization by ID
     * Get an organization by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns Organization Successful Response
     * @throws ApiError
     */
    public static getV3OrganizationsOrganizationId(
        organizationId: string,
    ): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/organizations/{organization_id}',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get organization by ID
     * Get an organization by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns Organization Successful Response
     * @throws ApiError
     */
    public static getV4OrganizationsOrganizationId(
        organizationId: string,
    ): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/organizations/{organization_id}',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get organization by ID
     * Get the organization's admin group by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns UserGroup Successful Response
     * @throws ApiError
     */
    public static getV1OrganizationsOrganizationIdAdminGroup(
        organizationId: string,
    ): CancelablePromise<UserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/organizations/{organization_id}/admin-group',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get organization by ID
     * Get the organization's admin group by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns UserGroup Successful Response
     * @throws ApiError
     */
    public static getV2OrganizationsOrganizationIdAdminGroup(
        organizationId: string,
    ): CancelablePromise<UserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/organizations/{organization_id}/admin-group',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get organization by ID
     * Get the organization's admin group by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns UserGroup Successful Response
     * @throws ApiError
     */
    public static getV3OrganizationsOrganizationIdAdminGroup(
        organizationId: string,
    ): CancelablePromise<UserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/organizations/{organization_id}/admin-group',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get organization by ID
     * Get the organization's admin group by ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @returns UserGroup Successful Response
     * @throws ApiError
     */
    public static getV4OrganizationsOrganizationIdAdminGroup(
        organizationId: string,
    ): CancelablePromise<UserGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/organizations/{organization_id}/admin-group',
            path: {
                'organization_id': organizationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get users by organization ID
     * Get users by organization ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserV2Details Successful Response
     * @throws ApiError
     */
    public static getV1OrganizationsOrganizationIdUsers(
        organizationId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserV2Details> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/organizations/{organization_id}/users',
            path: {
                'organization_id': organizationId,
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
     * Get users by organization ID
     * Get users by organization ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserV2Details Successful Response
     * @throws ApiError
     */
    public static getV2OrganizationsOrganizationIdUsers(
        organizationId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserV2Details> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/organizations/{organization_id}/users',
            path: {
                'organization_id': organizationId,
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
     * Get users by organization ID
     * Get users by organization ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserV2Details Successful Response
     * @throws ApiError
     */
    public static getV3OrganizationsOrganizationIdUsers(
        organizationId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserV2Details> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/organizations/{organization_id}/users',
            path: {
                'organization_id': organizationId,
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
     * Get users by organization ID
     * Get users by organization ID. Users can only access the organization
     * they are a member of.
     * @param organizationId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedUserV2Details Successful Response
     * @throws ApiError
     */
    public static getV4OrganizationsOrganizationIdUsers(
        organizationId: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedUserV2Details> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/organizations/{organization_id}/users',
            path: {
                'organization_id': organizationId,
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
