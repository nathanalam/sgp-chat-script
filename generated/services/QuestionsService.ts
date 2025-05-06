/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedQuestionResponse } from '../models/PaginatedQuestionResponse';
import type { Question } from '../models/Question';
import type { QuestionCreateRequest } from '../models/QuestionCreateRequest';
import type { QuestionList } from '../models/QuestionList';
import type { QuestionRequest } from '../models/QuestionRequest';
import type { QuestionResponse } from '../models/QuestionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionsService {
    /**
     * List Questions
     * ### Description
     * Lists all questions accessible to the user.
     *
     * ### Details
     * This API can be used to list questions. If a user has access to multiple accounts, all questions from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static getV2Questions(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<QuestionResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/questions',
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
     * Create Question
     * ### Description
     * Creates a question
     *
     * ### Details
     * This API can be used to create a question. To use this API, review the request schema and pass in all fields that are required to create a question.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static postV2Questions(
        requestBody: QuestionRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<QuestionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/questions',
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
     * Get Question
     * ### Description
     * Gets the details of a question
     *
     * ### Details
     * This API can be used to get information about a single question by ID. To use this API, pass in the `id` that was returned from your Create Question API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param questionId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static getV2QuestionsQuestionId(
        questionId: string,
    ): CancelablePromise<QuestionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/questions/{question_id}',
            path: {
                'question_id': questionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Questions
     * ### Description
     * Lists all questions accessible to the user.
     *
     * ### Details
     * This API can be used to list questions. If a user has access to multiple accounts, all questions from all accounts the user is associated with will be returned.
     * @param accountId
     * @param xSelectedAccountId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static getV3Questions(
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<QuestionResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/questions',
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
     * Create Question
     * ### Description
     * Creates a question
     *
     * ### Details
     * This API can be used to create a question. To use this API, review the request schema and pass in all fields that are required to create a question.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static postV3Questions(
        requestBody: QuestionRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<QuestionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/questions',
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
     * Get Question
     * ### Description
     * Gets the details of a question
     *
     * ### Details
     * This API can be used to get information about a single question by ID. To use this API, pass in the `id` that was returned from your Create Question API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param questionId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static getV3QuestionsQuestionId(
        questionId: string,
    ): CancelablePromise<QuestionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/questions/{question_id}',
            path: {
                'question_id': questionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Questions
     * ### Description
     * Lists all questions accessible to the user.
     *
     * ### Details
     * This API can be used to list questions. If a user has access to multiple accounts, all questions from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedQuestionResponse Successful Response
     * @throws ApiError
     */
    public static getV4Questions(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedQuestionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/questions',
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
     * Create Question
     * ### Description
     * Creates a question
     *
     * ### Details
     * This API can be used to create a question. To use this API, review the request schema and pass in all fields that are required to create a question.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static postV4Questions(
        requestBody: QuestionRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<QuestionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/questions',
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
     * Get Question
     * ### Description
     * Gets the details of a question
     *
     * ### Details
     * This API can be used to get information about a single question by ID. To use this API, pass in the `id` that was returned from your Create Question API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param questionId
     * @returns QuestionResponse Successful Response
     * @throws ApiError
     */
    public static getV4QuestionsQuestionId(
        questionId: string,
    ): CancelablePromise<QuestionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/questions/{question_id}',
            path: {
                'question_id': questionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Question
     * @param requestBody
     * @returns Question Successful Response
     * @throws ApiError
     */
    public static postV5V5Questions(
        requestBody: QuestionCreateRequest,
    ): CancelablePromise<Question> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/questions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Questions
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns QuestionList Successful Response
     * @throws ApiError
     */
    public static getV5V5Questions(
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<QuestionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/questions',
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
     * Get Question
     * @param questionId
     * @returns Question Successful Response
     * @throws ApiError
     */
    public static getV5V5QuestionsQuestionId(
        questionId: string,
    ): CancelablePromise<Question> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/questions/{question_id}',
            path: {
                'question_id': questionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
