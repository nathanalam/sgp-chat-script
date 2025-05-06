/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteResponse } from '../models/DeleteResponse';
import type { ModelTemplateRequest } from '../models/ModelTemplateRequest';
import type { ModelTemplateResponse } from '../models/ModelTemplateResponse';
import type { PaginatedModelTemplateResponse } from '../models/PaginatedModelTemplateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModelTemplatesV3BetaService {
    /**
     * List Model Templates
     * ### Description
     * Lists all model templates accessible to the user.
     *
     * ### Details
     * This API can be used to list model templates. If a user has access to multiple accounts, all model templates from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns ModelTemplateResponse Successful Response
     * @throws ApiError
     */
    public static getV3ModelTemplates(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ModelTemplateResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/model-templates',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Model Template
     * ### Description
     * Creates a model template.
     *
     * ### Details
     *
     * Model templates serve 2 purposes. First, they provide common scaffolding that is static across multiple models. Second, they expose several variables that can be injected at model creation time to customize the model.
     *
     * For example, a model template can define a docker image that contains code to run a HuggingFace or SentenceTransformers model. This docker image code also accepts environment variables that can be set to swap out the model weights or model name.
     *
     * Two of the most important fields required to create a model template are the `model_creation_parameters_schema` and `model_request_parameters_schema` fields.
     *
     * The `model_creation_parameters_schema` field defines the schema for parameters that can be injected at model creation time. For example, if the schema contains a `model_weights_uri` field, which expects a string, when a model is created from this template, the user can provide a URI to a model weights file that can be used to swap out the model weights used by the model.
     *
     * The `model_request_parameters_schema` field defines the schema for parameters that can be injected by an end user at model execution time. For example, if the schema contains a `model_request_parameters` field, which expects a string, when a model is executed, the user can provide a string that will be passed to the model for inference.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ModelTemplateResponse Successful Response
     * @throws ApiError
     */
    public static postV3ModelTemplates(
        requestBody: ModelTemplateRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ModelTemplateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/model-templates',
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
     * Get Model Template
     * ### Description
     * Gets the details of a model template
     *
     * ### Details
     * This API can be used to get information about a single model template by ID. To use this API, pass in the `id` that was returned from your Create Model Template API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param modelTemplateId
     * @returns ModelTemplateResponse Successful Response
     * @throws ApiError
     */
    public static getV3ModelTemplatesModelTemplateId(
        modelTemplateId: string,
    ): CancelablePromise<ModelTemplateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/model-templates/{model_template_id}',
            path: {
                'model_template_id': modelTemplateId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Model Template
     * ### Description
     * Deletes a model template
     *
     * ### Details
     * This API can be used to delete a model template by ID. To use this API, pass in the `id` that was returned from your Create Model Template API call as a path parameter.
     * @param modelTemplateId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3ModelTemplatesModelTemplateId(
        modelTemplateId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/model-templates/{model_template_id}',
            path: {
                'model_template_id': modelTemplateId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Model Templates
     * ### Description
     * Lists all model templates accessible to the user.
     *
     * ### Details
     * This API can be used to list model templates. If a user has access to multiple accounts, all model templates from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedModelTemplateResponse Successful Response
     * @throws ApiError
     */
    public static getV4ModelTemplates(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedModelTemplateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/model-templates',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Model Template
     * ### Description
     * Creates a model template.
     *
     * ### Details
     *
     * Model templates serve 2 purposes. First, they provide common scaffolding that is static across multiple models. Second, they expose several variables that can be injected at model creation time to customize the model.
     *
     * For example, a model template can define a docker image that contains code to run a HuggingFace or SentenceTransformers model. This docker image code also accepts environment variables that can be set to swap out the model weights or model name.
     *
     * Two of the most important fields required to create a model template are the `model_creation_parameters_schema` and `model_request_parameters_schema` fields.
     *
     * The `model_creation_parameters_schema` field defines the schema for parameters that can be injected at model creation time. For example, if the schema contains a `model_weights_uri` field, which expects a string, when a model is created from this template, the user can provide a URI to a model weights file that can be used to swap out the model weights used by the model.
     *
     * The `model_request_parameters_schema` field defines the schema for parameters that can be injected by an end user at model execution time. For example, if the schema contains a `model_request_parameters` field, which expects a string, when a model is executed, the user can provide a string that will be passed to the model for inference.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ModelTemplateResponse Successful Response
     * @throws ApiError
     */
    public static postV4ModelTemplates(
        requestBody: ModelTemplateRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ModelTemplateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/model-templates',
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
     * Get Model Template
     * ### Description
     * Gets the details of a model template
     *
     * ### Details
     * This API can be used to get information about a single model template by ID. To use this API, pass in the `id` that was returned from your Create Model Template API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param modelTemplateId
     * @returns ModelTemplateResponse Successful Response
     * @throws ApiError
     */
    public static getV4ModelTemplatesModelTemplateId(
        modelTemplateId: string,
    ): CancelablePromise<ModelTemplateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/model-templates/{model_template_id}',
            path: {
                'model_template_id': modelTemplateId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Model Template
     * ### Description
     * Deletes a model template
     *
     * ### Details
     * This API can be used to delete a model template by ID. To use this API, pass in the `id` that was returned from your Create Model Template API call as a path parameter.
     * @param modelTemplateId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4ModelTemplatesModelTemplateId(
        modelTemplateId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/model-templates/{model_template_id}',
            path: {
                'model_template_id': modelTemplateId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
