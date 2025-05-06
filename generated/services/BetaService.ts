/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_POST_V4_beta__files } from '../models/Body_POST_V4_beta__files';
import type { ChatCompletionChunk } from '../models/ChatCompletionChunk';
import type { egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__ChatCompletionRequest } from '../models/egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__ChatCompletionRequest';
import type { egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__CompletionRequest } from '../models/egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__CompletionRequest';
import type { egp_api_backend__server__api__models__inference_models__ChatCompletion } from '../models/egp_api_backend__server__api__models__inference_models__ChatCompletion';
import type { egp_api_backend__server__api__models__inference_models__Completion } from '../models/egp_api_backend__server__api__models__inference_models__Completion';
import type { File } from '../models/File';
import type { FileDelete } from '../models/FileDelete';
import type { FileList } from '../models/FileList';
import type { FileUpdateRequest } from '../models/FileUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BetaService {
    /**
     * Chat Completions
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4BetaV5ChatCompletions(
        requestBody: egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__ChatCompletionRequest,
    ): CancelablePromise<(egp_api_backend__server__api__models__inference_models__ChatCompletion | ChatCompletionChunk)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/beta/chat/completions',
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
    public static postV4BetaV5Completions(
        requestBody: egp_api_backend__server__api__apps__public__routers__inference__inference_model_models__CompletionRequest,
    ): CancelablePromise<egp_api_backend__server__api__models__inference_models__Completion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/beta/completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload File
     * @param formData
     * @returns File Successful Response
     * @throws ApiError
     */
    public static postV4BetaFiles(
        formData: Body_POST_V4_beta__files,
    ): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/beta/files',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Files
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns FileList Successful Response
     * @throws ApiError
     */
    public static getV4BetaFiles(
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<FileList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/beta/files',
            query: {
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
     * Get File
     * @param fileId
     * @returns File Successful Response
     * @throws ApiError
     */
    public static getV4BetaFilesFileId(
        fileId: string,
    ): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/beta/files/{file_id}',
            path: {
                'file_id': fileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete File
     * @param fileId
     * @returns FileDelete Successful Response
     * @throws ApiError
     */
    public static deleteV4BetaFilesFileId(
        fileId: string,
    ): CancelablePromise<FileDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/beta/files/{file_id}',
            path: {
                'file_id': fileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update File
     * @param fileId
     * @param requestBody
     * @returns File Successful Response
     * @throws ApiError
     */
    public static patchV4BetaFilesFileId(
        fileId: string,
        requestBody: FileUpdateRequest,
    ): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/beta/files/{file_id}',
            path: {
                'file_id': fileId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get File Content
     * @param fileId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getV4BetaFilesFileIdContent(
        fileId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/beta/files/{file_id}/content',
            path: {
                'file_id': fileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get File Content Metadata
     * @param fileId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static headV4BetaFilesFileIdContent(
        fileId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/v4/beta/files/{file_id}/content',
            path: {
                'file_id': fileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get File Text
     * @param fileId
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getV4BetaFilesFileIdText(
        fileId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/beta/files/{file_id}/text',
            path: {
                'file_id': fileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
