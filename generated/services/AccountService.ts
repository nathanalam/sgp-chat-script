/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGeneralRole } from '../models/AccountGeneralRole';
import type { AccountGeneralRoleRestriction } from '../models/AccountGeneralRoleRestriction';
import type { AccountV2 } from '../models/AccountV2';
import type { CreateAccountGeneralRoleMembershipRequest } from '../models/CreateAccountGeneralRoleMembershipRequest';
import type { CreateAccountRequestV2 } from '../models/CreateAccountRequestV2';
import type { PaginatedAccountGeneralRoleMembershipWithEntity } from '../models/PaginatedAccountGeneralRoleMembershipWithEntity';
import type { PaginatedAccountGeneralRoleRestriction } from '../models/PaginatedAccountGeneralRoleRestriction';
import type { PaginatedAccountV2 } from '../models/PaginatedAccountV2';
import type { RemoveAccountGeneralRoleMembershipRequest } from '../models/RemoveAccountGeneralRoleMembershipRequest';
import type { RoleRestriction } from '../models/RoleRestriction';
import type { UpdateAccountRequestV2 } from '../models/UpdateAccountRequestV2';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountService {
    /**
     * Upsert General Role Restriction
     * Create or update a restriction for an account general role in your
     * organization. Only available for organizations that have role restrictions
     * enabled and only performable by organization admins.
     * @param role
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static putV4AccountsGeneralRoleRestrictionsRole(
        role: AccountGeneralRole,
        requestBody: RoleRestriction,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v4/accounts/general-role-restrictions/{role}',
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
     * @returns AccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV4AccountsGeneralRoleRestrictionsRole(
        role: AccountGeneralRole,
    ): CancelablePromise<AccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/accounts/general-role-restrictions/{role}',
            path: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List accounts accessible to the user
     * This enpdoint is used to list all the accounts the user has access to via
     * general roles.
     *
     * Optionally, filter based on one or more parent account groups.
     * @param accountGroupId Optional list of account group IDs to filter on.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountV2 Successful Response
     * @throws ApiError
     */
    public static getV1Accounts(
        accountGroupId?: (Array<string> | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts',
            query: {
                'account_group_id': accountGroupId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create an account
     * This endpoint is used to create an account. Can only be called by
     * organization admins or account group admins.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static postV1Accounts(
        requestBody: CreateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/accounts',
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
     * List accounts accessible to the user
     * This enpdoint is used to list all the accounts the user has access to via
     * general roles.
     *
     * Optionally, filter based on one or more parent account groups.
     * @param accountGroupId Optional list of account group IDs to filter on.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountV2 Successful Response
     * @throws ApiError
     */
    public static getV2Accounts(
        accountGroupId?: (Array<string> | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/accounts',
            query: {
                'account_group_id': accountGroupId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create an account
     * This endpoint is used to create an account. Can only be called by
     * organization admins or account group admins.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static postV2Accounts(
        requestBody: CreateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/accounts',
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
     * List accounts accessible to the user
     * This enpdoint is used to list all the accounts the user has access to via
     * general roles.
     *
     * Optionally, filter based on one or more parent account groups.
     * @param accountGroupId Optional list of account group IDs to filter on.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountV2 Successful Response
     * @throws ApiError
     */
    public static getV3Accounts(
        accountGroupId?: (Array<string> | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/accounts',
            query: {
                'account_group_id': accountGroupId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create an account
     * This endpoint is used to create an account. Can only be called by
     * organization admins or account group admins.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static postV3Accounts(
        requestBody: CreateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/accounts',
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
     * List accounts accessible to the user
     * This enpdoint is used to list all the accounts the user has access to via
     * general roles.
     *
     * Optionally, filter based on one or more parent account groups.
     * @param accountGroupId Optional list of account group IDs to filter on.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountV2 Successful Response
     * @throws ApiError
     */
    public static getV4Accounts(
        accountGroupId?: (Array<string> | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/accounts',
            query: {
                'account_group_id': accountGroupId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create an account
     * This endpoint is used to create an account. Can only be called by
     * organization admins or account group admins.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static postV4Accounts(
        requestBody: CreateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/accounts',
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
     * Return a list of role restrictions on general roles of accounts in your
     * organizations. Only available for organizations that have role restrictions
     * enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV1AccountsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/general-role-restrictions',
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
     * Return a list of role restrictions on general roles of accounts in your
     * organizations. Only available for organizations that have role restrictions
     * enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV2AccountsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/accounts/general-role-restrictions',
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
     * Return a list of role restrictions on general roles of accounts in your
     * organizations. Only available for organizations that have role restrictions
     * enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV3AccountsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/accounts/general-role-restrictions',
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
     * Return a list of role restrictions on general roles of accounts in your
     * organizations. Only available for organizations that have role restrictions
     * enabled.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV4AccountsGeneralRoleRestrictions(
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/accounts/general-role-restrictions',
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
     * @returns AccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV1AccountsGeneralRoleRestrictionsRole(
        role: AccountGeneralRole,
    ): CancelablePromise<AccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/general-role-restrictions/{role}',
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
     * @returns AccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV2AccountsGeneralRoleRestrictionsRole(
        role: AccountGeneralRole,
    ): CancelablePromise<AccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/accounts/general-role-restrictions/{role}',
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
     * @returns AccountGeneralRoleRestriction Successful Response
     * @throws ApiError
     */
    public static getV3AccountsGeneralRoleRestrictionsRole(
        role: AccountGeneralRole,
    ): CancelablePromise<AccountGeneralRoleRestriction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/accounts/general-role-restrictions/{role}',
            path: {
                'role': role,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get an account
     * This endpoint get details about an account by ID.
     * @param id
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static getV1AccountsId(
        id: string,
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account
     * This endoint updates the specified account.
     *
     * Name updates can be performed by an account manager, account group admin, or
     * an organization admin.
     * Parent account group updates can only be performed by an organization admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV1AccountsId(
        id: string,
        requestBody: UpdateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/accounts/{id}',
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
     * Get an account
     * This endpoint get details about an account by ID.
     * @param id
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static getV2AccountsId(
        id: string,
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/accounts/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account
     * This endoint updates the specified account.
     *
     * Name updates can be performed by an account manager, account group admin, or
     * an organization admin.
     * Parent account group updates can only be performed by an organization admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV2AccountsId(
        id: string,
        requestBody: UpdateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/accounts/{id}',
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
     * Get an account
     * This endpoint get details about an account by ID.
     * @param id
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static getV3AccountsId(
        id: string,
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/accounts/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account
     * This endoint updates the specified account.
     *
     * Name updates can be performed by an account manager, account group admin, or
     * an organization admin.
     * Parent account group updates can only be performed by an organization admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV3AccountsId(
        id: string,
        requestBody: UpdateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/accounts/{id}',
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
     * Get an account
     * This endpoint get details about an account by ID.
     * @param id
     * @returns AccountV2 Successful Response
     * @throws ApiError
     */
    public static getV4AccountsId(
        id: string,
    ): CancelablePromise<AccountV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/accounts/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update an account
     * This endoint updates the specified account.
     *
     * Name updates can be performed by an account manager, account group admin, or
     * an organization admin.
     * Parent account group updates can only be performed by an organization admin.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static patchV4AccountsId(
        id: string,
        requestBody: UpdateAccountRequestV2,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/accounts/{id}',
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
     * Return a list of the identies (currently just users) who have a general
     * role on this account.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV1AccountsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/{id}/general-role-memberships',
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
     * Add / change an identity's role on the account
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by account managers, account group admins, and
     * organization admins.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV1AccountsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/accounts/{id}/general-role-memberships',
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
     * Return a list of the identies (currently just users) who have a general
     * role on this account.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV2AccountsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/accounts/{id}/general-role-memberships',
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
     * Add / change an identity's role on the account
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by account managers, account group admins, and
     * organization admins.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV2AccountsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/accounts/{id}/general-role-memberships',
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
     * Return a list of the identies (currently just users) who have a general
     * role on this account.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV3AccountsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/accounts/{id}/general-role-memberships',
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
     * Add / change an identity's role on the account
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by account managers, account group admins, and
     * organization admins.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV3AccountsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/accounts/{id}/general-role-memberships',
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
     * Return a list of the identies (currently just users) who have a general
     * role on this account.
     * @param id
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedAccountGeneralRoleMembershipWithEntity Successful Response
     * @throws ApiError
     */
    public static getV4AccountsIdGeneralRoleMemberships(
        id: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedAccountGeneralRoleMembershipWithEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/accounts/{id}/general-role-memberships',
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
     * Add / change an identity's role on the account
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by account managers, account group admins, and
     * organization admins.
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4AccountsIdGeneralRoleMemberships(
        id: string,
        requestBody: CreateAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/accounts/{id}/general-role-memberships',
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
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the account
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV1AccountsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/accounts/{id}/general-role-memberships/remove-member',
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
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the account
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV2AccountsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/accounts/{id}/general-role-memberships/remove-member',
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
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the account
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV3AccountsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/accounts/{id}/general-role-memberships/remove-member',
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
     * Add an identity to the specified account or change their general role
     * within the account.
     *
     * Can be performed by:
     * - Account managers
     * - Account group admins
     * - Organization admins
     * - Users removing themselves from the account
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns void
     * @throws ApiError
     */
    public static postV4AccountsIdGeneralRoleMembershipsRemoveMember(
        id: string,
        requestBody: RemoveAccountGeneralRoleMembershipRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/accounts/{id}/general-role-memberships/remove-member',
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
