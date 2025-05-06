/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_POST_V3__training_datasets } from '../models/Body_POST_V3__training_datasets';
import type { Body_POST_V4__training_datasets } from '../models/Body_POST_V4__training_datasets';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { PaginatedTrainingDatasetResponse } from '../models/PaginatedTrainingDatasetResponse';
import type { TrainingDatasetGenerationItem } from '../models/TrainingDatasetGenerationItem';
import type { TrainingDatasetResponse } from '../models/TrainingDatasetResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrainingDatasetsV3BetaService {
    /**
     * List Training Datasets
     * ### Description
     * Lists all training datasets accessible to the user.
     *
     * ### Details
     * This API can be used to list training datasets. If a user has access to multiple accounts, all training datasets from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns TrainingDatasetResponse Successful Response
     * @throws ApiError
     */
    public static getV3TrainingDatasets(
        accountId?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<TrainingDatasetResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/training-datasets',
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
     * Create Training Dataset
     * @param formData
     * @returns TrainingDatasetResponse Successful Response
     * @throws ApiError
     */
    public static postV3TrainingDatasets(
        formData: Body_POST_V3__training_datasets,
    ): CancelablePromise<TrainingDatasetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/training-datasets',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Training Dataset
     * ### Description
     * Gets the details of a training dataset
     *
     * ### Details
     * This API can be used to get information about a single training dataset by ID. To use this API, pass in the `id` that was returned from your Create Training Dataset API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param trainingDatasetId
     * @returns TrainingDatasetResponse Successful Response
     * @throws ApiError
     */
    public static getV3TrainingDatasetsTrainingDatasetId(
        trainingDatasetId: string,
    ): CancelablePromise<TrainingDatasetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/training-datasets/{training_dataset_id}',
            path: {
                'training_dataset_id': trainingDatasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Training Dataset
     * ### Description
     * Deletes a training dataset
     *
     * ### Details
     * This API can be used to delete a training dataset by ID. To use this API, pass in the `id` that was returned from your Create Training Dataset API call as a path parameter.
     * @param trainingDatasetId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3TrainingDatasetsTrainingDatasetId(
        trainingDatasetId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/training-datasets/{training_dataset_id}',
            path: {
                'training_dataset_id': trainingDatasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Training Dataset Contents
     * @param trainingDatasetId
     * @returns TrainingDatasetGenerationItem Successful Response
     * @throws ApiError
     */
    public static getV3TrainingDatasetsTrainingDatasetIdContents(
        trainingDatasetId: string,
    ): CancelablePromise<Array<TrainingDatasetGenerationItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/training-datasets/{training_dataset_id}/contents',
            path: {
                'training_dataset_id': trainingDatasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Training Datasets
     * ### Description
     * Lists all training datasets accessible to the user.
     *
     * ### Details
     * This API can be used to list training datasets. If a user has access to multiple accounts, all training datasets from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedTrainingDatasetResponse Successful Response
     * @throws ApiError
     */
    public static getV4TrainingDatasets(
        page: number = 1,
        limit: number = 100,
        accountId?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedTrainingDatasetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/training-datasets',
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
     * Create Training Dataset
     * @param formData
     * @returns TrainingDatasetResponse Successful Response
     * @throws ApiError
     */
    public static postV4TrainingDatasets(
        formData: Body_POST_V4__training_datasets,
    ): CancelablePromise<TrainingDatasetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/training-datasets',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Training Dataset
     * ### Description
     * Gets the details of a training dataset
     *
     * ### Details
     * This API can be used to get information about a single training dataset by ID. To use this API, pass in the `id` that was returned from your Create Training Dataset API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param trainingDatasetId
     * @returns TrainingDatasetResponse Successful Response
     * @throws ApiError
     */
    public static getV4TrainingDatasetsTrainingDatasetId(
        trainingDatasetId: string,
    ): CancelablePromise<TrainingDatasetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/training-datasets/{training_dataset_id}',
            path: {
                'training_dataset_id': trainingDatasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Training Dataset
     * ### Description
     * Deletes a training dataset
     *
     * ### Details
     * This API can be used to delete a training dataset by ID. To use this API, pass in the `id` that was returned from your Create Training Dataset API call as a path parameter.
     * @param trainingDatasetId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4TrainingDatasetsTrainingDatasetId(
        trainingDatasetId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/training-datasets/{training_dataset_id}',
            path: {
                'training_dataset_id': trainingDatasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Training Dataset Contents
     * @param trainingDatasetId
     * @returns TrainingDatasetGenerationItem Successful Response
     * @throws ApiError
     */
    public static getV4TrainingDatasetsTrainingDatasetIdContents(
        trainingDatasetId: string,
    ): CancelablePromise<Array<TrainingDatasetGenerationItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/training-datasets/{training_dataset_id}/contents',
            path: {
                'training_dataset_id': trainingDatasetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
