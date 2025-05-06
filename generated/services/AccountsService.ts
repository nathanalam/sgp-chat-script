/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAccountRequest } from '../models/CreateAccountRequest';
import type { CreateAccountResponse } from '../models/CreateAccountResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountsService {
    /**
     * Create account
     * Create a new account that with yourself as the admin.
     * @param requestBody
     * @returns CreateAccountResponse Successful Response
     * @throws ApiError
     */
    public static postV4Accounts(
        requestBody: CreateAccountRequest,
    ): CancelablePromise<CreateAccountResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
