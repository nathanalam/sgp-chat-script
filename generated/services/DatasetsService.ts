/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dataset } from '../models/Dataset';
import type { DatasetCreateRequest } from '../models/DatasetCreateRequest';
import type { DatasetDelete } from '../models/DatasetDelete';
import type { DatasetList } from '../models/DatasetList';
import type { DatasetUpdateRequest } from '../models/DatasetUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DatasetsService {
    /**
     * Create Dataset
     * @param requestBody
     * @returns Dataset Successful Response
     * @throws ApiError
     */
    public static postV5V5Datasets(
        requestBody: DatasetCreateRequest,
    ): CancelablePromise<Dataset> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/datasets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Datasets
     * @param tags
     * @param includeArchived
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @param name
     * @returns DatasetList Successful Response
     * @throws ApiError
     */
    public static getV5V5Datasets(
        tags?: (Array<string> | null),
        includeArchived: boolean = false,
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
        name?: (string | null),
    ): CancelablePromise<DatasetList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/datasets',
            query: {
                'tags': tags,
                'include_archived': includeArchived,
                'starting_after': startingAfter,
                'ending_before': endingBefore,
                'limit': limit,
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Dataset
     * @param datasetId
     * @returns DatasetDelete Successful Response
     * @throws ApiError
     */
    public static deleteV5V5DatasetsDatasetId(
        datasetId: string,
    ): CancelablePromise<DatasetDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/datasets/{dataset_id}',
            path: {
                'dataset_id': datasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Dataset
     * @param datasetId
     * @param requestBody
     * @returns Dataset Successful Response
     * @throws ApiError
     */
    public static patchV5V5DatasetsDatasetId(
        datasetId: string,
        requestBody: DatasetUpdateRequest,
    ): CancelablePromise<Dataset> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/datasets/{dataset_id}',
            path: {
                'dataset_id': datasetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Dataset
     * @param datasetId
     * @param includeArchived
     * @returns Dataset Successful Response
     * @throws ApiError
     */
    public static getV5V5DatasetsDatasetId(
        datasetId: string,
        includeArchived: boolean = false,
    ): CancelablePromise<Dataset> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/datasets/{dataset_id}',
            path: {
                'dataset_id': datasetId,
            },
            query: {
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
