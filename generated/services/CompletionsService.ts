/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCompletionRequest } from '../models/CreateCompletionRequest';
import type { CreateCompletionResponse } from '../models/CreateCompletionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompletionsService {
    /**
     * Create Completion
     * ### Description
     * Given a user's input, runs LLM inference to produce the model's response.
     *
     * ### Details
     * LLM [completions](https://scale-egp.readme.io/docs/completions-1) have many use cases,         such as content summarization, question-answering, and text generation.
     *
     * The `model` parameter determines which LLM will be used to generate the completion. Keep in         mind that different models have varying sizes, costs, and may perform differently across         different tasks.
     *
     * The user input, commonly referred to as the "prompt", is a required field in the request         body. The quality of the model's response can vary greatly depending on the input prompt.         Good prompt engineering can significantly enhance the response quality. If you encounter         suboptimal results, consider writing more specific instructions or providing examples to the         LLM before trying more expensive techniques  such as swapping in other models or finetuning.
     *
     * By default, the endpoint will return the entire response as one whole object. If you would         prefer to stream the completion in real-time, you can achieve this by setting the `stream`         flag to `true`.
     * @param requestBody
     * @returns CreateCompletionResponse Successful Response
     * @throws ApiError
     */
    public static postV2V2Completions(
        requestBody: CreateCompletionRequest,
    ): CancelablePromise<CreateCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Completion
     * ### Description
     * Given a user's input, runs LLM inference to produce the model's response.
     *
     * ### Details
     * LLM [completions](https://scale-egp.readme.io/docs/completions-1) have many use cases,         such as content summarization, question-answering, and text generation.
     *
     * The `model` parameter determines which LLM will be used to generate the completion. Keep in         mind that different models have varying sizes, costs, and may perform differently across         different tasks.
     *
     * The user input, commonly referred to as the "prompt", is a required field in the request         body. The quality of the model's response can vary greatly depending on the input prompt.         Good prompt engineering can significantly enhance the response quality. If you encounter         suboptimal results, consider writing more specific instructions or providing examples to the         LLM before trying more expensive techniques  such as swapping in other models or finetuning.
     *
     * By default, the endpoint will return the entire response as one whole object. If you would         prefer to stream the completion in real-time, you can achieve this by setting the `stream`         flag to `true`.
     * @param requestBody
     * @returns CreateCompletionResponse Successful Response
     * @throws ApiError
     */
    public static postV3V2Completions(
        requestBody: CreateCompletionRequest,
    ): CancelablePromise<CreateCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Completion
     * ### Description
     * Given a user's input, runs LLM inference to produce the model's response.
     *
     * ### Details
     * LLM [completions](https://scale-egp.readme.io/docs/completions-1) have many use cases,         such as content summarization, question-answering, and text generation.
     *
     * The `model` parameter determines which LLM will be used to generate the completion. Keep in         mind that different models have varying sizes, costs, and may perform differently across         different tasks.
     *
     * The user input, commonly referred to as the "prompt", is a required field in the request         body. The quality of the model's response can vary greatly depending on the input prompt.         Good prompt engineering can significantly enhance the response quality. If you encounter         suboptimal results, consider writing more specific instructions or providing examples to the         LLM before trying more expensive techniques  such as swapping in other models or finetuning.
     *
     * By default, the endpoint will return the entire response as one whole object. If you would         prefer to stream the completion in real-time, you can achieve this by setting the `stream`         flag to `true`.
     * @param requestBody
     * @returns CreateCompletionResponse Successful Response
     * @throws ApiError
     */
    public static postV4V2Completions(
        requestBody: CreateCompletionRequest,
    ): CancelablePromise<CreateCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
