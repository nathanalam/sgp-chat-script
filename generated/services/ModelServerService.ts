/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeBackendRequest } from '../models/ChangeBackendRequest';
import type { ChangeBackendResponse } from '../models/ChangeBackendResponse';
import type { CreateModelServerRequest } from '../models/CreateModelServerRequest';
import type { GenericModelRequest } from '../models/GenericModelRequest';
import type { GenericModelResponse } from '../models/GenericModelResponse';
import type { GetModelServerDeploymentResponse } from '../models/GetModelServerDeploymentResponse';
import type { ModelServerInfo } from '../models/ModelServerInfo';
import type { RollbackResponse } from '../models/RollbackResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModelServerService {
    /**
     * Fixed Server interface for Model execution
     * @param modelServerId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns GenericModelResponse Successful Response
     * @throws ApiError
     */
    public static postV4V4ServingModelServerIdExecute(
        modelServerId: string,
        requestBody: GenericModelRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<GenericModelResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/serving/{model_server_id}/execute',
            path: {
                'model_server_id': modelServerId,
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
     * Fixed Server interface for Model execution by named alias
     * @param alias
     * @param requestBody
     * @returns GenericModelResponse Successful Response
     * @throws ApiError
     */
    public static postV4V4ServingAAliasExecute(
        alias: string,
        requestBody: GenericModelRequest,
    ): CancelablePromise<GenericModelResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/serving/a/{alias}/execute',
            path: {
                'alias': alias,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create a new Model Server
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ModelServerInfo Successful Response
     * @throws ApiError
     */
    public static postV4V4Serving(
        requestBody: CreateModelServerRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ModelServerInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/serving',
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
     * Get current deployment of the Model Server
     * @param modelServerId
     * @param xSelectedAccountId
     * @returns GetModelServerDeploymentResponse Successful Response
     * @throws ApiError
     */
    public static getV4V4ServingModelServerIdDeployment(
        modelServerId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<GetModelServerDeploymentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/serving/{model_server_id}/deployment',
            path: {
                'model_server_id': modelServerId,
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
     * Change backend of the Model Server
     * @param modelServerId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ChangeBackendResponse Successful Response
     * @throws ApiError
     */
    public static putV4V4ServingModelServerIdBackend(
        modelServerId: string,
        requestBody: ChangeBackendRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ChangeBackendResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v4/serving/{model_server_id}/backend',
            path: {
                'model_server_id': modelServerId,
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
     * Rollback backend of the Model Server
     * @param modelServerId
     * @param xSelectedAccountId
     * @returns RollbackResponse Successful Response
     * @throws ApiError
     */
    public static postV4V4ServingModelServerIdRollback(
        modelServerId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<RollbackResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/serving/{model_server_id}/rollback',
            path: {
                'model_server_id': modelServerId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
