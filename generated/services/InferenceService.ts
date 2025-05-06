/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIList_ModelDefinition_ } from '../models/APIList_ModelDefinition_';
import type { ChatCompletionChunk } from '../models/ChatCompletionChunk';
import type { egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__ChatCompletionRequest } from '../models/egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__ChatCompletionRequest';
import type { egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__CompletionRequest } from '../models/egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__CompletionRequest';
import type { egp_api_backend__server__api__models__inference_models__ChatCompletion } from '../models/egp_api_backend__server__api__models__inference_models__ChatCompletion';
import type { egp_api_backend__server__api__models__inference_models__Completion } from '../models/egp_api_backend__server__api__models__inference_models__Completion';
import type { GenericInferenceRequest } from '../models/GenericInferenceRequest';
import type { GenericInferenceResponse } from '../models/GenericInferenceResponse';
import type { GenericInferenceResponseChunk } from '../models/GenericInferenceResponseChunk';
import type { InferenceModelVendor } from '../models/InferenceModelVendor';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InferenceService {
    /**
     * Generic Inference
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV5V5Inference(
        requestBody: GenericInferenceRequest,
    ): CancelablePromise<(GenericInferenceResponse | GenericInferenceResponseChunk)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/inference',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Chat Completions
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV5V5ChatCompletions(
        requestBody: egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__ChatCompletionRequest,
    ): CancelablePromise<(egp_api_backend__server__api__models__inference_models__ChatCompletion | ChatCompletionChunk)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/chat/completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Completions
     * @param requestBody
     * @returns egp_api_backend__server__api__models__inference_models__Completion Successful Response
     * @throws ApiError
     */
    public static postV5V5Completions(
        requestBody: egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__CompletionRequest,
    ): CancelablePromise<egp_api_backend__server__api__models__inference_models__Completion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Chat Completions
     * @param modelVendor
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns APIList_ModelDefinition_ Successful Response
     * @throws ApiError
     */
    public static getV5V5ChatCompletionsModels(
        modelVendor?: (InferenceModelVendor | null),
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<APIList_ModelDefinition_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/chat/completions/models',
            query: {
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
}
