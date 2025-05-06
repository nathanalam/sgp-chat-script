/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunksRankRequest } from '../models/ChunksRankRequest';
import type { ChunksRankResponse } from '../models/ChunksRankResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChunksService {
    /**
     * Rank Chunks
     * ### Description
     * Sorts a list of text chunks by similarity against a given query string.
     *
     * ### Details
     * Use this API endpoint to rank which text chunks provide the most relevant responses to a         given a query string.
     *
     * This is useful for stuffing chunks into a prompt where order may matter or for filtering out         less relevant chunks according to the ranking strategy. For example, this API may be useful         when doing retrieval augment generation (RAG). Sometimes vector store [similarity search](         https://scale-egp.readme.io/reference/query_vector_store) does not always return the best         ranking of text chunks, since this is heavily dependent on embedding generation. This API         endpoint can act as a post-processing step to re-sort the given chunks using more complex         strategies that may outperform vector search, and then filter only the top-k most relevant         chunks to stuff into the prompt for RAG.
     *
     * ### Restrictions and Limits
     * Ranking can be a very intensive and slow process depending on methodology where duration         scales with number of chunks. For best performance, we recommend ranking less than 640 chunks         at a time, and you may see a decrease in performance as the number of chunks ranked increases.
     * @param requestBody
     * @returns ChunksRankResponse Successful Response
     * @throws ApiError
     */
    public static postV2V2ChunksRank(
        requestBody: ChunksRankRequest,
    ): CancelablePromise<ChunksRankResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/chunks/rank',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Rank Chunks
     * ### Description
     * Sorts a list of text chunks by similarity against a given query string.
     *
     * ### Details
     * Use this API endpoint to rank which text chunks provide the most relevant responses to a         given a query string.
     *
     * This is useful for stuffing chunks into a prompt where order may matter or for filtering out         less relevant chunks according to the ranking strategy. For example, this API may be useful         when doing retrieval augment generation (RAG). Sometimes vector store [similarity search](         https://scale-egp.readme.io/reference/query_vector_store) does not always return the best         ranking of text chunks, since this is heavily dependent on embedding generation. This API         endpoint can act as a post-processing step to re-sort the given chunks using more complex         strategies that may outperform vector search, and then filter only the top-k most relevant         chunks to stuff into the prompt for RAG.
     *
     * ### Restrictions and Limits
     * Ranking can be a very intensive and slow process depending on methodology where duration         scales with number of chunks. For best performance, we recommend ranking less than 640 chunks         at a time, and you may see a decrease in performance as the number of chunks ranked increases.
     * @param requestBody
     * @returns ChunksRankResponse Successful Response
     * @throws ApiError
     */
    public static postV3V2ChunksRank(
        requestBody: ChunksRankRequest,
    ): CancelablePromise<ChunksRankResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/chunks/rank',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Rank Chunks
     * ### Description
     * Sorts a list of text chunks by similarity against a given query string.
     *
     * ### Details
     * Use this API endpoint to rank which text chunks provide the most relevant responses to a         given a query string.
     *
     * This is useful for stuffing chunks into a prompt where order may matter or for filtering out         less relevant chunks according to the ranking strategy. For example, this API may be useful         when doing retrieval augment generation (RAG). Sometimes vector store [similarity search](         https://scale-egp.readme.io/reference/query_vector_store) does not always return the best         ranking of text chunks, since this is heavily dependent on embedding generation. This API         endpoint can act as a post-processing step to re-sort the given chunks using more complex         strategies that may outperform vector search, and then filter only the top-k most relevant         chunks to stuff into the prompt for RAG.
     *
     * ### Restrictions and Limits
     * Ranking can be a very intensive and slow process depending on methodology where duration         scales with number of chunks. For best performance, we recommend ranking less than 640 chunks         at a time, and you may see a decrease in performance as the number of chunks ranked increases.
     * @param requestBody
     * @returns ChunksRankResponse Successful Response
     * @throws ApiError
     */
    public static postV4V2ChunksRank(
        requestBody: ChunksRankRequest,
    ): CancelablePromise<ChunksRankResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/chunks/rank',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
