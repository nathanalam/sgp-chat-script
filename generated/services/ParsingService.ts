/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParseDocumentResponse } from '../models/ParseDocumentResponse';
import type { ParseRequest } from '../models/ParseRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ParsingService {
    /**
     * Parse a document
     * @param requestBody
     * @returns ParseDocumentResponse Successful Response
     * @throws ApiError
     */
    public static postV5ParseJob(
        requestBody: ParseRequest,
    ): CancelablePromise<ParseDocumentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/parse-job',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
