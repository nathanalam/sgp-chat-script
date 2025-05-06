/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroup } from '../models/AccountGroup';
import type { AccountGroupGeneralRole } from '../models/AccountGroupGeneralRole';
import type { AccountGroupGeneralRoleRestriction } from '../models/AccountGroupGeneralRoleRestriction';
import type { CreateAccountGroupGeneralRoleMembershipRequest } from '../models/CreateAccountGroupGeneralRoleMembershipRequest';
import type { CreateAccountGroupRequest } from '../models/CreateAccountGroupRequest';
import type { PaginatedAccountGroup } from '../models/PaginatedAccountGroup';
import type { PaginatedAccountGroupGeneralRoleMembershipWithEntity } from '../models/PaginatedAccountGroupGeneralRoleMembershipWithEntity';
import type { PaginatedAccountGroupGeneralRoleRestriction } from '../models/PaginatedAccountGroupGeneralRoleRestriction';
import type { RemoveAccountGroupGeneralRoleMembershipRequest } from '../models/RemoveAccountGroupGeneralRoleMembershipRequest';
import type { RoleRestriction } from '../models/RoleRestriction';
import type { UpdateAccountGroupRequest } from '../models/UpdateAccountGroupRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountGroupsService {
    /**
     * Upsert General Role Restriction
     * Create or update a restriction for an account group general role in your
     * organization. Only available for organizations that have role restrictions
     * enabled and only performable by organization admins.
     * @param role
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static putV4AccountGroupsGeneralRoleRestrictionsRole(
        role: AccountGroupGeneralRole,
        requestBody: RoleRestriction,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v4/account-groups/general-role-restrictions/{role}',
            path: {
                'role': role,
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
     * Get General Role Restriction
     * Get the role restriction on the specified general role in your organization
     * if it exists. Only available for organizations that have role restrictions
     * enabled.
     * @param role
     * @returns AccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV4AccountGroupsGeneralRoleRestrictionsRole(
        role: AccountGroupGeneralRole,
    ): CancelablePromise<AccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/account-groups/general-role-restrictions/{role}',
            path: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List account groups accessible to the user
     * This endpoint is used to list all the account groups the user has access to
     * via general roles.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroup Successful Response
     * @throws ApiError
     */
    public static getV1AccountGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/account-groups',
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
     * Create an account group
     * This endpoint is used to create an account group in your organization. Can
     * only be called by an organization admin.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static postV1AccountGroups(
        requestBody: CreateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/account-groups',
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
     * List account groups accessible to the user
     * This endpoint is used to list all the account groups the user has access to
     * via general roles.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroup Successful Response
     * @throws ApiError
     */
    public static getV2AccountGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/account-groups',
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
     * Create an account group
     * This endpoint is used to create an account group in your organization. Can
     * only be called by an organization admin.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static postV2AccountGroups(
        requestBody: CreateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/account-groups',
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
     * List account groups accessible to the user
     * This endpoint is used to list all the account groups the user has access to
     * via general roles.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroup Successful Response
     * @throws ApiError
     */
    public static getV3AccountGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/account-groups',
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
     * Create an account group
     * This endpoint is used to create an account group in your organization. Can
     * only be called by an organization admin.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static postV3AccountGroups(
        requestBody: CreateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/account-groups',
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
     * List account groups accessible to the user
     * This endpoint is used to list all the account groups the user has access to
     * via general roles.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroup Successful Response
     * @throws ApiError
     */
    public static getV4AccountGroups(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/account-groups',
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
     * Create an account group
     * This endpoint is used to create an account group in your organization. Can
     * only be called by an organization admin.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static postV4AccountGroups(
        requestBody: CreateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/account-groups',
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
     * List General Role Restrictions
     * Return a list of role restrictions on general roles of account groups in
     * your organizations. Only available for organizations that have role
     * restrictions enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV1AccountGroupsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/account-groups/general-role-restrictions',
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
     * List General Role Restrictions
     * Return a list of role restrictions on general roles of account groups in
     * your organizations. Only available for organizations that have role
     * restrictions enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV2AccountGroupsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/account-groups/general-role-restrictions',
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
     * List General Role Restrictions
     * Return a list of role restrictions on general roles of account groups in
     * your organizations. Only available for organizations that have role
     * restrictions enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV3AccountGroupsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/account-groups/general-role-restrictions',
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
     * List General Role Restrictions
     * Return a list of role restrictions on general roles of account groups in
     * your organizations. Only available for organizations that have role
     * restrictions enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV4AccountGroupsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/account-groups/general-role-restrictions',
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
     * Get General Role Restriction
     * Get the role restriction on the specified general role in your organization
     * if it exists. Only available for organizations that have role restrictions
     * enabled.
     * @param role
     * @returns AccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV1AccountGroupsGeneralRoleRestrictionsRole(
        role: AccountGroupGeneralRole,
    ): CancelablePromise<AccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/account-groups/general-role-restrictions/{role}',
            path: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get General Role Restriction
     * Get the role restriction on the specified general role in your organization
     * if it exists. Only available for organizations that have role restrictions
     * enabled.
     * @param role
     * @returns AccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV2AccountGroupsGeneralRoleRestrictionsRole(
        role: AccountGroupGeneralRole,
    ): CancelablePromise<AccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/account-groups/general-role-restrictions/{role}',
            path: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get General Role Restriction
     * Get the role restriction on the specified general role in your organization
     * if it exists. Only available for organizations that have role restrictions
     * enabled.
     * @param role
     * @returns AccountGroupGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV3AccountGroupsGeneralRoleRestrictionsRole(
        role: AccountGroupGeneralRole,
    ): CancelablePromise<AccountGroupGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/account-groups/general-role-restrictions/{role}',
            path: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get an account group
     * This endpoint gets details about an account group by ID.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param groupId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static getV1AccountGroupsGroupId(
        groupId: string,
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/account-groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account group
     * This endpoint updates account group metadata. Can only be called by an
     * account group admin or organization admin.
     * @param groupId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV1AccountGroupsGroupId(
        groupId: string,
        requestBody: UpdateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/account-groups/{group_id}',
            path: {
                'group_id': groupId,
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
     * Get an account group
     * This endpoint gets details about an account group by ID.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param groupId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static getV2AccountGroupsGroupId(
        groupId: string,
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/account-groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account group
     * This endpoint updates account group metadata. Can only be called by an
     * account group admin or organization admin.
     * @param groupId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV2AccountGroupsGroupId(
        groupId: string,
        requestBody: UpdateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/account-groups/{group_id}',
            path: {
                'group_id': groupId,
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
     * Get an account group
     * This endpoint gets details about an account group by ID.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param groupId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static getV3AccountGroupsGroupId(
        groupId: string,
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/account-groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account group
     * This endpoint updates account group metadata. Can only be called by an
     * account group admin or organization admin.
     * @param groupId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV3AccountGroupsGroupId(
        groupId: string,
        requestBody: UpdateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/account-groups/{group_id}',
            path: {
                'group_id': groupId,
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
     * Get an account group
     * This endpoint gets details about an account group by ID.
     *
     * Users have access to the account groups for which they have a general role
     * on a child account and the account groups they are admins of. Organization
     * admins have access to all account groups in their organization.
     * @param groupId
     * @returns AccountGroup Successful Response
     * @throws ApiError
     */
    public static getV4AccountGroupsGroupId(
        groupId: string,
    ): CancelablePromise<AccountGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/account-groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account group
     * This endpoint updates account group metadata. Can only be called by an
     * account group admin or organization admin.
     * @param groupId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV4AccountGroupsGroupId(
        groupId: string,
        requestBody: UpdateAccountGroupRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/account-groups/{group_id}',
            path: {
                'group_id': groupId,
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
     * Get a list of identities with general roles
     * Return a list of the identities (currently just users) who have a general
     * role on this account group.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV1AccountGroupsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Add / change an identity's role on the account group
     * Add an identity to the specified account group. Currently, the only role is
     * account group admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV1AccountGroupsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Get a list of identities with general roles
     * Return a list of the identities (currently just users) who have a general
     * role on this account group.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV2AccountGroupsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Add / change an identity's role on the account group
     * Add an identity to the specified account group. Currently, the only role is
     * account group admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV2AccountGroupsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Get a list of identities with general roles
     * Return a list of the identities (currently just users) who have a general
     * role on this account group.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV3AccountGroupsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Add / change an identity's role on the account group
     * Add an identity to the specified account group. Currently, the only role is
     * account group admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV3AccountGroupsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Get a list of identities with general roles
     * Return a list of the identities (currently just users) who have a general
     * role on this account group.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGroupGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV4AccountGroupsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGroupGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Add / change an identity's role on the account group
     * Add an identity to the specified account group. Currently, the only role is
     * account group admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4AccountGroupsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/account-groups/{id}/general-role-memberships',
            path: {
                'id': id,
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
     * Add / change multiple identities' roles on the account group
     * Add multiple identities to the specified account group. Currently, the only
     * role is account group admin. Limit of 10 identities per request.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV1AccountGroupsIdGeneralRoleMembershipsBatchCreate(
        id: string,
        requestBody: Array<CreateAccountGroupGeneralRoleMembershipRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/account-groups/{id}/general-role-memberships/batch-create',
            path: {
                'id': id,
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
     * Add / change multiple identities' roles on the account group
     * Add multiple identities to the specified account group. Currently, the only
     * role is account group admin. Limit of 10 identities per request.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV2AccountGroupsIdGeneralRoleMembershipsBatchCreate(
        id: string,
        requestBody: Array<CreateAccountGroupGeneralRoleMembershipRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/account-groups/{id}/general-role-memberships/batch-create',
            path: {
                'id': id,
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
     * Add / change multiple identities' roles on the account group
     * Add multiple identities to the specified account group. Currently, the only
     * role is account group admin. Limit of 10 identities per request.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV3AccountGroupsIdGeneralRoleMembershipsBatchCreate(
        id: string,
        requestBody: Array<CreateAccountGroupGeneralRoleMembershipRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/account-groups/{id}/general-role-memberships/batch-create',
            path: {
                'id': id,
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
     * Add / change multiple identities' roles on the account group
     * Add multiple identities to the specified account group. Currently, the only
     * role is account group admin. Limit of 10 identities per request.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4AccountGroupsIdGeneralRoleMembershipsBatchCreate(
        id: string,
        requestBody: Array<CreateAccountGroupGeneralRoleMembershipRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/account-groups/{id}/general-role-memberships/batch-create',
            path: {
                'id': id,
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
     * Remove an identity's access to an account
     * Remove an identity from the specified account group.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the group
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV1AccountGroupsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/account-groups/{id}/general-role-memberships/remove-member',
            path: {
                'id': id,
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
     * Remove an identity's access to an account
     * Remove an identity from the specified account group.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the group
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV2AccountGroupsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/account-groups/{id}/general-role-memberships/remove-member',
            path: {
                'id': id,
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
     * Remove an identity's access to an account
     * Remove an identity from the specified account group.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the group
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV3AccountGroupsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/account-groups/{id}/general-role-memberships/remove-member',
            path: {
                'id': id,
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
     * Remove an identity's access to an account
     * Remove an identity from the specified account group.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the group
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV4AccountGroupsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGroupGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/account-groups/{id}/general-role-memberships/remove-member',
            path: {
                'id': id,
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
