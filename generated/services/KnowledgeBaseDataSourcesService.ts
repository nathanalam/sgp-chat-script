/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteResponse } from '../models/DeleteResponse';
import type { KnowledgeBaseDataSource } from '../models/KnowledgeBaseDataSource';
import type { KnowledgeBaseDataSourceCreateRequest } from '../models/KnowledgeBaseDataSourceCreateRequest';
import type { KnowledgeBaseDataSourceDelete } from '../models/KnowledgeBaseDataSourceDelete';
import type { KnowledgeBaseDataSourceList } from '../models/KnowledgeBaseDataSourceList';
import type { KnowledgeBaseDataSourceRequest } from '../models/KnowledgeBaseDataSourceRequest';
import type { KnowledgeBaseDataSourceResponse } from '../models/KnowledgeBaseDataSourceResponse';
import type { KnowledgeBaseDataSourceUpdateRequest } from '../models/KnowledgeBaseDataSourceUpdateRequest';
import type { PaginatedKnowledgeBaseDataSourceResponse } from '../models/PaginatedKnowledgeBaseDataSourceResponse';
import type { PartialKnowledgeBaseDataSourceRequest } from '../models/PartialKnowledgeBaseDataSourceRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KnowledgeBaseDataSourcesService {
    /**
     * List Knowledge Base Data Sources
     * ### Description
     * Lists all knowledge base data sources accessible to the user.
     *
     * ### Details
     * This API can be used to list knowledge base data sources. If a user has access to multiple accounts, all knowledge base data sources from all accounts the user is associated with will be returned.
     * @param accountId
     * @param name
     * @param xSelectedAccountId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static getV2KnowledgeBaseDataSources(
        accountId?: (string | null),
        name?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<KnowledgeBaseDataSourceResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-base-data-sources',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Knowledge Base Data Source
     * ### Description
     * Creates a knowledge base data source
     *
     * ### Details
     * This API can be used to create a knowledge base data source. To use this API, review the request schema and pass in all fields that are required to create a knowledge base data source.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static postV2KnowledgeBaseDataSources(
        requestBody: KnowledgeBaseDataSourceRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-base-data-sources',
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
     * Get Knowledge Base Data Source
     * ### Description
     * Gets the details of a knowledge base data source
     *
     * ### Details
     * This API can be used to get information about a single knowledge base data source by ID. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param knowledgeBaseDataSourceId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static getV2KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Knowledge Base Data Source
     * ### Description
     * Updates a knowledge base data source
     *
     * ### Details
     * This API can be used to update the knowledge base data source that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param knowledgeBaseDataSourceId
     * @param requestBody
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static patchV2KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
        requestBody: PartialKnowledgeBaseDataSourceRequest,
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base Data Source
     * ### Description
     * Deletes a knowledge base data source
     *
     * ### Details
     * This API can be used to delete a knowledge base data source by ID. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     * @param knowledgeBaseDataSourceId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Knowledge Base Data Sources
     * ### Description
     * Lists all knowledge base data sources accessible to the user.
     *
     * ### Details
     * This API can be used to list knowledge base data sources. If a user has access to multiple accounts, all knowledge base data sources from all accounts the user is associated with will be returned.
     * @param accountId
     * @param name
     * @param xSelectedAccountId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static getV3KnowledgeBaseDataSources(
        accountId?: (string | null),
        name?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<KnowledgeBaseDataSourceResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-base-data-sources',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Knowledge Base Data Source
     * ### Description
     * Creates a knowledge base data source
     *
     * ### Details
     * This API can be used to create a knowledge base data source. To use this API, review the request schema and pass in all fields that are required to create a knowledge base data source.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static postV3KnowledgeBaseDataSources(
        requestBody: KnowledgeBaseDataSourceRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-base-data-sources',
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
     * Get Knowledge Base Data Source
     * ### Description
     * Gets the details of a knowledge base data source
     *
     * ### Details
     * This API can be used to get information about a single knowledge base data source by ID. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param knowledgeBaseDataSourceId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static getV3KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Knowledge Base Data Source
     * ### Description
     * Updates a knowledge base data source
     *
     * ### Details
     * This API can be used to update the knowledge base data source that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param knowledgeBaseDataSourceId
     * @param requestBody
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static patchV3KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
        requestBody: PartialKnowledgeBaseDataSourceRequest,
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base Data Source
     * ### Description
     * Deletes a knowledge base data source
     *
     * ### Details
     * This API can be used to delete a knowledge base data source by ID. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     * @param knowledgeBaseDataSourceId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Knowledge Base Data Sources
     * ### Description
     * Lists all knowledge base data sources accessible to the user.
     *
     * ### Details
     * This API can be used to list knowledge base data sources. If a user has access to multiple accounts, all knowledge base data sources from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param name
     * @param xSelectedAccountId
     * @returns PaginatedKnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBaseDataSources(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        name?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedKnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-base-data-sources',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Knowledge Base Data Source
     * ### Description
     * Creates a knowledge base data source
     *
     * ### Details
     * This API can be used to create a knowledge base data source. To use this API, review the request schema and pass in all fields that are required to create a knowledge base data source.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static postV4KnowledgeBaseDataSources(
        requestBody: KnowledgeBaseDataSourceRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-base-data-sources',
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
     * Get Knowledge Base Data Source
     * ### Description
     * Gets the details of a knowledge base data source
     *
     * ### Details
     * This API can be used to get information about a single knowledge base data source by ID. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param knowledgeBaseDataSourceId
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Knowledge Base Data Source
     * ### Description
     * Updates a knowledge base data source
     *
     * ### Details
     * This API can be used to update the knowledge base data source that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param knowledgeBaseDataSourceId
     * @param requestBody
     * @returns KnowledgeBaseDataSourceResponse Successful Response
     * @throws ApiError
     */
    public static patchV4KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
        requestBody: PartialKnowledgeBaseDataSourceRequest,
    ): CancelablePromise<KnowledgeBaseDataSourceResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base Data Source
     * ### Description
     * Deletes a knowledge base data source
     *
     * ### Details
     * This API can be used to delete a knowledge base data source by ID. To use this API, pass in the `id` that was returned from your Create Knowledge Base Data Source API call as a path parameter.
     * @param knowledgeBaseDataSourceId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Knowledge Base Data Source
     * @param requestBody
     * @returns KnowledgeBaseDataSource Successful Response
     * @throws ApiError
     */
    public static postV5V5KnowledgeBaseDataSources(
        requestBody: KnowledgeBaseDataSourceCreateRequest,
    ): CancelablePromise<KnowledgeBaseDataSource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/knowledge-base-data-sources',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Knowledge Base Data Sources
     * @param name
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns KnowledgeBaseDataSourceList Successful Response
     * @throws ApiError
     */
    public static getV5V5KnowledgeBaseDataSources(
        name?: (string | null),
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<KnowledgeBaseDataSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/knowledge-base-data-sources',
            query: {
                'name': name,
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
     * Get Knowledge Base Data Source
     * @param knowledgeBaseDataSourceId
     * @returns KnowledgeBaseDataSource Successful Response
     * @throws ApiError
     */
    public static getV5V5KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<KnowledgeBaseDataSource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Knowledge Base Data Source
     * @param knowledgeBaseDataSourceId
     * @param requestBody
     * @returns KnowledgeBaseDataSource Successful Response
     * @throws ApiError
     */
    public static patchV5V5KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
        requestBody: KnowledgeBaseDataSourceUpdateRequest,
    ): CancelablePromise<KnowledgeBaseDataSource> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base Data Source
     * @param knowledgeBaseDataSourceId
     * @returns KnowledgeBaseDataSourceDelete Successful Response
     * @throws ApiError
     */
    public static deleteV5V5KnowledgeBaseDataSourcesKnowledgeBaseDataSourceId(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<KnowledgeBaseDataSourceDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/knowledge-base-data-sources/{knowledge_base_data_source_id}',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Verify Knowledge Base Data Source Credentials
     * @param knowledgeBaseDataSourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV5V5KnowledgeBaseDataSourcesKnowledgeBaseDataSourceIdVerify(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/knowledge-base-data-sources/{knowledge_base_data_source_id}/verify',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
