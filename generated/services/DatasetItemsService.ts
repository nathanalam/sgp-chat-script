/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIList_DatasetItem_ } from '../models/APIList_DatasetItem_';
import type { DatasetItem } from '../models/DatasetItem';
import type { DatasetItemBatchCreateRequest } from '../models/DatasetItemBatchCreateRequest';
import type { DatasetItemDelete } from '../models/DatasetItemDelete';
import type { DatasetItemList } from '../models/DatasetItemList';
import type { DatasetItemUpdateRequest } from '../models/DatasetItemUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DatasetItemsService {
    /**
     * Batch Create Dataset Items
     * @param requestBody
     * @returns APIList_DatasetItem_ Successful Response
     * @throws ApiError
     */
    public static postV5V5DatasetItemsBatch(
        requestBody: DatasetItemBatchCreateRequest,
    ): CancelablePromise<APIList_DatasetItem_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/dataset-items/batch',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Dataset Item
     * @param datasetItemId
     * @param version Optional dataset version. When unset, returns the latest version.
     * @returns DatasetItem Successful Response
     * @throws ApiError
     */
    public static getV5V5DatasetItemsDatasetItemId(
        datasetItemId: string,
        version?: (number | null),
    ): CancelablePromise<DatasetItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/dataset-items/{dataset_item_id}',
            path: {
                'dataset_item_id': datasetItemId,
            },
            query: {
                'version': version,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Dataset Item
     * @param datasetItemId
     * @returns DatasetItemDelete Successful Response
     * @throws ApiError
     */
    public static deleteV5V5DatasetItemsDatasetItemId(
        datasetItemId: string,
    ): CancelablePromise<DatasetItemDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/dataset-items/{dataset_item_id}',
            path: {
                'dataset_item_id': datasetItemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Dataset Item
     * @param datasetItemId
     * @param requestBody
     * @returns DatasetItem Successful Response
     * @throws ApiError
     */
    public static patchV5V5DatasetItemsDatasetItemId(
        datasetItemId: string,
        requestBody: DatasetItemUpdateRequest,
    ): CancelablePromise<DatasetItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/dataset-items/{dataset_item_id}',
            path: {
                'dataset_item_id': datasetItemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Dataset Items
     * @param includeArchived
     * @param datasetId Optional dataset identifier. Must be provided if a specific version is requested.
     * @param version Optional dataset version. When unset, returns the latest version. Requires a valid dataset_id when set.
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns DatasetItemList Successful Response
     * @throws ApiError
     */
    public static getV5V5DatasetItems(
        includeArchived: boolean = false,
        datasetId?: (string | null),
        version?: (number | null),
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<DatasetItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/dataset-items',
            query: {
                'include_archived': includeArchived,
                'dataset_id': datasetId,
                'version': version,
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
