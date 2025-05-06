/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssumeProfileRequest } from '../models/AssumeProfileRequest';
import type { FullUserV2DetailsWithCreatedAt } from '../models/FullUserV2DetailsWithCreatedAt';
import type { InviteUserRequest } from '../models/InviteUserRequest';
import type { UserInfo } from '../models/UserInfo';
import type { UserInfoBase } from '../models/UserInfoBase';
import type { UserPreferencesUpdate } from '../models/UserPreferencesUpdate';
import type { UserPreferencesUpdateResponse } from '../models/UserPreferencesUpdateResponse';
import type { UserRegistrationRequest } from '../models/UserRegistrationRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * User info
     * Get basic information for the logged in user making this request including preferences.
     * @returns UserInfo Successful Response
     * @throws ApiError
     */
    public static getV4UserInfo(): CancelablePromise<UserInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user-info',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update user info
     * Update preferences for the logged in user making this request.
     * @param requestBody
     * @returns UserPreferencesUpdateResponse Successful Response
     * @throws ApiError
     */
    public static patchV4UserPreferences(
        requestBody: UserPreferencesUpdate,
    ): CancelablePromise<UserPreferencesUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user-preferences',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User
     * Get basic information for a user. The requester must belong         to the same organization as the target user and be         an admin or manager of an account the target user belongs to.
     * @param userId
     * @returns UserInfoBase Successful Response
     * @throws ApiError
     */
    public static getV4UsersUserId(
        userId: string,
    ): CancelablePromise<UserInfoBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * User registration
     * Register user with the given email and password. This endpoint is only accessible from Azure.
     * @param requestBody
     * @param registrationSecret
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4RegisterUser(
        requestBody: UserRegistrationRequest,
        registrationSecret?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register-user',
            headers: {
                'registration-secret': registrationSecret,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Logout
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4Logout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/logout',
        });
    }
    /**
     * Assume a different access profile that you have access to
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4AssumeProfile(
        requestBody: AssumeProfileRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assume-profile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Invite a user to the organization
     * This endpoint is used to invite a user to the organization. Can only be called by
     * organization admins.
     * @param requestBody
     * @returns FullUserV2DetailsWithCreatedAt Successful Response
     * @throws ApiError
     */
    public static postV1UsersInvite(
        requestBody: InviteUserRequest,
    ): CancelablePromise<FullUserV2DetailsWithCreatedAt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/users/invite',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Invite a user to the organization
     * This endpoint is used to invite a user to the organization. Can only be called by
     * organization admins.
     * @param requestBody
     * @returns FullUserV2DetailsWithCreatedAt Successful Response
     * @throws ApiError
     */
    public static postV2UsersInvite(
        requestBody: InviteUserRequest,
    ): CancelablePromise<FullUserV2DetailsWithCreatedAt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/users/invite',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Invite a user to the organization
     * This endpoint is used to invite a user to the organization. Can only be called by
     * organization admins.
     * @param requestBody
     * @returns FullUserV2DetailsWithCreatedAt Successful Response
     * @throws ApiError
     */
    public static postV3UsersInvite(
        requestBody: InviteUserRequest,
    ): CancelablePromise<FullUserV2DetailsWithCreatedAt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/users/invite',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Invite a user to the organization
     * This endpoint is used to invite a user to the organization. Can only be called by
     * organization admins.
     * @param requestBody
     * @returns FullUserV2DetailsWithCreatedAt Successful Response
     * @throws ApiError
     */
    public static postV4UsersInvite(
        requestBody: InviteUserRequest,
    ): CancelablePromise<FullUserV2DetailsWithCreatedAt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/users/invite',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
