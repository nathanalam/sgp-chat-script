/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationVariant } from '../models/ApplicationVariant';
import type { ApplicationVariantCreateRequest } from '../models/ApplicationVariantCreateRequest';
import type { ApplicationVariantDelete } from '../models/ApplicationVariantDelete';
import type { ApplicationVariantList } from '../models/ApplicationVariantList';
import type { ApplicationVariantProcessingRequest } from '../models/ApplicationVariantProcessingRequest';
import type { ApplicationVariantUpdateRequest } from '../models/ApplicationVariantUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationVariantsService {
    /**
     * Create Application Variant
     * @param requestBody
     * @returns ApplicationVariant Successful Response
     * @throws ApiError
     */
    public static postV5V5ApplicationVariants(
        requestBody: ApplicationVariantCreateRequest,
    ): CancelablePromise<ApplicationVariant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/application-variants',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Variants
     * @param applicationId
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns ApplicationVariantList Successful Response
     * @throws ApiError
     */
    public static getV5V5ApplicationVariants(
        applicationId?: (string | null),
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<ApplicationVariantList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/application-variants',
            query: {
                'application_id': applicationId,
                'starting_after': startingAfter,
                'ending_before': endingBefore,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Variant
     * @param applicationVariantId
     * @returns ApplicationVariant Successful Response
     * @throws ApiError
     */
    public static getV5V5ApplicationVariantsApplicationVariantId(
        applicationVariantId: string,
    ): CancelablePromise<ApplicationVariant> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/application-variants/{application_variant_id}',
            path: {
                'application_variant_id': applicationVariantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Application Variant
     * @param applicationVariantId
     * @param requestBody
     * @returns ApplicationVariant Successful Response
     * @throws ApiError
     */
    public static patchV5V5ApplicationVariantsApplicationVariantId(
        applicationVariantId: string,
        requestBody: ApplicationVariantUpdateRequest,
    ): CancelablePromise<ApplicationVariant> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/application-variants/{application_variant_id}',
            path: {
                'application_variant_id': applicationVariantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Application Variant
     * @param applicationVariantId
     * @returns ApplicationVariantDelete Successful Response
     * @throws ApiError
     */
    public static deleteV5V5ApplicationVariantsApplicationVariantId(
        applicationVariantId: string,
    ): CancelablePromise<ApplicationVariantDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/application-variants/{application_variant_id}',
            path: {
                'application_variant_id': applicationVariantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Publish Draft Application Variant
     * @param applicationVariantId
     * @returns ApplicationVariant Successful Response
     * @throws ApiError
     */
    public static postV5V5ApplicationVariantsApplicationVariantIdPublish(
        applicationVariantId: string,
    ): CancelablePromise<ApplicationVariant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/application-variants/{application_variant_id}/publish',
            path: {
                'application_variant_id': applicationVariantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Execute Application Variant
     * @param applicationVariantId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV5V5ApplicationVariantsApplicationVariantIdProcess(
        applicationVariantId: string,
        requestBody: ApplicationVariantProcessingRequest,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/application-variants/{application_variant_id}/process',
            path: {
                'application_variant_id': applicationVariantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
