/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBatchCompletionRequest } from '../models/CreateBatchCompletionRequest';
import type { CreateBatchCompletionResponse } from '../models/CreateBatchCompletionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BatchCompletionsService {
    /**
     * Create Batch Completion
     * ### Description
     * Given a list of prompts, runs LLM inference to produce the model's responses.
     *
     * ### Details
     * Batch completions are useful when you have a list of prompts that you want to run inference on         a large number of prompts and are willing to wait for the responses. Conceptually, this API         is similar to the [completions](https://scale-egp.readme.io/docs/completions-1) API, but         runs the prompts asynchronously. Currently only available for LLM Engine models.         Output gets stored in a location in s3 specified by the user.
     * @param requestBody
     * @returns CreateBatchCompletionResponse Successful Response
     * @throws ApiError
     */
    public static postV4BatchCompletions(
        requestBody: CreateBatchCompletionRequest,
    ): CancelablePromise<CreateBatchCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/batch-completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
