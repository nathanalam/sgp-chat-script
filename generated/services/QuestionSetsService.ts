/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteResponse } from '../models/DeleteResponse';
import type { PaginatedQuestionSetResponseWithViews } from '../models/PaginatedQuestionSetResponseWithViews';
import type { QuestionSet } from '../models/QuestionSet';
import type { QuestionSetCreateRequest } from '../models/QuestionSetCreateRequest';
import type { QuestionSetDelete } from '../models/QuestionSetDelete';
import type { QuestionSetList } from '../models/QuestionSetList';
import type { QuestionSetRequest } from '../models/QuestionSetRequest';
import type { QuestionSetResponse } from '../models/QuestionSetResponse';
import type { QuestionSetResponseWithViews } from '../models/QuestionSetResponseWithViews';
import type { QuestionSetUpdateRequest } from '../models/QuestionSetUpdateRequest';
import type { QuestionSetViews } from '../models/QuestionSetViews';
import type { QuestionSetViewsOptions } from '../models/QuestionSetViewsOptions';
import type { QuestionSetWithQuestions } from '../models/QuestionSetWithQuestions';
import type { RestorablePartialQuestionSetRequest } from '../models/RestorablePartialQuestionSetRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionSetsService {
    /**
     * Get Question Set
     * @param questionSetId
     * @returns QuestionSetWithQuestions Successful Response
     * @throws ApiError
     */
    public static getV2V2QuestionSetsQuestionSetId(
        questionSetId: string,
    ): CancelablePromise<QuestionSetWithQuestions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Question Set
     * ### Description
     * Updates a question set
     *
     * ### Details
     * This API can be used to update the question set that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Question Set API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param questionSetId
     * @param requestBody
     * @returns QuestionSetResponse Successful Response
     * @throws ApiError
     */
    public static patchV2QuestionSetsQuestionSetId(
        questionSetId: string,
        requestBody: RestorablePartialQuestionSetRequest,
    ): CancelablePromise<QuestionSetResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Question Set
     * ### Description
     * Deletes a question set
     *
     * ### Details
     * This API can be used to delete a question set by ID. To use this API, pass in the `id` that was returned from your Create Question Set API call as a path parameter.
     * @param questionSetId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2QuestionSetsQuestionSetId(
        questionSetId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Question Sets
     * ### Description
     * Lists all question sets accessible to the user.
     *
     * ### Details
     * This API can be used to list question sets. If a user has access to multiple accounts, all question sets from all accounts the user is associated with will be returned.
     * @param view
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns QuestionSetResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV2QuestionSets(
        view?: (Array<QuestionSetViewsOptions> | null),
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<QuestionSetResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/question-sets',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Question Set
     * ### Description
     * Creates a question set
     *
     * ### Details
     * This API can be used to create a question set. To use this API, review the request schema and pass in all fields that are required to create a question set.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns QuestionSetResponse Successful Response
     * @throws ApiError
     */
    public static postV2QuestionSets(
        requestBody: QuestionSetRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<QuestionSetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/question-sets',
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
     * Get Question Set
     * @param questionSetId
     * @returns QuestionSetWithQuestions Successful Response
     * @throws ApiError
     */
    public static getV3V2QuestionSetsQuestionSetId(
        questionSetId: string,
    ): CancelablePromise<QuestionSetWithQuestions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Question Set
     * ### Description
     * Updates a question set
     *
     * ### Details
     * This API can be used to update the question set that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Question Set API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param questionSetId
     * @param requestBody
     * @returns QuestionSetResponse Successful Response
     * @throws ApiError
     */
    public static patchV3QuestionSetsQuestionSetId(
        questionSetId: string,
        requestBody: RestorablePartialQuestionSetRequest,
    ): CancelablePromise<QuestionSetResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Question Set
     * ### Description
     * Deletes a question set
     *
     * ### Details
     * This API can be used to delete a question set by ID. To use this API, pass in the `id` that was returned from your Create Question Set API call as a path parameter.
     * @param questionSetId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3QuestionSetsQuestionSetId(
        questionSetId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Question Sets
     * ### Description
     * Lists all question sets accessible to the user.
     *
     * ### Details
     * This API can be used to list question sets. If a user has access to multiple accounts, all question sets from all accounts the user is associated with will be returned.
     * @param view
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns QuestionSetResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV3QuestionSets(
        view?: (Array<QuestionSetViewsOptions> | null),
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<QuestionSetResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/question-sets',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Question Set
     * ### Description
     * Creates a question set
     *
     * ### Details
     * This API can be used to create a question set. To use this API, review the request schema and pass in all fields that are required to create a question set.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns QuestionSetResponse Successful Response
     * @throws ApiError
     */
    public static postV3QuestionSets(
        requestBody: QuestionSetRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<QuestionSetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/question-sets',
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
     * Get Question Set
     * @param questionSetId
     * @returns QuestionSetWithQuestions Successful Response
     * @throws ApiError
     */
    public static getV4V2QuestionSetsQuestionSetId(
        questionSetId: string,
    ): CancelablePromise<QuestionSetWithQuestions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Question Set
     * ### Description
     * Updates a question set
     *
     * ### Details
     * This API can be used to update the question set that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Question Set API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param questionSetId
     * @param requestBody
     * @returns QuestionSetResponse Successful Response
     * @throws ApiError
     */
    public static patchV4QuestionSetsQuestionSetId(
        questionSetId: string,
        requestBody: RestorablePartialQuestionSetRequest,
    ): CancelablePromise<QuestionSetResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Question Set
     * ### Description
     * Deletes a question set
     *
     * ### Details
     * This API can be used to delete a question set by ID. To use this API, pass in the `id` that was returned from your Create Question Set API call as a path parameter.
     * @param questionSetId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4QuestionSetsQuestionSetId(
        questionSetId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Question Sets
     * ### Description
     * Lists all question sets accessible to the user.
     *
     * ### Details
     * This API can be used to list question sets. If a user has access to multiple accounts, all question sets from all accounts the user is associated with will be returned.
     * @param view
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param includeArchived
     * @param xSelectedAccountId
     * @returns PaginatedQuestionSetResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4QuestionSets(
        view?: (Array<QuestionSetViewsOptions> | null),
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        includeArchived: boolean = false,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedQuestionSetResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/question-sets',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Question Set
     * ### Description
     * Creates a question set
     *
     * ### Details
     * This API can be used to create a question set. To use this API, review the request schema and pass in all fields that are required to create a question set.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns QuestionSetResponse Successful Response
     * @throws ApiError
     */
    public static postV4QuestionSets(
        requestBody: QuestionSetRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<QuestionSetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/question-sets',
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
     * Create Question Set
     * @param requestBody
     * @returns QuestionSet Successful Response
     * @throws ApiError
     */
    public static postV5V5QuestionSets(
        requestBody: QuestionSetCreateRequest,
    ): CancelablePromise<QuestionSet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/question-sets',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Question Sets
     * @param views
     * @param includeArchived
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns QuestionSetList Successful Response
     * @throws ApiError
     */
    public static getV5V5QuestionSets(
        views?: Array<QuestionSetViews>,
        includeArchived: boolean = false,
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<QuestionSetList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/question-sets',
            query: {
                'views': views,
                'include_archived': includeArchived,
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
     * Get Question Set
     * @param questionSetId
     * @param views
     * @returns QuestionSet Successful Response
     * @throws ApiError
     */
    public static getV5V5QuestionSetsQuestionSetId(
        questionSetId: string,
        views?: Array<QuestionSetViews>,
    ): CancelablePromise<QuestionSet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            query: {
                'views': views,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Question Set
     * @param questionSetId
     * @param requestBody
     * @returns QuestionSet Successful Response
     * @throws ApiError
     */
    public static patchV5V5QuestionSetsQuestionSetId(
        questionSetId: string,
        requestBody: QuestionSetUpdateRequest,
    ): CancelablePromise<QuestionSet> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Archive Question Set
     * @param questionSetId
     * @returns QuestionSetDelete Successful Response
     * @throws ApiError
     */
    public static deleteV5V5QuestionSetsQuestionSetId(
        questionSetId: string,
    ): CancelablePromise<QuestionSetDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/question-sets/{question_set_id}',
            path: {
                'question_set_id': questionSetId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
