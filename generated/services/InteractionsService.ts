/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InteractionEntity } from '../models/InteractionEntity';
import type { InteractionRequest } from '../models/InteractionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InteractionsService {
    /**
     * Create Application Interaction
     * @param requestBody
     * @param xSelectedAccountId
     * @returns InteractionEntity Successful Response
     * @throws ApiError
     */
    public static postV4(
        requestBody: InteractionRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<InteractionEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/interactions/',
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
