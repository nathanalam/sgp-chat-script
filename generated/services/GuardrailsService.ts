/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGuardrailsWithPoliciesRequest } from '../models/CreateGuardrailsWithPoliciesRequest';
import type { ExecuteGuardrailRequest } from '../models/ExecuteGuardrailRequest';
import type { ExecuteGuardrailResponse } from '../models/ExecuteGuardrailResponse';
import type { GuardrailResponse } from '../models/GuardrailResponse';
import type { GuardrailWithPolicies } from '../models/GuardrailWithPolicies';
import type { PatchGuardrailRequest } from '../models/PatchGuardrailRequest';
import type { SafetyCategory } from '../models/SafetyCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GuardrailsService {
    /**
     * List Guardrails
     * @param xSelectedAccountId
     * @returns GuardrailWithPolicies Successful Response
     * @throws ApiError
     */
    public static getV4Guardrails(
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<GuardrailWithPolicies>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/guardrails',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Guardrail
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4Guardrails(
        requestBody: CreateGuardrailsWithPoliciesRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<(GuardrailResponse | null)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/guardrails',
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
     * Get Guardrail
     * @param id
     * @param xSelectedAccountId
     * @returns GuardrailWithPolicies Successful Response
     * @throws ApiError
     */
    public static getV4GuardrailsId(
        id: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<GuardrailWithPolicies> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/guardrails/{id}',
            path: {
                'id': id,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Guardrail
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns GuardrailResponse Successful Response
     * @throws ApiError
     */
    public static patchV4GuardrailsId(
        id: string,
        requestBody: PatchGuardrailRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<GuardrailResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/guardrails/{id}',
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
     * List Attack Categories With Descriptions
     * @returns SafetyCategory Successful Response
     * @throws ApiError
     */
    public static getV4GuardrailsPoliciesCategories(): CancelablePromise<Array<SafetyCategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/guardrails/policies/categories',
        });
    }
    /**
     * Execute Guardrail
     * @param id
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ExecuteGuardrailResponse Successful Response
     * @throws ApiError
     */
    public static postV4GuardrailsIdExecute(
        id: string,
        requestBody: ExecuteGuardrailRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ExecuteGuardrailResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/guardrails/{id}/execute',
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
