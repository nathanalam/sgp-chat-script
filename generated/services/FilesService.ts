/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { File } from '../models/File';
import type { FileDelete } from '../models/FileDelete';
import type { FileList } from '../models/FileList';
import type { FileUpdateRequest } from '../models/FileUpdateRequest';
import type { FileUploadRequest } from '../models/FileUploadRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesService {
    /**
     * Upload File
     * @param formData
     * @returns File Successful Response
     * @throws ApiError
     */
    public static postV5Files(
        formData: FileUploadRequest,
    ): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/files',
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
    public static getV5Files(
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<FileList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/files',
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
    public static getV5FilesFileId(
        fileId: string,
    ): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/files/{file_id}',
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
    public static deleteV5FilesFileId(
        fileId: string,
    ): CancelablePromise<FileDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/files/{file_id}',
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
    public static patchV5FilesFileId(
        fileId: string,
        requestBody: FileUpdateRequest,
    ): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/files/{file_id}',
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
    public static getV5FilesFileIdContent(
        fileId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/files/{file_id}/content',
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
    public static headV5FilesFileIdContent(
        fileId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/v5/files/{file_id}/content',
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
    public static getV5FilesFileIdText(
        fileId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/files/{file_id}/text',
            path: {
                'file_id': fileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
