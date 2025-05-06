/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteResponse } from '../models/DeleteResponse';
import type { FineTuningJobEvent } from '../models/FineTuningJobEvent';
import type { FineTuningJobRequest } from '../models/FineTuningJobRequest';
import type { FineTuningJobResponse } from '../models/FineTuningJobResponse';
import type { PaginatedFineTuningJobResponse } from '../models/PaginatedFineTuningJobResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FineTuningJobsV3BetaService {
    /**
     * List Fine Tuning Jobs
     * ### Description
     * Lists all fine tuning jobs accessible to the user.
     *
     * ### Details
     * This API can be used to list fine tuning jobs. If a user has access to multiple accounts, all fine tuning jobs from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns FineTuningJobResponse Successful Response
     * @throws ApiError
     */
    public static getV3FineTuningJobs(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<FineTuningJobResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/fine-tuning-jobs',
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
     * Create Fine Tuning Job
     * ### Description
     * Model fine tuning jobs.
     *
     * ### Details
     *
     * TODO
     * @param requestBody
     * @param xSelectedAccountId
     * @returns FineTuningJobResponse Successful Response
     * @throws ApiError
     */
    public static postV3FineTuningJobs(
        requestBody: FineTuningJobRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<FineTuningJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/fine-tuning-jobs',
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
     * Get Fine Tuning Job
     * ### Description
     * Gets the details of a fine tuning job
     *
     * ### Details
     * This API can be used to get information about a single fine tuning job by ID. To use this API, pass in the `id` that was returned from your Create Fine Tuning Job API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param fineTuningJobId
     * @returns FineTuningJobResponse Successful Response
     * @throws ApiError
     */
    public static getV3FineTuningJobsFineTuningJobId(
        fineTuningJobId: string,
    ): CancelablePromise<FineTuningJobResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/fine-tuning-jobs/{fine_tuning_job_id}',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Fine Tuning Job
     * ### Description
     * Deletes a fine tuning job
     *
     * ### Details
     * This API can be used to delete a fine tuning job by ID. To use this API, pass in the `id` that was returned from your Create Fine Tuning Job API call as a path parameter.
     * @param fineTuningJobId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3FineTuningJobsFineTuningJobId(
        fineTuningJobId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/fine-tuning-jobs/{fine_tuning_job_id}',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get fine tuning job events
     * @param fineTuningJobId
     * @returns FineTuningJobEvent Successful Response
     * @throws ApiError
     */
    public static getV3FineTuningJobsFineTuningJobIdEvents(
        fineTuningJobId: string,
    ): CancelablePromise<Array<FineTuningJobEvent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/fine-tuning-jobs/{fine_tuning_job_id}/events',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Fine Tuning Jobs
     * ### Description
     * Lists all fine tuning jobs accessible to the user.
     *
     * ### Details
     * This API can be used to list fine tuning jobs. If a user has access to multiple accounts, all fine tuning jobs from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedFineTuningJobResponse Successful Response
     * @throws ApiError
     */
    public static getV4FineTuningJobs(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedFineTuningJobResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/fine-tuning-jobs',
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
     * Create Fine Tuning Job
     * ### Description
     * Model fine tuning jobs.
     *
     * ### Details
     *
     * TODO
     * @param requestBody
     * @param xSelectedAccountId
     * @returns FineTuningJobResponse Successful Response
     * @throws ApiError
     */
    public static postV4FineTuningJobs(
        requestBody: FineTuningJobRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<FineTuningJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/fine-tuning-jobs',
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
     * Get Fine Tuning Job
     * ### Description
     * Gets the details of a fine tuning job
     *
     * ### Details
     * This API can be used to get information about a single fine tuning job by ID. To use this API, pass in the `id` that was returned from your Create Fine Tuning Job API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param fineTuningJobId
     * @returns FineTuningJobResponse Successful Response
     * @throws ApiError
     */
    public static getV4FineTuningJobsFineTuningJobId(
        fineTuningJobId: string,
    ): CancelablePromise<FineTuningJobResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/fine-tuning-jobs/{fine_tuning_job_id}',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Fine Tuning Job
     * ### Description
     * Deletes a fine tuning job
     *
     * ### Details
     * This API can be used to delete a fine tuning job by ID. To use this API, pass in the `id` that was returned from your Create Fine Tuning Job API call as a path parameter.
     * @param fineTuningJobId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4FineTuningJobsFineTuningJobId(
        fineTuningJobId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/fine-tuning-jobs/{fine_tuning_job_id}',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get fine tuning job events
     * @param fineTuningJobId
     * @returns FineTuningJobEvent Successful Response
     * @throws ApiError
     */
    public static getV4FineTuningJobsFineTuningJobIdEvents(
        fineTuningJobId: string,
    ): CancelablePromise<Array<FineTuningJobEvent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/fine-tuning-jobs/{fine_tuning_job_id}/events',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
