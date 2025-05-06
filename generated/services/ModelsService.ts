/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompletionRequestV2 } from '../models/CompletionRequestV2';
import type { CompletionResponse } from '../models/CompletionResponse';
import type { DeleteModelResponseV2 } from '../models/DeleteModelResponseV2';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { egp_api_backend__server__utils__model_schemas__completions__ChatCompletionRequest } from '../models/egp_api_backend__server__utils__model_schemas__completions__ChatCompletionRequest';
import type { egp_api_backend__server__utils__model_schemas__completions__CompletionRequest } from '../models/egp_api_backend__server__utils__model_schemas__completions__CompletionRequest';
import type { EmbeddingRequest } from '../models/EmbeddingRequest';
import type { EmbeddingResponse } from '../models/EmbeddingResponse';
import type { GenericModelRequest } from '../models/GenericModelRequest';
import type { InferenceModel } from '../models/InferenceModel';
import type { InferenceModelDelete } from '../models/InferenceModelDelete';
import type { InferenceModelList } from '../models/InferenceModelList';
import type { InferenceModelVendor } from '../models/InferenceModelVendor';
import type { ListModelsResponseV2 } from '../models/ListModelsResponseV2';
import type { ModelCreateRequest } from '../models/ModelCreateRequest';
import type { ModelDeploymentRequest } from '../models/ModelDeploymentRequest';
import type { ModelDeploymentResponse } from '../models/ModelDeploymentResponse';
import type { ModelGroupRequest } from '../models/ModelGroupRequest';
import type { ModelGroupResponse } from '../models/ModelGroupResponse';
import type { ModelInstanceRequest } from '../models/ModelInstanceRequest';
import type { ModelInstanceResponse } from '../models/ModelInstanceResponse';
import type { ModelInstanceResponseWithViews } from '../models/ModelInstanceResponseWithViews';
import type { ModelInstanceViewsOptions } from '../models/ModelInstanceViewsOptions';
import type { ModelItemV2 } from '../models/ModelItemV2';
import type { ModelUpdateRequest } from '../models/ModelUpdateRequest';
import type { ModelUsageResponse } from '../models/ModelUsageResponse';
import type { PaginatedModelDeploymentResponse } from '../models/PaginatedModelDeploymentResponse';
import type { PaginatedModelGroupResponse } from '../models/PaginatedModelGroupResponse';
import type { PaginatedModelInstanceResponseWithViews } from '../models/PaginatedModelInstanceResponseWithViews';
import type { PartialModelDeploymentRequest } from '../models/PartialModelDeploymentRequest';
import type { PartialModelGroupRequest } from '../models/PartialModelGroupRequest';
import type { PartialModelInstanceRequest } from '../models/PartialModelInstanceRequest';
import type { RerankingRequest } from '../models/RerankingRequest';
import type { RerankingResponse } from '../models/RerankingResponse';
import type { SortByEnumForModelDeployment } from '../models/SortByEnumForModelDeployment';
import type { SortByEnumForModelInstance } from '../models/SortByEnumForModelInstance';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModelsService {
    /**
     * List Models
     * @returns ListModelsResponseV2 Successful Response
     * @throws ApiError
     */
    public static getV2Models(): CancelablePromise<ListModelsResponseV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/models',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get a Model with a specified id
     * @param modelId
     * @returns ModelItemV2 Successful Response
     * @throws ApiError
     */
    public static getV2ModelsModelId(
        modelId: string,
    ): CancelablePromise<ModelItemV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/models/{model_id}',
            path: {
                'model_id': modelId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete a Model with a specified ID
     * @param modelId
     * @returns DeleteModelResponseV2 Successful Response
     * @throws ApiError
     */
    public static deleteV2ModelsModelId(
        modelId: string,
    ): CancelablePromise<DeleteModelResponseV2> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/models/{model_id}',
            path: {
                'model_id': modelId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Execute Model Deployment
     * @param modelDeploymentId
     * @param modelInstanceId
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV3V3ModelsModelInstanceIdDeploymentsModelDeploymentIdExecute(
        modelDeploymentId: string,
        modelInstanceId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/models/{model_instance_id}/deployments/{model_deployment_id}/execute',
            path: {
                'model_deployment_id': modelDeploymentId,
                'model_instance_id': modelInstanceId,
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
     * Generate text embedding
     * ### Description
     * Computes the text embeddings for text fragments using the model with the given model_deployment_id.
     *
     * ### Details
     * Users can use this API to execute EMBEDDING type EGP model they have access to. To use this API, pass in         the `id` of a model returned by the V3 Create Model API. An example text embedding request
     *
     * ```json
     * {
         * "texts": ["Please compute my embedding vector", "Another text fragment"]
         * }
         * ```
         * @param modelDeploymentId
         * @param requestBody
         * @returns EmbeddingResponse Successful Response
         * @throws ApiError
         */
        public static postV3V3ModelsModelDeploymentIdEmbeddings(
            modelDeploymentId: string,
            requestBody: EmbeddingRequest,
        ): CancelablePromise<EmbeddingResponse> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/v3/models/{model_deployment_id}/embeddings',
                path: {
                    'model_deployment_id': modelDeploymentId,
                },
                body: requestBody,
                mediaType: 'application/json',
                errors: {
                    422: `Validation Error`,
                },
            });
        }
        /**
         * Generate reranking
         * ### Description
         * TODO: Documentation
         * @param modelDeploymentId
         * @param requestBody
         * @returns RerankingResponse Successful Response
         * @throws ApiError
         */
        public static postV3V3ModelsModelDeploymentIdRerankings(
            modelDeploymentId: string,
            requestBody: RerankingRequest,
        ): CancelablePromise<RerankingResponse> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/v3/models/{model_deployment_id}/rerankings',
                path: {
                    'model_deployment_id': modelDeploymentId,
                },
                body: requestBody,
                mediaType: 'application/json',
                errors: {
                    422: `Validation Error`,
                },
            });
        }
        /**
         * Generate completion
         * ### Description
         *
         * Interact with the LLM model using the specified model_deployment_id. You can include a list of prompts, but be aware that only the first prompt will be used.
         * ```json
         * {
             * "prompts": ["What is the capital of France?"]
             * }
             * ```
             * @param modelDeploymentId
             * @param requestBody
             * @param xSelectedAccountId
             * @returns CompletionResponse Successful Response
             * @throws ApiError
             */
            public static postV3ModelsModelDeploymentIdCompletions(
                modelDeploymentId: string,
                requestBody: egp_api_backend__server__utils__model_schemas__completions__CompletionRequest,
                xSelectedAccountId?: (string | null),
            ): CancelablePromise<CompletionResponse> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v3/models/{model_deployment_id}/completions',
                    path: {
                        'model_deployment_id': modelDeploymentId,
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
             * Deploy Model
             * ### Description
             *
             * Model Deployments are unique endpoints created for custom models in the Scale GenAI Platform. They enable users to interact with and utilize specific instances of models through the API/SDK.
             * Each deployment is associated with a model instance, containing the necessary model template and model-metadata. Model templates describe the creation parameters that are configured on the deployment.
             * The model deployments provide a means to call upon models for inference, logging calls, and monitoring usage.
             *
             * Built-in models also have deployments for creating a consistent interface for all models. But they don't represent a real deployment, they are just a way to interact with the built-in models. These deployments are created automatically when the model is created and they are immutable.
             *
             * ### Endpoint details
             *
             * This endpoint is used to deploy a model instance. The request payload schema depends on the `model_request_parameters_schema` of the Model Template that the created model was created from.
             * @param modelInstanceId
             * @param requestBody
             * @returns ModelDeploymentResponse Successful Response
             * @throws ApiError
             */
            public static postV3V3ModelsModelInstanceIdDeployments(
                modelInstanceId: string,
                requestBody: ModelDeploymentRequest,
            ): CancelablePromise<ModelDeploymentResponse> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v3/models/{model_instance_id}/deployments',
                    path: {
                        'model_instance_id': modelInstanceId,
                    },
                    body: requestBody,
                    mediaType: 'application/json',
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * List Model Deployments of a Model
             * TODO: Document
             * @param modelInstanceId
             * @param accountId Optional filter by account id
             * @returns ModelDeploymentResponse Successful Response
             * @throws ApiError
             */
            public static getV3ModelsModelInstanceIdDeployments(
                modelInstanceId: string,
                accountId?: (string | null),
            ): CancelablePromise<Array<ModelDeploymentResponse>> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/models/{model_instance_id}/deployments',
                    path: {
                        'model_instance_id': modelInstanceId,
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
             * Get Model usage by model name
             * @param modelName
             * @param startDate
             * @param endDate
             * @param chunks
             * @returns ModelUsageResponse Successful Response
             * @throws ApiError
             */
            public static getV3V3ModelsModelNameUsageStatistics(
                modelName: string,
                startDate: (string | null),
                endDate: (string | null),
                chunks: (number | null),
            ): CancelablePromise<ModelUsageResponse> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/models/{model_name}/usage-statistics',
                    path: {
                        'model_name': modelName,
                    },
                    query: {
                        'start_date': startDate,
                        'end_date': endDate,
                        'chunks': chunks,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * List All Model Deployments
             * TODO: Document
             * @param accountId Optional filter by account id
             * @returns ModelDeploymentResponse Successful Response
             * @throws ApiError
             */
            public static getV3ModelDeployments(
                accountId?: (string | null),
            ): CancelablePromise<Array<ModelDeploymentResponse>> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/model-deployments',
                    query: {
                        'account_id': accountId,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Get Model usage for one deployment
             * @param modelDeploymentId
             * @param startDate
             * @param endDate
             * @param chunks
             * @returns ModelUsageResponse Successful Response
             * @throws ApiError
             */
            public static getV3V3ModelDeploymentsModelDeploymentIdUsageStatistics(
                modelDeploymentId: string,
                startDate: (string | null),
                endDate: (string | null),
                chunks: (number | null),
            ): CancelablePromise<ModelUsageResponse> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/model-deployments/{model_deployment_id}/usage-statistics',
                    path: {
                        'model_deployment_id': modelDeploymentId,
                    },
                    query: {
                        'start_date': startDate,
                        'end_date': endDate,
                        'chunks': chunks,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Add model to group
             * TODO: Add model instance to a model group.
             * @param modelGroupId
             * @param modelInstanceId
             * @returns ModelInstanceResponse Successful Response
             * @throws ApiError
             */
            public static postV3V3ModelGroupsModelGroupIdModelsModelInstanceId(
                modelGroupId: string,
                modelInstanceId: string,
            ): CancelablePromise<ModelInstanceResponse> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v3/model-groups/{model_group_id}/models/{model_instance_id}',
                    path: {
                        'model_group_id': modelGroupId,
                        'model_instance_id': modelInstanceId,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Get Model usage for a group
             * @param modelGroupId
             * @param startDate
             * @param endDate
             * @param chunks
             * @returns ModelUsageResponse Successful Response
             * @throws ApiError
             */
            public static getV3V3ModelGroupsModelGroupIdUsageStatistics(
                modelGroupId: string,
                startDate: (string | null),
                endDate: (string | null),
                chunks: (number | null),
            ): CancelablePromise<ModelUsageResponse> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/model-groups/{model_group_id}/usage-statistics',
                    path: {
                        'model_group_id': modelGroupId,
                    },
                    query: {
                        'start_date': startDate,
                        'end_date': endDate,
                        'chunks': chunks,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * List Models
             * ### Description
             * Lists all models accessible to the user.
             *
             * ### Details
             * This API can be used to list models. If a user has access to multiple accounts, all models from all accounts the user is associated with will be returned.
             * @param view
             * @param accountId
             * @param modelGroupId
             * @param modelType
             * @param xSelectedAccountId
             * @returns ModelInstanceResponseWithViews Successful Response
             * @throws ApiError
             */
            public static getV3Models(
                view?: (Array<ModelInstanceViewsOptions> | null),
                accountId?: (string | null),
                modelGroupId?: (number | string | null),
                modelType?: (number | string | null),
                xSelectedAccountId?: (string | null),
            ): CancelablePromise<Array<ModelInstanceResponseWithViews>> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/models',
                    headers: {
                        'x-selected-account-id': xSelectedAccountId,
                    },
                    query: {
                        'view': view,
                        'account_id': accountId,
                        'model_group_id': modelGroupId,
                        'model_type': modelType,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Create Model
             * ### Description
             *
             * Creates and hosts a model based on a model template.
             *
             * Base embedding models, chunk ranking functions, and LLMs are often not sufficient for customer use cases. We have shown in various blogs that fine-tuning these models on customer data can lead to significant improvements in performance.
             *
             * 1. [We Fine-Tuned GPT-4 to Beat the Industry Standard for Text2SQL]( https://scale.com/blog/text2sql-fine-tuning)
             * 2. [OpenAI Names Scale as Preferred Partner to Fine-Tune GPT-3.5]( https://scale.com/blog/open-ai-scale-partnership-gpt-3-5-fine-tuning)
             * 3. [How to Fine-Tune GPT-3.5 Turbo With OpenAI API]( https://scale.com/blog/fine-tune-gpt-3.5)
             *
             *
             * ### Details
             *
             * Before creating a model, you must first create a model template. A model template serves 2 purposes. First, it provides  common scaffolding that is static across multiple models. Second, it exposes several variables that can be injected at model creation time to customize the model.
             *
             * For example, a model template can define a docker image that contains code to run a HuggingFace or SentenceTransformers model. This docker image code also accepts environment variables that can be set to swap out the model weights or model name. Refer to the Create Model Template API for more details.
             *
             * To create a new model, users must refer to an existing model template and provide the necessary parameters the the model template requires in its `model_creation_parameters_schema` field. The combination of the model template and the model creation parameters will be used to create and deploy a new model.
             *
             * Once a model has been created, it can be executed by calling the Execute Model API.
             *
             *
             *
             * ### Coming Soon
             * Some of our EGP APIs depend on models, for example Knowledge Base APIs depend on embedding models, Chunk Ranking APIs depend on ranking models, and Completion APIs depend on LLMs.
             *
             * In the near future, if a model is created from a model template that is compatible with one of these APIs (based on the model template's `model_type field`), the model will automatically be registered with the API. This will allow users to immediately start using the model with those API without any additional setup.
             * @param requestBody
             * @param xSelectedAccountId
             * @returns ModelInstanceResponse Successful Response
             * @throws ApiError
             */
            public static postV3Models(
                requestBody: ModelInstanceRequest,
                xSelectedAccountId?: (string | null),
            ): CancelablePromise<ModelInstanceResponse> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v3/models',
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
             * Get Model
             * ### Description
             * Gets the details of a model
             *
             * ### Details
             * This API can be used to get information about a single model by ID. To use this API, pass in the `id` that was returned from your Create Model API call as a path parameter.
             *
             * Review the response schema to see the fields that will be returned.
             * @param modelId
             * @param view
             * @returns ModelInstanceResponseWithViews Successful Response
             * @throws ApiError
             */
            public static getV3ModelsModelId(
                modelId: string,
                view?: (Array<ModelInstanceViewsOptions> | null),
            ): CancelablePromise<ModelInstanceResponseWithViews> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/models/{model_id}',
                    path: {
                        'model_id': modelId,
                    },
                    query: {
                        'view': view,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Update Model
             * ### Description
             * Updates a model
             *
             * ### Details
             * This API can be used to update the model that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Model API call as a path parameter.
             *
             * Review the request schema to see the fields that can be updated.
             * @param modelId
             * @param requestBody
             * @returns ModelInstanceResponse Successful Response
             * @throws ApiError
             */
            public static patchV3ModelsModelId(
                modelId: string,
                requestBody: PartialModelInstanceRequest,
            ): CancelablePromise<ModelInstanceResponse> {
                return __request(OpenAPI, {
                    method: 'PATCH',
                    url: '/v3/models/{model_id}',
                    path: {
                        'model_id': modelId,
                    },
                    body: requestBody,
                    mediaType: 'application/json',
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Delete Model
             * ### Description
             * Deletes a model
             *
             * ### Details
             * This API can be used to delete a model by ID. To use this API, pass in the `id` that was returned from your Create Model API call as a path parameter.
             * @param modelId
             * @returns DeleteResponse Successful Response
             * @throws ApiError
             */
            public static deleteV3ModelsModelId(
                modelId: string,
            ): CancelablePromise<DeleteResponse> {
                return __request(OpenAPI, {
                    method: 'DELETE',
                    url: '/v3/models/{model_id}',
                    path: {
                        'model_id': modelId,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * List Model Groups
             * ### Description
             * Lists all model groups accessible to the user.
             *
             * ### Details
             * This API can be used to list model groups. If a user has access to multiple accounts, all model groups from all accounts the user is associated with will be returned.
             * @param accountId
             * @param xSelectedAccountId
             * @returns ModelGroupResponse Successful Response
             * @throws ApiError
             */
            public static getV3ModelGroups(
                accountId?: (string | null),
                xSelectedAccountId?: (string | null),
            ): CancelablePromise<Array<ModelGroupResponse>> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/model-groups',
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
             * Create Model Group
             * ### Description
             *
             * Model groups are grouping models together. You can add models with the same base_model_id.
             * @param requestBody
             * @param xSelectedAccountId
             * @returns ModelGroupResponse Successful Response
             * @throws ApiError
             */
            public static postV3ModelGroups(
                requestBody: ModelGroupRequest,
                xSelectedAccountId?: (string | null),
            ): CancelablePromise<ModelGroupResponse> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v3/model-groups',
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
             * Get Model Group
             * ### Description
             * Gets the details of a model group
             *
             * ### Details
             * This API can be used to get information about a single model group by ID. To use this API, pass in the `id` that was returned from your Create Model Group API call as a path parameter.
             *
             * Review the response schema to see the fields that will be returned.
             * @param modelGroupId
             * @returns ModelGroupResponse Successful Response
             * @throws ApiError
             */
            public static getV3ModelGroupsModelGroupId(
                modelGroupId: string,
            ): CancelablePromise<ModelGroupResponse> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/model-groups/{model_group_id}',
                    path: {
                        'model_group_id': modelGroupId,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Update Model Group
             * ### Description
             * Updates a model group
             *
             * ### Details
             * This API can be used to update the model group that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Model Group API call as a path parameter.
             *
             * Review the request schema to see the fields that can be updated.
             * @param modelGroupId
             * @param requestBody
             * @returns ModelGroupResponse Successful Response
             * @throws ApiError
             */
            public static patchV3ModelGroupsModelGroupId(
                modelGroupId: string,
                requestBody: PartialModelGroupRequest,
            ): CancelablePromise<ModelGroupResponse> {
                return __request(OpenAPI, {
                    method: 'PATCH',
                    url: '/v3/model-groups/{model_group_id}',
                    path: {
                        'model_group_id': modelGroupId,
                    },
                    body: requestBody,
                    mediaType: 'application/json',
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Delete Model Group
             * ### Description
             * Deletes a model group
             *
             * ### Details
             * This API can be used to delete a model group by ID. To use this API, pass in the `id` that was returned from your Create Model Group API call as a path parameter.
             * @param modelGroupId
             * @returns DeleteResponse Successful Response
             * @throws ApiError
             */
            public static deleteV3ModelGroupsModelGroupId(
                modelGroupId: string,
            ): CancelablePromise<DeleteResponse> {
                return __request(OpenAPI, {
                    method: 'DELETE',
                    url: '/v3/model-groups/{model_group_id}',
                    path: {
                        'model_group_id': modelGroupId,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Get Deployment
             * ### Description
             * Gets the details of a deployment
             *
             * ### Details
             * This API can be used to get information about a single deployment by ID. To use this API, pass in the `id` that was returned from your Create Deployment API call as a path parameter.
             *
             * Review the response schema to see the fields that will be returned.
             * @param modelInstanceId
             * @param deploymentId
             * @returns ModelDeploymentResponse Successful Response
             * @throws ApiError
             */
            public static getV3ModelsModelInstanceIdDeploymentsDeploymentId(
                modelInstanceId: string,
                deploymentId: string,
            ): CancelablePromise<ModelDeploymentResponse> {
                return __request(OpenAPI, {
                    method: 'GET',
                    url: '/v3/models/{model_instance_id}/deployments/{deployment_id}',
                    path: {
                        'model_instance_id': modelInstanceId,
                        'deployment_id': deploymentId,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Update Deployment
             * ### Description
             * Updates a deployment
             *
             * ### Details
             * This API can be used to update the deployment that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Deployment API call as a path parameter.
             *
             * Review the request schema to see the fields that can be updated.
             * @param modelInstanceId
             * @param deploymentId
             * @param requestBody
             * @returns ModelDeploymentResponse Successful Response
             * @throws ApiError
             */
            public static patchV3ModelsModelInstanceIdDeploymentsDeploymentId(
                modelInstanceId: string,
                deploymentId: string,
                requestBody: PartialModelDeploymentRequest,
            ): CancelablePromise<ModelDeploymentResponse> {
                return __request(OpenAPI, {
                    method: 'PATCH',
                    url: '/v3/models/{model_instance_id}/deployments/{deployment_id}',
                    path: {
                        'model_instance_id': modelInstanceId,
                        'deployment_id': deploymentId,
                    },
                    body: requestBody,
                    mediaType: 'application/json',
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Delete Deployment
             * ### Description
             * Deletes a deployment
             *
             * ### Details
             * This API can be used to delete a deployment by ID. To use this API, pass in the `id` that was returned from your Create Deployment API call as a path parameter.
             * @param modelInstanceId
             * @param deploymentId
             * @returns DeleteResponse Successful Response
             * @throws ApiError
             */
            public static deleteV3ModelsModelInstanceIdDeploymentsDeploymentId(
                modelInstanceId: string,
                deploymentId: string,
            ): CancelablePromise<DeleteResponse> {
                return __request(OpenAPI, {
                    method: 'DELETE',
                    url: '/v3/models/{model_instance_id}/deployments/{deployment_id}',
                    path: {
                        'model_instance_id': modelInstanceId,
                        'deployment_id': deploymentId,
                    },
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Execute Model Deployment
             * @param modelInstanceId
             * @param modelDeploymentId
             * @param requestBody
             * @param xSelectedAccountId
             * @returns any Successful Response
             * @throws ApiError
             */
            public static postV4V4ModelsModelInstanceIdDeploymentsModelDeploymentIdExecute(
                modelInstanceId: string,
                modelDeploymentId: string,
                requestBody: GenericModelRequest,
                xSelectedAccountId?: (string | null),
            ): CancelablePromise<any> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/v4/models/{model_instance_id}/deployments/{model_deployment_id}/execute',
                    path: {
                        'model_instance_id': modelInstanceId,
                        'model_deployment_id': modelDeploymentId,
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
             * Generate text embedding
             * ### Description
             * Computes the text embeddings for text fragments using the model with the given model_deployment_id.
             *
             * ### Details
             * Users can use this API to execute EMBEDDING type EGP model they have access to. To use this API, pass in         the `id` of a model returned by the V3 Create Model API. An example text embedding request
             *
             * ```json
             * {
                 * "texts": ["Please compute my embedding vector", "Another text fragment"]
                 * }
                 * ```
                 * @param modelDeploymentId
                 * @param requestBody
                 * @returns EmbeddingResponse Successful Response
                 * @throws ApiError
                 */
                public static postV4V3ModelsModelDeploymentIdEmbeddings(
                    modelDeploymentId: string,
                    requestBody: EmbeddingRequest,
                ): CancelablePromise<EmbeddingResponse> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/v4/models/{model_deployment_id}/embeddings',
                        path: {
                            'model_deployment_id': modelDeploymentId,
                        },
                        body: requestBody,
                        mediaType: 'application/json',
                        errors: {
                            422: `Validation Error`,
                        },
                    });
                }
                /**
                 * Generate reranking
                 * ### Description
                 * TODO: Documentation
                 * @param modelDeploymentId
                 * @param requestBody
                 * @returns RerankingResponse Successful Response
                 * @throws ApiError
                 */
                public static postV4V3ModelsModelDeploymentIdRerankings(
                    modelDeploymentId: string,
                    requestBody: RerankingRequest,
                ): CancelablePromise<RerankingResponse> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/v4/models/{model_deployment_id}/rerankings',
                        path: {
                            'model_deployment_id': modelDeploymentId,
                        },
                        body: requestBody,
                        mediaType: 'application/json',
                        errors: {
                            422: `Validation Error`,
                        },
                    });
                }
                /**
                 * Generate completion
                 * ### Description
                 *
                 * Interact with the LLM model using the specified model_deployment_id. The LLM model will generate a text completion based on the provided prompt.
                 *
                 * ```json
                 * {
                     * "prompt": "What is the capital of France?"
                     * }
                     * ```
                     * @param modelDeploymentId
                     * @param requestBody
                     * @param xSelectedAccountId
                     * @returns CompletionResponse Successful Response
                     * @throws ApiError
                     */
                    public static postV4ModelsModelDeploymentIdCompletions(
                        modelDeploymentId: string,
                        requestBody: CompletionRequestV2,
                        xSelectedAccountId?: (string | null),
                    ): CancelablePromise<CompletionResponse> {
                        return __request(OpenAPI, {
                            method: 'POST',
                            url: '/v4/models/{model_deployment_id}/completions',
                            path: {
                                'model_deployment_id': modelDeploymentId,
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
                     * Generate chat completion
                     * ### Description
                     *
                     * Interact with the LLM model using the specified model_deployment_id. You can include a list of messages as the conversation history.         The conversation can feature multiple messages from the roles user, assistant, and system. If the chosen model does not support chat completion,         the API will revert to simple completion, disregarding the provided history. The endpoint manages context length exceedance optimistically:         it estimates the token count from the provided history and prompt, and if it exceeds the context or approaches 80% of it, the exact token count will be calculated, and the history will be trimmed to fit the context.
                     *
                     * ```json
                     * {
                         * "prompt": "Generate 5 more",
                         * "chat_history": [
                             * { "role": "system", "content": "You are a name generator. Do not generate anything else than names" },
                             * { "role": "user", "content": "Generate 5 names" },
                             * { "role": "assistant", "content": "1. Olivia Bennett\n2. Ethan Carter\n3. Sophia Ramirez\n4. Liam Thompson\n5. Ava Mitchell" }
                             * ],
                             * }
                             * ```
                             * @param modelDeploymentId
                             * @param requestBody
                             * @param xSelectedAccountId
                             * @returns CompletionResponse Successful Response
                             * @throws ApiError
                             */
                            public static postV4V4ModelsModelDeploymentIdChatCompletions(
                                modelDeploymentId: string,
                                requestBody: egp_api_backend__server__utils__model_schemas__completions__ChatCompletionRequest,
                                xSelectedAccountId?: (string | null),
                            ): CancelablePromise<CompletionResponse> {
                                return __request(OpenAPI, {
                                    method: 'POST',
                                    url: '/v4/models/{model_deployment_id}/chat-completions',
                                    path: {
                                        'model_deployment_id': modelDeploymentId,
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
                             * Deploy Model
                             * ### Description
                             *
                             * Model Deployments are unique endpoints created for custom models in the Scale GenAI Platform. They enable users to interact with and utilize specific instances of models through the API/SDK.
                             * Each deployment is associated with a model instance, containing the necessary model template and model-metadata. Model templates describe the creation parameters that are configured on the deployment.
                             * The model deployments provide a means to call upon models for inference, logging calls, and monitoring usage.
                             *
                             * Built-in models also have deployments for creating a consistent interface for all models. But they don't represent a real deployment, they are just a way to interact with the built-in models. These deployments are created automatically when the model is created and they are immutable.
                             *
                             * ### Endpoint details
                             *
                             * This endpoint is used to deploy a model instance. The request payload schema depends on the `model_request_parameters_schema` of the Model Template that the created model was created from.
                             * @param modelInstanceId
                             * @param requestBody
                             * @returns ModelDeploymentResponse Successful Response
                             * @throws ApiError
                             */
                            public static postV4V3ModelsModelInstanceIdDeployments(
                                modelInstanceId: string,
                                requestBody: ModelDeploymentRequest,
                            ): CancelablePromise<ModelDeploymentResponse> {
                                return __request(OpenAPI, {
                                    method: 'POST',
                                    url: '/v4/models/{model_instance_id}/deployments',
                                    path: {
                                        'model_instance_id': modelInstanceId,
                                    },
                                    body: requestBody,
                                    mediaType: 'application/json',
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * List Model Deployments of a Model
                             * TODO: Document
                             * @param modelInstanceId
                             * @param sortBy
                             * @param accountId Optional filter by account id
                             * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
                             * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
                             * @returns PaginatedModelDeploymentResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4ModelsModelInstanceIdDeployments(
                                modelInstanceId: string,
                                sortBy?: Array<SortByEnumForModelDeployment>,
                                accountId?: (string | null),
                                page: number = 1,
                                limit: number = 100,
                            ): CancelablePromise<PaginatedModelDeploymentResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/models/{model_instance_id}/deployments',
                                    path: {
                                        'model_instance_id': modelInstanceId,
                                    },
                                    query: {
                                        'sort_by': sortBy,
                                        'account_id': accountId,
                                        'page': page,
                                        'limit': limit,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Get Model usage by model name
                             * @param modelName
                             * @param startDate
                             * @param endDate
                             * @param chunks
                             * @returns ModelUsageResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4V3ModelsModelNameUsageStatistics(
                                modelName: string,
                                startDate: (string | null),
                                endDate: (string | null),
                                chunks: (number | null),
                            ): CancelablePromise<ModelUsageResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/models/{model_name}/usage-statistics',
                                    path: {
                                        'model_name': modelName,
                                    },
                                    query: {
                                        'start_date': startDate,
                                        'end_date': endDate,
                                        'chunks': chunks,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * List All Model Deployments
                             * TODO: Document
                             * @param sortBy
                             * @param accountId Optional filter by account id
                             * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
                             * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
                             * @returns PaginatedModelDeploymentResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4ModelDeployments(
                                sortBy?: Array<SortByEnumForModelDeployment>,
                                accountId?: (string | null),
                                page: number = 1,
                                limit: number = 100,
                            ): CancelablePromise<PaginatedModelDeploymentResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/model-deployments',
                                    query: {
                                        'sort_by': sortBy,
                                        'account_id': accountId,
                                        'page': page,
                                        'limit': limit,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Get Model usage for one deployment
                             * @param modelDeploymentId
                             * @param startDate
                             * @param endDate
                             * @param chunks
                             * @returns ModelUsageResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4V3ModelDeploymentsModelDeploymentIdUsageStatistics(
                                modelDeploymentId: string,
                                startDate: (string | null),
                                endDate: (string | null),
                                chunks: (number | null),
                            ): CancelablePromise<ModelUsageResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/model-deployments/{model_deployment_id}/usage-statistics',
                                    path: {
                                        'model_deployment_id': modelDeploymentId,
                                    },
                                    query: {
                                        'start_date': startDate,
                                        'end_date': endDate,
                                        'chunks': chunks,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Add model to group
                             * TODO: Add model instance to a model group.
                             * @param modelGroupId
                             * @param modelInstanceId
                             * @returns ModelInstanceResponse Successful Response
                             * @throws ApiError
                             */
                            public static postV4V3ModelGroupsModelGroupIdModelsModelInstanceId(
                                modelGroupId: string,
                                modelInstanceId: string,
                            ): CancelablePromise<ModelInstanceResponse> {
                                return __request(OpenAPI, {
                                    method: 'POST',
                                    url: '/v4/model-groups/{model_group_id}/models/{model_instance_id}',
                                    path: {
                                        'model_group_id': modelGroupId,
                                        'model_instance_id': modelInstanceId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Get Model usage for a group
                             * @param modelGroupId
                             * @param startDate
                             * @param endDate
                             * @param chunks
                             * @returns ModelUsageResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4V3ModelGroupsModelGroupIdUsageStatistics(
                                modelGroupId: string,
                                startDate: (string | null),
                                endDate: (string | null),
                                chunks: (number | null),
                            ): CancelablePromise<ModelUsageResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/model-groups/{model_group_id}/usage-statistics',
                                    path: {
                                        'model_group_id': modelGroupId,
                                    },
                                    query: {
                                        'start_date': startDate,
                                        'end_date': endDate,
                                        'chunks': chunks,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * List Models
                             * ### Description
                             * Lists all models accessible to the user.
                             *
                             * ### Details
                             * This API can be used to list models. If a user has access to multiple accounts, all models from all accounts the user is associated with will be returned.
                             * @param view
                             * @param sortBy
                             * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
                             * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
                             * @param accountId
                             * @param modelGroupId
                             * @param modelType
                             * @param xSelectedAccountId
                             * @returns PaginatedModelInstanceResponseWithViews Successful Response
                             * @throws ApiError
                             */
                            public static getV4Models(
                                view?: (Array<ModelInstanceViewsOptions> | null),
                                sortBy?: Array<SortByEnumForModelInstance>,
                                page: number = 1,
                                limit: number = 100,
                                accountId?: (string | null),
                                modelGroupId?: (number | string | null),
                                modelType?: (number | string | null),
                                xSelectedAccountId?: (string | null),
                            ): CancelablePromise<PaginatedModelInstanceResponseWithViews> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/models',
                                    headers: {
                                        'x-selected-account-id': xSelectedAccountId,
                                    },
                                    query: {
                                        'view': view,
                                        'sort_by': sortBy,
                                        'page': page,
                                        'limit': limit,
                                        'account_id': accountId,
                                        'model_group_id': modelGroupId,
                                        'model_type': modelType,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Create Model
                             * ### Description
                             *
                             * Creates and hosts a model based on a model template.
                             *
                             * Base embedding models, chunk ranking functions, and LLMs are often not sufficient for customer use cases. We have shown in various blogs that fine-tuning these models on customer data can lead to significant improvements in performance.
                             *
                             * 1. [We Fine-Tuned GPT-4 to Beat the Industry Standard for Text2SQL]( https://scale.com/blog/text2sql-fine-tuning)
                             * 2. [OpenAI Names Scale as Preferred Partner to Fine-Tune GPT-3.5]( https://scale.com/blog/open-ai-scale-partnership-gpt-3-5-fine-tuning)
                             * 3. [How to Fine-Tune GPT-3.5 Turbo With OpenAI API]( https://scale.com/blog/fine-tune-gpt-3.5)
                             *
                             *
                             * ### Details
                             *
                             * Before creating a model, you must first create a model template. A model template serves 2 purposes. First, it provides  common scaffolding that is static across multiple models. Second, it exposes several variables that can be injected at model creation time to customize the model.
                             *
                             * For example, a model template can define a docker image that contains code to run a HuggingFace or SentenceTransformers model. This docker image code also accepts environment variables that can be set to swap out the model weights or model name. Refer to the Create Model Template API for more details.
                             *
                             * To create a new model, users must refer to an existing model template and provide the necessary parameters the the model template requires in its `model_creation_parameters_schema` field. The combination of the model template and the model creation parameters will be used to create and deploy a new model.
                             *
                             * Once a model has been created, it can be executed by calling the Execute Model API.
                             *
                             *
                             *
                             * ### Coming Soon
                             * Some of our EGP APIs depend on models, for example Knowledge Base APIs depend on embedding models, Chunk Ranking APIs depend on ranking models, and Completion APIs depend on LLMs.
                             *
                             * In the near future, if a model is created from a model template that is compatible with one of these APIs (based on the model template's `model_type field`), the model will automatically be registered with the API. This will allow users to immediately start using the model with those API without any additional setup.
                             * @param requestBody
                             * @param xSelectedAccountId
                             * @returns ModelInstanceResponse Successful Response
                             * @throws ApiError
                             */
                            public static postV4Models(
                                requestBody: ModelInstanceRequest,
                                xSelectedAccountId?: (string | null),
                            ): CancelablePromise<ModelInstanceResponse> {
                                return __request(OpenAPI, {
                                    method: 'POST',
                                    url: '/v4/models',
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
                             * Get Model
                             * ### Description
                             * Gets the details of a model
                             *
                             * ### Details
                             * This API can be used to get information about a single model by ID. To use this API, pass in the `id` that was returned from your Create Model API call as a path parameter.
                             *
                             * Review the response schema to see the fields that will be returned.
                             * @param modelId
                             * @param view
                             * @returns ModelInstanceResponseWithViews Successful Response
                             * @throws ApiError
                             */
                            public static getV4ModelsModelId(
                                modelId: string,
                                view?: (Array<ModelInstanceViewsOptions> | null),
                            ): CancelablePromise<ModelInstanceResponseWithViews> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/models/{model_id}',
                                    path: {
                                        'model_id': modelId,
                                    },
                                    query: {
                                        'view': view,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Update Model
                             * ### Description
                             * Updates a model
                             *
                             * ### Details
                             * This API can be used to update the model that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Model API call as a path parameter.
                             *
                             * Review the request schema to see the fields that can be updated.
                             * @param modelId
                             * @param requestBody
                             * @returns ModelInstanceResponse Successful Response
                             * @throws ApiError
                             */
                            public static patchV4ModelsModelId(
                                modelId: string,
                                requestBody: PartialModelInstanceRequest,
                            ): CancelablePromise<ModelInstanceResponse> {
                                return __request(OpenAPI, {
                                    method: 'PATCH',
                                    url: '/v4/models/{model_id}',
                                    path: {
                                        'model_id': modelId,
                                    },
                                    body: requestBody,
                                    mediaType: 'application/json',
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Delete Model
                             * ### Description
                             * Deletes a model
                             *
                             * ### Details
                             * This API can be used to delete a model by ID. To use this API, pass in the `id` that was returned from your Create Model API call as a path parameter.
                             * @param modelId
                             * @returns DeleteResponse Successful Response
                             * @throws ApiError
                             */
                            public static deleteV4ModelsModelId(
                                modelId: string,
                            ): CancelablePromise<DeleteResponse> {
                                return __request(OpenAPI, {
                                    method: 'DELETE',
                                    url: '/v4/models/{model_id}',
                                    path: {
                                        'model_id': modelId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * List Model Groups
                             * ### Description
                             * Lists all model groups accessible to the user.
                             *
                             * ### Details
                             * This API can be used to list model groups. If a user has access to multiple accounts, all model groups from all accounts the user is associated with will be returned.
                             * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
                             * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
                             * @param accountId
                             * @param xSelectedAccountId
                             * @returns PaginatedModelGroupResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4ModelGroups(
                                page: number = 1,
                                limit: number = 100,
                                accountId?: (string | null),
                                xSelectedAccountId?: (string | null),
                            ): CancelablePromise<PaginatedModelGroupResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/model-groups',
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
                             * Create Model Group
                             * ### Description
                             *
                             * Model groups are grouping models together. You can add models with the same base_model_id.
                             * @param requestBody
                             * @param xSelectedAccountId
                             * @returns ModelGroupResponse Successful Response
                             * @throws ApiError
                             */
                            public static postV4ModelGroups(
                                requestBody: ModelGroupRequest,
                                xSelectedAccountId?: (string | null),
                            ): CancelablePromise<ModelGroupResponse> {
                                return __request(OpenAPI, {
                                    method: 'POST',
                                    url: '/v4/model-groups',
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
                             * Get Model Group
                             * ### Description
                             * Gets the details of a model group
                             *
                             * ### Details
                             * This API can be used to get information about a single model group by ID. To use this API, pass in the `id` that was returned from your Create Model Group API call as a path parameter.
                             *
                             * Review the response schema to see the fields that will be returned.
                             * @param modelGroupId
                             * @returns ModelGroupResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4ModelGroupsModelGroupId(
                                modelGroupId: string,
                            ): CancelablePromise<ModelGroupResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/model-groups/{model_group_id}',
                                    path: {
                                        'model_group_id': modelGroupId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Update Model Group
                             * ### Description
                             * Updates a model group
                             *
                             * ### Details
                             * This API can be used to update the model group that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Model Group API call as a path parameter.
                             *
                             * Review the request schema to see the fields that can be updated.
                             * @param modelGroupId
                             * @param requestBody
                             * @returns ModelGroupResponse Successful Response
                             * @throws ApiError
                             */
                            public static patchV4ModelGroupsModelGroupId(
                                modelGroupId: string,
                                requestBody: PartialModelGroupRequest,
                            ): CancelablePromise<ModelGroupResponse> {
                                return __request(OpenAPI, {
                                    method: 'PATCH',
                                    url: '/v4/model-groups/{model_group_id}',
                                    path: {
                                        'model_group_id': modelGroupId,
                                    },
                                    body: requestBody,
                                    mediaType: 'application/json',
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Delete Model Group
                             * ### Description
                             * Deletes a model group
                             *
                             * ### Details
                             * This API can be used to delete a model group by ID. To use this API, pass in the `id` that was returned from your Create Model Group API call as a path parameter.
                             * @param modelGroupId
                             * @returns DeleteResponse Successful Response
                             * @throws ApiError
                             */
                            public static deleteV4ModelGroupsModelGroupId(
                                modelGroupId: string,
                            ): CancelablePromise<DeleteResponse> {
                                return __request(OpenAPI, {
                                    method: 'DELETE',
                                    url: '/v4/model-groups/{model_group_id}',
                                    path: {
                                        'model_group_id': modelGroupId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Get Deployment
                             * ### Description
                             * Gets the details of a deployment
                             *
                             * ### Details
                             * This API can be used to get information about a single deployment by ID. To use this API, pass in the `id` that was returned from your Create Deployment API call as a path parameter.
                             *
                             * Review the response schema to see the fields that will be returned.
                             * @param modelInstanceId
                             * @param deploymentId
                             * @returns ModelDeploymentResponse Successful Response
                             * @throws ApiError
                             */
                            public static getV4ModelsModelInstanceIdDeploymentsDeploymentId(
                                modelInstanceId: string,
                                deploymentId: string,
                            ): CancelablePromise<ModelDeploymentResponse> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v4/models/{model_instance_id}/deployments/{deployment_id}',
                                    path: {
                                        'model_instance_id': modelInstanceId,
                                        'deployment_id': deploymentId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Update Deployment
                             * ### Description
                             * Updates a deployment
                             *
                             * ### Details
                             * This API can be used to update the deployment that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Deployment API call as a path parameter.
                             *
                             * Review the request schema to see the fields that can be updated.
                             * @param modelInstanceId
                             * @param deploymentId
                             * @param requestBody
                             * @returns ModelDeploymentResponse Successful Response
                             * @throws ApiError
                             */
                            public static patchV4ModelsModelInstanceIdDeploymentsDeploymentId(
                                modelInstanceId: string,
                                deploymentId: string,
                                requestBody: PartialModelDeploymentRequest,
                            ): CancelablePromise<ModelDeploymentResponse> {
                                return __request(OpenAPI, {
                                    method: 'PATCH',
                                    url: '/v4/models/{model_instance_id}/deployments/{deployment_id}',
                                    path: {
                                        'model_instance_id': modelInstanceId,
                                        'deployment_id': deploymentId,
                                    },
                                    body: requestBody,
                                    mediaType: 'application/json',
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Delete Deployment
                             * ### Description
                             * Deletes a deployment
                             *
                             * ### Details
                             * This API can be used to delete a deployment by ID. To use this API, pass in the `id` that was returned from your Create Deployment API call as a path parameter.
                             * @param modelInstanceId
                             * @param deploymentId
                             * @returns DeleteResponse Successful Response
                             * @throws ApiError
                             */
                            public static deleteV4ModelsModelInstanceIdDeploymentsDeploymentId(
                                modelInstanceId: string,
                                deploymentId: string,
                            ): CancelablePromise<DeleteResponse> {
                                return __request(OpenAPI, {
                                    method: 'DELETE',
                                    url: '/v4/models/{model_instance_id}/deployments/{deployment_id}',
                                    path: {
                                        'model_instance_id': modelInstanceId,
                                        'deployment_id': deploymentId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Create Model
                             * @param requestBody
                             * @returns InferenceModel Successful Response
                             * @throws ApiError
                             */
                            public static postV5V5Models(
                                requestBody: ModelCreateRequest,
                            ): CancelablePromise<InferenceModel> {
                                return __request(OpenAPI, {
                                    method: 'POST',
                                    url: '/v5/models',
                                    body: requestBody,
                                    mediaType: 'application/json',
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * List Models
                             * @param name
                             * @param modelVendor
                             * @param startingAfter
                             * @param endingBefore
                             * @param limit
                             * @returns InferenceModelList Successful Response
                             * @throws ApiError
                             */
                            public static getV5V5Models(
                                name?: (string | null),
                                modelVendor?: (InferenceModelVendor | null),
                                startingAfter?: (string | null),
                                endingBefore?: (string | null),
                                limit: number = 100,
                            ): CancelablePromise<InferenceModelList> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v5/models',
                                    query: {
                                        'name': name,
                                        'model_vendor': modelVendor,
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
                             * Update Model
                             * @param modelId
                             * @param requestBody
                             * @returns InferenceModel Successful Response
                             * @throws ApiError
                             */
                            public static patchV5V5ModelsModelId(
                                modelId: string,
                                requestBody: ModelUpdateRequest,
                            ): CancelablePromise<InferenceModel> {
                                return __request(OpenAPI, {
                                    method: 'PATCH',
                                    url: '/v5/models/{model_id}',
                                    path: {
                                        'model_id': modelId,
                                    },
                                    body: requestBody,
                                    mediaType: 'application/json',
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Delete Model
                             * @param modelId
                             * @returns InferenceModelDelete Successful Response
                             * @throws ApiError
                             */
                            public static deleteV5V5ModelsModelId(
                                modelId: string,
                            ): CancelablePromise<InferenceModelDelete> {
                                return __request(OpenAPI, {
                                    method: 'DELETE',
                                    url: '/v5/models/{model_id}',
                                    path: {
                                        'model_id': modelId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                            /**
                             * Get Model
                             * @param modelId
                             * @returns InferenceModel Successful Response
                             * @throws ApiError
                             */
                            public static getV5V5ModelsModelId(
                                modelId: string,
                            ): CancelablePromise<InferenceModel> {
                                return __request(OpenAPI, {
                                    method: 'GET',
                                    url: '/v5/models/{model_id}',
                                    path: {
                                        'model_id': modelId,
                                    },
                                    errors: {
                                        422: `Validation Error`,
                                    },
                                });
                            }
                        }
