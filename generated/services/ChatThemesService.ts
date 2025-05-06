/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedThemeResponse } from '../models/PaginatedThemeResponse';
import type { ThemeRequest } from '../models/ThemeRequest';
import type { ThemeResponse } from '../models/ThemeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatThemesService {
    /**
     * List Themes
     * ### Description
     * Lists all themes accessible to the user.
     *
     * ### Details
     * This API can be used to list themes. If a user has access to multiple accounts, all themes from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns PaginatedThemeResponse Successful Response
     * @throws ApiError
     */
    public static getV4Themes(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedThemeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/themes',
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
     * Create Theme
     * ### Description
     * Custom chat themes
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ThemeResponse Successful Response
     * @throws ApiError
     */
    public static postV4Themes(
        requestBody: ThemeRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ThemeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/themes',
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
     * Get Theme
     * ### Description
     * Gets the details of a theme
     *
     * ### Details
     * This API can be used to get information about a single theme by ID. To use this API, pass in the `id` that was returned from your Create Theme API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param themeId
     * @returns ThemeResponse Successful Response
     * @throws ApiError
     */
    public static getV4ThemesThemeId(
        themeId: string,
    ): CancelablePromise<ThemeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/themes/{theme_id}',
            path: {
                'theme_id': themeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
