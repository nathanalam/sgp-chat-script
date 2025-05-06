/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from '../models/Artifact';
import type { ArtifactChunkUpload } from '../models/ArtifactChunkUpload';
import type { AsyncJobAPIStatusEnum } from '../models/AsyncJobAPIStatusEnum';
import type { AsyncJobsEntity } from '../models/AsyncJobsEntity';
import type { Body_POST_V3__knowledge_bases__knowledge_base_id__upload_files } from '../models/Body_POST_V3__knowledge_bases__knowledge_base_id__upload_files';
import type { Body_POST_V4__knowledge_bases__knowledge_base_id__upload_files } from '../models/Body_POST_V4__knowledge_bases__knowledge_base_id__upload_files';
import type { BulkDeleteKnowledgeBaseV2LocalArtifactRequest } from '../models/BulkDeleteKnowledgeBaseV2LocalArtifactRequest';
import type { BulkDeleteKnowledgeBaseV2LocalArtifactResponse } from '../models/BulkDeleteKnowledgeBaseV2LocalArtifactResponse';
import type { CancelKnowledgeBaseV2UploadResponse } from '../models/CancelKnowledgeBaseV2UploadResponse';
import type { ChunkWithStatus } from '../models/ChunkWithStatus';
import type { CreateKnowledgeBaseRequestV2 } from '../models/CreateKnowledgeBaseRequestV2';
import type { CreateKnowledgeBaseResponse } from '../models/CreateKnowledgeBaseResponse';
import type { CreateKnowledgeBaseV2UploadRequest } from '../models/CreateKnowledgeBaseV2UploadRequest';
import type { CreateKnowledgeBaseV2UploadResponse } from '../models/CreateKnowledgeBaseV2UploadResponse';
import type { CreateKnowledgeBaseV2UploadsFromFilesResponse } from '../models/CreateKnowledgeBaseV2UploadsFromFilesResponse';
import type { DeleteChunkFromLocalArtifactResponse } from '../models/DeleteChunkFromLocalArtifactResponse';
import type { DeleteKnowledgeBaseDataSourceConnectionResponse } from '../models/DeleteKnowledgeBaseDataSourceConnectionResponse';
import type { DeleteKnowledgeBaseResponseV2 } from '../models/DeleteKnowledgeBaseResponseV2';
import type { DeleteKnowledgeBaseV2LocalArtifactResponse } from '../models/DeleteKnowledgeBaseV2LocalArtifactResponse';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { egp_api_backend__server__api__models__egp_models__ArtifactUploadStatus } from '../models/egp_api_backend__server__api__models__egp_models__ArtifactUploadStatus';
import type { egp_api_backend__server__internal__entities__ChunkUploadStatus } from '../models/egp_api_backend__server__internal__entities__ChunkUploadStatus';
import type { GenerateKnowledgeBaseV2ArtifactDownloadUrlsRequest } from '../models/GenerateKnowledgeBaseV2ArtifactDownloadUrlsRequest';
import type { GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse } from '../models/GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse';
import type { GenericAsyncJobStatusEnum } from '../models/GenericAsyncJobStatusEnum';
import type { GetChunksResponse } from '../models/GetChunksResponse';
import type { GetKnowledgeBaseV2ArtifactResponse } from '../models/GetKnowledgeBaseV2ArtifactResponse';
import type { GetKnowledgeBaseV2UploadResponse } from '../models/GetKnowledgeBaseV2UploadResponse';
import type { KnowledgeBaseItemV2 } from '../models/KnowledgeBaseItemV2';
import type { KnowledgeBasePatchResponse } from '../models/KnowledgeBasePatchResponse';
import type { KnowledgeBaseUploadScheduleRequest } from '../models/KnowledgeBaseUploadScheduleRequest';
import type { KnowledgeBaseUploadScheduleResponse } from '../models/KnowledgeBaseUploadScheduleResponse';
import type { KnowledgeBaseUploadScheduleResponseWithViews } from '../models/KnowledgeBaseUploadScheduleResponseWithViews';
import type { KnowledgeBaseUploadScheduleViewsOptions } from '../models/KnowledgeBaseUploadScheduleViewsOptions';
import type { KnowledgeBaseView } from '../models/KnowledgeBaseView';
import type { ListKnowledgeBaseEmbeddingModelsResponse } from '../models/ListKnowledgeBaseEmbeddingModelsResponse';
import type { ListKnowledgeBasesResponseV2 } from '../models/ListKnowledgeBasesResponseV2';
import type { ListKnowledgeBaseV2ArtifactsResponse } from '../models/ListKnowledgeBaseV2ArtifactsResponse';
import type { ListKnowledgeBaseV2UploadsResponse } from '../models/ListKnowledgeBaseV2UploadsResponse';
import type { PaginatedArtifactInfo } from '../models/PaginatedArtifactInfo';
import type { PaginatedChunkWithStatus } from '../models/PaginatedChunkWithStatus';
import type { PaginatedKnowledgeBaseItemV2 } from '../models/PaginatedKnowledgeBaseItemV2';
import type { PaginatedKnowledgeBaseUpload } from '../models/PaginatedKnowledgeBaseUpload';
import type { PaginatedKnowledgeBaseUploadScheduleResponseWithViews } from '../models/PaginatedKnowledgeBaseUploadScheduleResponseWithViews';
import type { PartialKnowledgeBaseUploadScheduleRequest } from '../models/PartialKnowledgeBaseUploadScheduleRequest';
import type { PatchArtifactRequest } from '../models/PatchArtifactRequest';
import type { PatchKnowledgeBaseRequestV2 } from '../models/PatchKnowledgeBaseRequestV2';
import type { QueryKnowledgeBaseRequestV2 } from '../models/QueryKnowledgeBaseRequestV2';
import type { QueryKnowledgeBaseResponseV2 } from '../models/QueryKnowledgeBaseResponseV2';
import type { UploadJobStatus } from '../models/UploadJobStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KnowledgeBasesService {
    /**
     * List Tracked Artifacts
     * ### Description
     * List all artifacts tracked by a knowledge base.
     *
     * ### Details
     * This API can be used to list all artifacts that are currently tracked in a knowledge base.         This API will return the details of all artifacts including their IDs, names, the source they         originated from, their current upload statuses, and the timestamps for their creation and
     * last-updated time.
     *
     * This list should be consistent with the state of the data source at the time of start of the         latest upload. If the state is not consistent, create a new upload to update the knowledge         base to reflect the latest state of the data source.
     * @param knowledgeBaseId
     * @param page Page number for pagination to be returned by the list_knowledge_base_artifacts. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the list_knowledge_base_artifacts endpoint. Defaults to 1000 and cannot be greater than 10k.
     * @param status Get artifacts only with the specified status. Accepted values are: Pending, Completed, Failed, Uploading, Deleting
     * @returns ListKnowledgeBaseV2ArtifactsResponse Successful Response
     * @throws ApiError
     */
    public static getV1KnowledgeBasesKnowledgeBaseIdArtifacts(
        knowledgeBaseId: string,
        page: number = 1,
        limit: number = 1000,
        status?: (egp_api_backend__server__api__models__egp_models__ArtifactUploadStatus | null),
    ): CancelablePromise<ListKnowledgeBaseV2ArtifactsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/knowledge-bases/{knowledge_base_id}/artifacts',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'page': page,
                'limit': limit,
                'status': status,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Knowledge Base
     * ### Description
     * Creates an EGP knowledge base.
     *
     * ### Details
     * A knowledge base is a storage device for all data that needs to be accessible to EGP models.         Users can upload data from a variety of data sources into a knowledge base, and then query the         knowledge base for chunks that are semantically relevant to the query.
     *
     * Every knowledge base must be associated with a fixed embedding model. This embedding model         will be used to embed all data that is stored in the knowledge base. The embedding model         cannot be changed once the knowledge base is created. Only the embedding models in the         dropdown menu below are supported.
     *
     * #### Differences from V1
     * - V1 data ingestion consisted of knowledge bases, vector stores, and data connectors.         V1 Knowledge bases interacted with natural language, V1 vector stores interacted with         chunks and embeddings, and V1 data connectors set up automatic ingestion pipelines with third         party data sources.
     * - In V2, all data ingestion is done through knowledge bases. Low level configuration such as         chunking strategies and data sources are now handled by this unified knowledge base v2
     * upload API.
     * - The way data is stores in V2 allows for better observability on the ingestion progress and         content of the knowledge base.
     * - Reliability and scalability is also improved via distributed temporal workflows.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param requestBody
     * @returns CreateKnowledgeBaseResponse Successful Response
     * @throws ApiError
     */
    public static postV2V2KnowledgeBases(
        requestBody: CreateKnowledgeBaseRequestV2,
    ): CancelablePromise<CreateKnowledgeBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-bases',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Knowledge Bases
     * ### Description
     * Lists all knowledge bases owned by the authorized user.
     *
     * ### Details
     * This API can be used to list all knowledge bases that have been created by the user.         This API will return the details of all knowledge bases including their IDs, names, the         embedding models they use, any metadata associated with the knowledge bases, and the         timestamps for their creation, last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param accountId Optional search by account_id
     * @param view
     * @returns ListKnowledgeBasesResponseV2 Successful Response
     * @throws ApiError
     */
    public static getV2KnowledgeBases(
        accountId?: (string | null),
        view?: (Array<KnowledgeBaseView> | null),
    ): CancelablePromise<ListKnowledgeBasesResponseV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases',
            query: {
                'account_id': accountId,
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Knowledge Base
     * ### Description
     * Gets the details of a knowledge base.
     *
     * ### Details
     * This API can be used to get information about a single knowledge base by ID. To use this API,         pass in the `knowledge_base_id` that was returned from your [Create Knowledge Base API](         https://scale-egp.readme.io/reference/create_knowledge_base_v2) call as a path parameter.
     *
     * This API will return the details of a knowledge base including its ID, name, the embedding         model it uses, any metadata associated with the knowledge base, and the timestamps for its
     * creation, last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param includeArtifactsStatus Optional query parameter to include a count of artifacts by status
     * @param view
     * @returns KnowledgeBaseItemV2 Successful Response
     * @throws ApiError
     */
    public static getV2V2KnowledgeBasesKnowledgeBaseId(
        knowledgeBaseId: string,
        includeArtifactsStatus: boolean = false,
        view?: (Array<KnowledgeBaseView> | null),
    ): CancelablePromise<KnowledgeBaseItemV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'include_artifacts_status': includeArtifactsStatus,
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base
     * ### Description
     * Deletes a knowledge base.
     *
     * ### Details
     * This API can be used to delete a knowledge base by ID. To use this API, pass in the         `knowledge_base_id` that was returned from your [Create Knowledge Base API](         https://scale-egp.readme.io/reference/create_knowledge_base_v2) call as a path parameter.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @returns DeleteKnowledgeBaseResponseV2 Successful Response
     * @throws ApiError
     */
    public static deleteV2V2KnowledgeBasesKnowledgeBaseId(
        knowledgeBaseId: string,
    ): CancelablePromise<DeleteKnowledgeBaseResponseV2> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/knowledge-bases/{knowledge_base_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Chunks
     * ### Description
     * Get chunks from a knowledge base using chunk IDs or a matching metadata field. This API will query from the Vector Database using
     * the passed in filters and optionally can return the embeddings.
     *
     * ### Details
     * This API can be used to get a list of chunks from a knowledge base. Given a chunk id,             a metadata field and value, or both, matching chunks are searched for in the knowledge base             given by knowledge base id.
     * @param knowledgeBaseId
     * @param chunkId Optional search by chunk_id
     * @param metadataFilters Optional search by metadata fields, encoded as a JSON object
     * @param maxChunks Maximum number of chunks returned by the get_chunks endpoint. Defaults to 10 and cannot be greater than 2000.
     * @returns GetChunksResponse Successful Response
     * @throws ApiError
     */
    public static getV2V2KnowledgeBasesKnowledgeBaseIdChunks(
        knowledgeBaseId: string,
        chunkId?: (string | null),
        metadataFilters?: (string | null),
        maxChunks: number = 10,
    ): CancelablePromise<GetChunksResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}/chunks',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'chunk_id': chunkId,
                'metadata_filters': metadataFilters,
                'max_chunks': maxChunks,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Query Relevant Chunks
     * ### Description
     * Query a knowledge base for text chunks that are most semantically relevant to the query.
     *
     * ### Details
     * Given a query expressed as an embedding, this API runs a similarity search amongst the         embeddings indexed in the knowledge base to find the most relevant chunk embeddings. To use         this API, specify the `knowledge_base_id` of the knowledge base you want to query, pass in         the natural language `query` that you want to search for, specify the value `top_k`,         which is the number of similar chunks that will be returned, and specify whether you want         the returned chunks to `include_embeddings`.
     *
     * Similarity search is used to efficiently find, retrieve, and rank chunks based on their         similarity to a given query, which is also expressed as an embedding. Similarity scores (         using the cosine similarity metric) are calculated between each chunk embedding and the         embedded query, and the chunks are ranked based on similarity score. The top-ranked chunks         are returned as the query results.
     *
     * We are using the Hierarchical Navigable Small World (HNSW) algorithm to perform a k nearest         neighbors search in the vector space. This algorithm returns an estimate of the best k         nearest neighbors and is optimized for datasets with hundreds of thousands of vectors. You         can read more about the specifics of this algorithm [here](         https://opensearch.org/docs/1.0/search-plugins/knn/approximate-knn/).
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param requestBody
     * @returns QueryKnowledgeBaseResponseV2 Successful Response
     * @throws ApiError
     */
    public static postV2V2KnowledgeBasesKnowledgeBaseIdQuery(
        knowledgeBaseId: string,
        requestBody: QueryKnowledgeBaseRequestV2,
    ): CancelablePromise<QueryKnowledgeBaseResponseV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-bases/{knowledge_base_id}/query',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Upload Job
     * @param knowledgeBaseId
     * @param requestBody
     * @returns CreateKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static postV2V2KnowledgeBasesKnowledgeBaseIdUploads(
        knowledgeBaseId: string,
        requestBody: CreateKnowledgeBaseV2UploadRequest,
    ): CancelablePromise<CreateKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-bases/{knowledge_base_id}/uploads',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Upload Jobs
     * ### Description
     * List all uploads for a knowledge base.
     *
     * ### Details
     * This API can be used to list all uploads that have been created for a knowledge base.         This API will return the details of all uploads including their IDs, their statuses, the         data source configs they use, the chunking strategy configs they use, and the timestamps for         their creation and last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param status
     * @returns ListKnowledgeBaseV2UploadsResponse Successful Response
     * @throws ApiError
     */
    public static getV2KnowledgeBasesKnowledgeBaseIdUploads(
        knowledgeBaseId: string,
        status?: (UploadJobStatus | null),
    ): CancelablePromise<ListKnowledgeBaseV2UploadsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}/uploads',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'status': status,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Upload Job
     * @param knowledgeBaseId
     * @param uploadId
     * @param includeArtifactList
     * @returns GetKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static getV2V2KnowledgeBasesKnowledgeBaseIdUploadsUploadId(
        knowledgeBaseId: string,
        uploadId: string,
        includeArtifactList: boolean = true,
    ): CancelablePromise<GetKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}/uploads/{upload_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_id': uploadId,
            },
            query: {
                'include_artifact_list': includeArtifactList,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Upload Job
     * @param knowledgeBaseId
     * @param uploadId
     * @returns CancelKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static postV2V2KnowledgeBasesKnowledgeBaseIdUploadsUploadIdCancel(
        knowledgeBaseId: string,
        uploadId: string,
    ): CancelablePromise<CancelKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-bases/{knowledge_base_id}/uploads/{upload_id}/cancel',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_id': uploadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Tracked Artifacts
     * ### Description
     * List all artifacts tracked by a knowledge base.
     *
     * ### Details
     * This API can be used to list all artifacts that are currently tracked in a knowledge base.         This API will return the details of all artifacts including their IDs, names, the source they         originated from, their current upload statuses, and the timestamps for their creation and
     * last-updated time.
     *
     * This list should be consistent with the state of the data source at the time of start of the         latest upload. If the state is not consistent, create a new upload to update the knowledge         base to reflect the latest state of the data source.
     * @param knowledgeBaseId
     * @param page Page number for pagination to be returned by the list_knowledge_base_artifacts. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the list_knowledge_base_artifacts endpoint. Defaults to 1000 and cannot be greater than 10k.
     * @param status Get artifacts only with the specified status. Accepted values are: Pending, Completed, Failed, Uploading, Deleting
     * @returns ListKnowledgeBaseV2ArtifactsResponse Successful Response
     * @throws ApiError
     */
    public static getV2KnowledgeBasesKnowledgeBaseIdArtifacts(
        knowledgeBaseId: string,
        page: number = 1,
        limit: number = 1000,
        status?: (egp_api_backend__server__api__models__egp_models__ArtifactUploadStatus | null),
    ): CancelablePromise<ListKnowledgeBaseV2ArtifactsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}/artifacts',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'page': page,
                'limit': limit,
                'status': status,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Tracked Artifact Details
     * ### Description
     * Gets the details of an artifact tracked by a knowledge base.
     *
     * ### Details
     * This API can be used to get information about a single artifact by ID. This response will         contain much more detail about the artifact than show in the         [List Artifacts API](https://scale-egp.readme.io/reference/list_knowledge_base_artifacts_v2)         call. To use this API, pass in the `knowledge_base_id` and `artifact_id` that were returned         from your [List Artifacts API](         https://scale-egp.readme.io/reference/list_knowledge_base_artifacts_v2) call as path         parameters.
     *
     * #### Compatibility with V1
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param artifactId
     * @param statusFilter
     * @returns GetKnowledgeBaseV2ArtifactResponse Successful Response
     * @throws ApiError
     */
    public static getV2V2KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
        statusFilter?: (string | null),
    ): CancelablePromise<GetKnowledgeBaseV2ArtifactResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            query: {
                'status_filter': statusFilter,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Artifact Information
     * @param knowledgeBaseId
     * @param artifactId
     * @param requestBody
     * @returns Artifact Successful Response
     * @throws ApiError
     */
    public static patchV2KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
        requestBody: PatchArtifactRequest,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Locally Stored Artifact
     * @param knowledgeBaseId
     * @param artifactId
     * @returns DeleteKnowledgeBaseV2LocalArtifactResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
    ): CancelablePromise<DeleteKnowledgeBaseV2LocalArtifactResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Batch Delete Locally Stored Artifacts
     * @param knowledgeBaseId
     * @param requestBody
     * @returns BulkDeleteKnowledgeBaseV2LocalArtifactResponse Successful Response
     * @throws ApiError
     */
    public static postV2KnowledgeBasesKnowledgeBaseIdArtifactsBatchDelete(
        knowledgeBaseId: string,
        requestBody: BulkDeleteKnowledgeBaseV2LocalArtifactRequest,
    ): CancelablePromise<BulkDeleteKnowledgeBaseV2LocalArtifactResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-bases/{knowledge_base_id}/artifacts/batch-delete',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Upload Schedules
     * ### Description
     * Lists all upload schedules accessible to the user.
     *
     * ### Details
     * This API can be used to list upload schedules. If a user has access to multiple accounts, all upload schedules from all accounts the user is associated with will be returned.
     * @param knowledgeBaseId
     * @param view
     * @param accountId
     * @param xSelectedAccountId
     * @returns KnowledgeBaseUploadScheduleResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV2KnowledgeBasesKnowledgeBaseIdUploadSchedules(
        knowledgeBaseId: string,
        view?: (Array<KnowledgeBaseUploadScheduleViewsOptions> | null),
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<KnowledgeBaseUploadScheduleResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}/upload-schedules',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Upload Schedule
     * ### Description
     * Creates a upload schedule
     *
     * ### Details
     * This API can be used to create a upload schedule. To use this API, review the request schema and pass in all fields that are required to create a upload schedule.
     * @param knowledgeBaseId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns KnowledgeBaseUploadScheduleResponse Successful Response
     * @throws ApiError
     */
    public static postV2KnowledgeBasesKnowledgeBaseIdUploadSchedules(
        knowledgeBaseId: string,
        requestBody: KnowledgeBaseUploadScheduleRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-bases/{knowledge_base_id}/upload-schedules',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
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
     * Get Upload Schedule
     * ### Description
     * Gets the details of a upload schedule
     *
     * ### Details
     * This API can be used to get information about a single upload schedule by ID. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @param view
     * @returns KnowledgeBaseUploadScheduleResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV2KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
        view?: (Array<KnowledgeBaseUploadScheduleViewsOptions> | null),
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Upload Schedule
     * ### Description
     * Updates a upload schedule
     *
     * ### Details
     * This API can be used to update the upload schedule that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @param requestBody
     * @returns KnowledgeBaseUploadScheduleResponse Successful Response
     * @throws ApiError
     */
    public static patchV2KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
        requestBody: PartialKnowledgeBaseUploadScheduleRequest,
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v2/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Upload Schedule
     * ### Description
     * Deletes a upload schedule
     *
     * ### Details
     * This API can be used to delete a upload schedule by ID. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV2KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Knowledge Base
     * ### Description
     * Creates an EGP knowledge base.
     *
     * ### Details
     * A knowledge base is a storage device for all data that needs to be accessible to EGP models.         Users can upload data from a variety of data sources into a knowledge base, and then query the         knowledge base for chunks that are semantically relevant to the query.
     *
     * Every knowledge base must be associated with a fixed embedding model. This embedding model         will be used to embed all data that is stored in the knowledge base. The embedding model         cannot be changed once the knowledge base is created. Only the embedding models in the         dropdown menu below are supported.
     *
     * #### Differences from V1
     * - V1 data ingestion consisted of knowledge bases, vector stores, and data connectors.         V1 Knowledge bases interacted with natural language, V1 vector stores interacted with         chunks and embeddings, and V1 data connectors set up automatic ingestion pipelines with third         party data sources.
     * - In V2, all data ingestion is done through knowledge bases. Low level configuration such as         chunking strategies and data sources are now handled by this unified knowledge base v2
     * upload API.
     * - The way data is stores in V2 allows for better observability on the ingestion progress and         content of the knowledge base.
     * - Reliability and scalability is also improved via distributed temporal workflows.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param requestBody
     * @returns CreateKnowledgeBaseResponse Successful Response
     * @throws ApiError
     */
    public static postV3V2KnowledgeBases(
        requestBody: CreateKnowledgeBaseRequestV2,
    ): CancelablePromise<CreateKnowledgeBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Knowledge Bases
     * ### Description
     * Lists all knowledge bases owned by the authorized user.
     *
     * ### Details
     * This API can be used to list all knowledge bases that have been created by the user.         This API will return the details of all knowledge bases including their IDs, names, the         embedding models they use, any metadata associated with the knowledge bases, and the         timestamps for their creation, last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param accountId Optional search by account_id
     * @param view
     * @returns ListKnowledgeBasesResponseV2 Successful Response
     * @throws ApiError
     */
    public static getV3KnowledgeBases(
        accountId?: (string | null),
        view?: (Array<KnowledgeBaseView> | null),
    ): CancelablePromise<ListKnowledgeBasesResponseV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases',
            query: {
                'account_id': accountId,
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Knowledge Base
     * ### Description
     * Gets the details of a knowledge base.
     *
     * ### Details
     * This API can be used to get information about a single knowledge base by ID. To use this API,         pass in the `knowledge_base_id` that was returned from your [Create Knowledge Base API](         https://scale-egp.readme.io/reference/create_knowledge_base_v2) call as a path parameter.
     *
     * This API will return the details of a knowledge base including its ID, name, the embedding         model it uses, any metadata associated with the knowledge base, and the timestamps for its
     * creation, last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param includeArtifactsStatus Optional query parameter to include a count of artifacts by status
     * @param view
     * @returns KnowledgeBaseItemV2 Successful Response
     * @throws ApiError
     */
    public static getV3V2KnowledgeBasesKnowledgeBaseId(
        knowledgeBaseId: string,
        includeArtifactsStatus: boolean = false,
        view?: (Array<KnowledgeBaseView> | null),
    ): CancelablePromise<KnowledgeBaseItemV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'include_artifacts_status': includeArtifactsStatus,
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base
     * ### Description
     * Deletes a knowledge base.
     *
     * ### Details
     * This API can be used to delete a knowledge base by ID. To use this API, pass in the         `knowledge_base_id` that was returned from your [Create Knowledge Base API](         https://scale-egp.readme.io/reference/create_knowledge_base_v2) call as a path parameter.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @returns DeleteKnowledgeBaseResponseV2 Successful Response
     * @throws ApiError
     */
    public static deleteV3V2KnowledgeBasesKnowledgeBaseId(
        knowledgeBaseId: string,
    ): CancelablePromise<DeleteKnowledgeBaseResponseV2> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/knowledge-bases/{knowledge_base_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Chunks
     * ### Description
     * Get chunks from a knowledge base using chunk IDs or a matching metadata field. This API will query from the Vector Database using
     * the passed in filters and optionally can return the embeddings.
     *
     * ### Details
     * This API can be used to get a list of chunks from a knowledge base. Given a chunk id,             a metadata field and value, or both, matching chunks are searched for in the knowledge base             given by knowledge base id.
     * @param knowledgeBaseId
     * @param chunkId Optional search by chunk_id
     * @param metadataFilters Optional search by metadata fields, encoded as a JSON object
     * @param maxChunks Maximum number of chunks returned by the get_chunks endpoint. Defaults to 10 and cannot be greater than 2000.
     * @returns GetChunksResponse Successful Response
     * @throws ApiError
     */
    public static getV3V2KnowledgeBasesKnowledgeBaseIdChunks(
        knowledgeBaseId: string,
        chunkId?: (string | null),
        metadataFilters?: (string | null),
        maxChunks: number = 10,
    ): CancelablePromise<GetChunksResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}/chunks',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'chunk_id': chunkId,
                'metadata_filters': metadataFilters,
                'max_chunks': maxChunks,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Query Relevant Chunks
     * ### Description
     * Query a knowledge base for text chunks that are most semantically relevant to the query.
     *
     * ### Details
     * Given a query expressed as an embedding, this API runs a similarity search amongst the         embeddings indexed in the knowledge base to find the most relevant chunk embeddings. To use         this API, specify the `knowledge_base_id` of the knowledge base you want to query, pass in         the natural language `query` that you want to search for, specify the value `top_k`,         which is the number of similar chunks that will be returned, and specify whether you want         the returned chunks to `include_embeddings`.
     *
     * Similarity search is used to efficiently find, retrieve, and rank chunks based on their         similarity to a given query, which is also expressed as an embedding. Similarity scores (         using the cosine similarity metric) are calculated between each chunk embedding and the         embedded query, and the chunks are ranked based on similarity score. The top-ranked chunks         are returned as the query results.
     *
     * We are using the Hierarchical Navigable Small World (HNSW) algorithm to perform a k nearest         neighbors search in the vector space. This algorithm returns an estimate of the best k         nearest neighbors and is optimized for datasets with hundreds of thousands of vectors. You         can read more about the specifics of this algorithm [here](         https://opensearch.org/docs/1.0/search-plugins/knn/approximate-knn/).
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param requestBody
     * @returns QueryKnowledgeBaseResponseV2 Successful Response
     * @throws ApiError
     */
    public static postV3V2KnowledgeBasesKnowledgeBaseIdQuery(
        knowledgeBaseId: string,
        requestBody: QueryKnowledgeBaseRequestV2,
    ): CancelablePromise<QueryKnowledgeBaseResponseV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/query',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base Data Source Connection
     * @param knowledgeBaseId
     * @param knowledgeBaseDataSourceId
     * @param dryRun Dryrun query parameter to determine first how many things will be deleted
     * @returns DeleteKnowledgeBaseDataSourceConnectionResponse Successful Response
     * @throws ApiError
     */
    public static postV3KnowledgeBasesKnowledgeBaseIdDataSourceConnectionsKnowledgeBaseDataSourceIdDelete(
        knowledgeBaseId: string,
        knowledgeBaseDataSourceId: string,
        dryRun: boolean = false,
    ): CancelablePromise<DeleteKnowledgeBaseDataSourceConnectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/data-source-connections/{knowledge_base_data_source_id}/delete',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            query: {
                'dry_run': dryRun,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Upload Job with local files
     * @param knowledgeBaseId
     * @param formData
     * @returns CreateKnowledgeBaseV2UploadsFromFilesResponse Successful Response
     * @throws ApiError
     */
    public static postV3KnowledgeBasesKnowledgeBaseIdUploadFiles(
        knowledgeBaseId: string,
        formData: Body_POST_V3__knowledge_bases__knowledge_base_id__upload_files,
    ): CancelablePromise<CreateKnowledgeBaseV2UploadsFromFilesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/upload_files',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Upload Job
     * @param knowledgeBaseId
     * @param requestBody
     * @returns CreateKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static postV3V2KnowledgeBasesKnowledgeBaseIdUploads(
        knowledgeBaseId: string,
        requestBody: CreateKnowledgeBaseV2UploadRequest,
    ): CancelablePromise<CreateKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/uploads',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Upload Jobs
     * ### Description
     * List all uploads for a knowledge base.
     *
     * ### Details
     * This API can be used to list all uploads that have been created for a knowledge base.         This API will return the details of all uploads including their IDs, their statuses, the         data source configs they use, the chunking strategy configs they use, and the timestamps for         their creation and last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param status
     * @returns ListKnowledgeBaseV2UploadsResponse Successful Response
     * @throws ApiError
     */
    public static getV3KnowledgeBasesKnowledgeBaseIdUploads(
        knowledgeBaseId: string,
        status?: (UploadJobStatus | null),
    ): CancelablePromise<ListKnowledgeBaseV2UploadsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}/uploads',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'status': status,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Upload Job
     * @param knowledgeBaseId
     * @param uploadId
     * @param includeArtifactList
     * @returns GetKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static getV3V2KnowledgeBasesKnowledgeBaseIdUploadsUploadId(
        knowledgeBaseId: string,
        uploadId: string,
        includeArtifactList: boolean = true,
    ): CancelablePromise<GetKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}/uploads/{upload_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_id': uploadId,
            },
            query: {
                'include_artifact_list': includeArtifactList,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Upload Job
     * @param knowledgeBaseId
     * @param uploadId
     * @returns CancelKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static postV3V2KnowledgeBasesKnowledgeBaseIdUploadsUploadIdCancel(
        knowledgeBaseId: string,
        uploadId: string,
    ): CancelablePromise<CancelKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/uploads/{upload_id}/cancel',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_id': uploadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Tracked Artifacts
     * ### Description
     * List all artifacts tracked by a knowledge base.
     *
     * ### Details
     * This API can be used to list all artifacts that are currently tracked in a knowledge base.         This API will return the details of all artifacts including their IDs, names, the source they         originated from, their current upload statuses, and the timestamps for their creation and
     * last-updated time.
     *
     * This list should be consistent with the state of the data source at the time of start of the         latest upload. If the state is not consistent, create a new upload to update the knowledge         base to reflect the latest state of the data source.
     * @param knowledgeBaseId
     * @param page Page number for pagination to be returned by the list_knowledge_base_artifacts. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the list_knowledge_base_artifacts endpoint. Defaults to 1000 and cannot be greater than 10k.
     * @param status Get artifacts only with the specified status. Accepted values are: Pending, Completed, Failed, Uploading, Deleting
     * @returns ListKnowledgeBaseV2ArtifactsResponse Successful Response
     * @throws ApiError
     */
    public static getV3KnowledgeBasesKnowledgeBaseIdArtifacts(
        knowledgeBaseId: string,
        page: number = 1,
        limit: number = 1000,
        status?: (egp_api_backend__server__api__models__egp_models__ArtifactUploadStatus | null),
    ): CancelablePromise<ListKnowledgeBaseV2ArtifactsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}/artifacts',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'page': page,
                'limit': limit,
                'status': status,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Tracked Artifact Details
     * ### Description
     * Gets the details of an artifact tracked by a knowledge base.
     *
     * ### Details
     * This API can be used to get information about a single artifact by ID. This response will         contain much more detail about the artifact than show in the         [List Artifacts API](https://scale-egp.readme.io/reference/list_knowledge_base_artifacts_v2)         call. To use this API, pass in the `knowledge_base_id` and `artifact_id` that were returned         from your [List Artifacts API](         https://scale-egp.readme.io/reference/list_knowledge_base_artifacts_v2) call as path         parameters.
     *
     * #### Compatibility with V1
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param artifactId
     * @param statusFilter
     * @returns GetKnowledgeBaseV2ArtifactResponse Successful Response
     * @throws ApiError
     */
    public static getV3V2KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
        statusFilter?: (string | null),
    ): CancelablePromise<GetKnowledgeBaseV2ArtifactResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            query: {
                'status_filter': statusFilter,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Artifact Information
     * @param knowledgeBaseId
     * @param artifactId
     * @param requestBody
     * @returns Artifact Successful Response
     * @throws ApiError
     */
    public static patchV3KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
        requestBody: PatchArtifactRequest,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Locally Stored Artifact
     * @param knowledgeBaseId
     * @param artifactId
     * @returns DeleteKnowledgeBaseV2LocalArtifactResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
    ): CancelablePromise<DeleteKnowledgeBaseV2LocalArtifactResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Test Knowledge Base Data Source credentials
     * @param knowledgeBaseDataSourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV3V3KnowledgeBaseDataSourcesKnowledgeBaseDataSourceIdVerify(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-base-data-sources/{knowledge_base_data_source_id}/verify',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Batch Delete Locally Stored Artifacts
     * @param knowledgeBaseId
     * @param requestBody
     * @returns BulkDeleteKnowledgeBaseV2LocalArtifactResponse Successful Response
     * @throws ApiError
     */
    public static postV3KnowledgeBasesKnowledgeBaseIdArtifactsBatchDelete(
        knowledgeBaseId: string,
        requestBody: BulkDeleteKnowledgeBaseV2LocalArtifactRequest,
    ): CancelablePromise<BulkDeleteKnowledgeBaseV2LocalArtifactResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/artifacts/batch-delete',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Upload Schedules
     * ### Description
     * Lists all upload schedules accessible to the user.
     *
     * ### Details
     * This API can be used to list upload schedules. If a user has access to multiple accounts, all upload schedules from all accounts the user is associated with will be returned.
     * @param knowledgeBaseId
     * @param view
     * @param accountId
     * @param xSelectedAccountId
     * @returns KnowledgeBaseUploadScheduleResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV3KnowledgeBasesKnowledgeBaseIdUploadSchedules(
        knowledgeBaseId: string,
        view?: (Array<KnowledgeBaseUploadScheduleViewsOptions> | null),
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<KnowledgeBaseUploadScheduleResponseWithViews>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}/upload-schedules',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Upload Schedule
     * ### Description
     * Creates a upload schedule
     *
     * ### Details
     * This API can be used to create a upload schedule. To use this API, review the request schema and pass in all fields that are required to create a upload schedule.
     * @param knowledgeBaseId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns KnowledgeBaseUploadScheduleResponse Successful Response
     * @throws ApiError
     */
    public static postV3KnowledgeBasesKnowledgeBaseIdUploadSchedules(
        knowledgeBaseId: string,
        requestBody: KnowledgeBaseUploadScheduleRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/upload-schedules',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
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
     * Get Upload Schedule
     * ### Description
     * Gets the details of a upload schedule
     *
     * ### Details
     * This API can be used to get information about a single upload schedule by ID. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @param view
     * @returns KnowledgeBaseUploadScheduleResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV3KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
        view?: (Array<KnowledgeBaseUploadScheduleViewsOptions> | null),
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Upload Schedule
     * ### Description
     * Updates a upload schedule
     *
     * ### Details
     * This API can be used to update the upload schedule that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @param requestBody
     * @returns KnowledgeBaseUploadScheduleResponse Successful Response
     * @throws ApiError
     */
    public static patchV3KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
        requestBody: PartialKnowledgeBaseUploadScheduleRequest,
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v3/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Upload Schedule
     * ### Description
     * Deletes a upload schedule
     *
     * ### Details
     * This API can be used to delete a upload schedule by ID. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV3KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v3/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Knowledge Base
     * ### Description
     * Creates an EGP knowledge base.
     *
     * ### Details
     * A knowledge base is a storage device for all data that needs to be accessible to EGP models.         Users can upload data from a variety of data sources into a knowledge base, and then query the         knowledge base for chunks that are semantically relevant to the query.
     *
     * Every knowledge base must be associated with a fixed embedding model. This embedding model         will be used to embed all data that is stored in the knowledge base. The embedding model         cannot be changed once the knowledge base is created. Only the embedding models in the         dropdown menu below are supported.
     *
     * #### Differences from V1
     * - V1 data ingestion consisted of knowledge bases, vector stores, and data connectors.         V1 Knowledge bases interacted with natural language, V1 vector stores interacted with         chunks and embeddings, and V1 data connectors set up automatic ingestion pipelines with third         party data sources.
     * - In V2, all data ingestion is done through knowledge bases. Low level configuration such as         chunking strategies and data sources are now handled by this unified knowledge base v2
     * upload API.
     * - The way data is stores in V2 allows for better observability on the ingestion progress and         content of the knowledge base.
     * - Reliability and scalability is also improved via distributed temporal workflows.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param requestBody
     * @returns CreateKnowledgeBaseResponse Successful Response
     * @throws ApiError
     */
    public static postV4V2KnowledgeBases(
        requestBody: CreateKnowledgeBaseRequestV2,
    ): CancelablePromise<CreateKnowledgeBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Knowledge Bases
     * ### Description
     * Lists all knowledge bases owned by the authorized user.
     *
     * ### Details
     * This API can be used to list all knowledge bases that have been created by the user.         This API will return the details of all knowledge bases including their IDs, names, the         embedding models they use, any metadata associated with the knowledge bases, and the         timestamps for their creation, last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param accountId Optional search by account_id
     * @param view
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedKnowledgeBaseItemV2 Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBases(
        accountId?: (string | null),
        view?: (Array<KnowledgeBaseView> | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedKnowledgeBaseItemV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases',
            query: {
                'account_id': accountId,
                'view': view,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Knowledge Base
     * ### Description
     * Gets the details of a knowledge base.
     *
     * ### Details
     * This API can be used to get information about a single knowledge base by ID. To use this API,         pass in the `knowledge_base_id` that was returned from your [Create Knowledge Base API](         https://scale-egp.readme.io/reference/create_knowledge_base_v2) call as a path parameter.
     *
     * This API will return the details of a knowledge base including its ID, name, the embedding         model it uses, any metadata associated with the knowledge base, and the timestamps for its
     * creation, last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param includeArtifactsStatus Optional query parameter to include a count of artifacts by status
     * @param view
     * @returns KnowledgeBaseItemV2 Successful Response
     * @throws ApiError
     */
    public static getV4V2KnowledgeBasesKnowledgeBaseId(
        knowledgeBaseId: string,
        includeArtifactsStatus: boolean = false,
        view?: (Array<KnowledgeBaseView> | null),
    ): CancelablePromise<KnowledgeBaseItemV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'include_artifacts_status': includeArtifactsStatus,
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Knowledge Base
     * @param knowledgeBaseId
     * @param requestBody
     * @returns KnowledgeBasePatchResponse Successful Response
     * @throws ApiError
     */
    public static patchV4V4KnowledgeBasesKnowledgeBaseId(
        knowledgeBaseId: string,
        requestBody: PatchKnowledgeBaseRequestV2,
    ): CancelablePromise<KnowledgeBasePatchResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/knowledge-bases/{knowledge_base_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base
     * ### Description
     * Deletes a knowledge base.
     *
     * ### Details
     * This API can be used to delete a knowledge base by ID. To use this API, pass in the         `knowledge_base_id` that was returned from your [Create Knowledge Base API](         https://scale-egp.readme.io/reference/create_knowledge_base_v2) call as a path parameter.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @returns DeleteKnowledgeBaseResponseV2 Successful Response
     * @throws ApiError
     */
    public static deleteV4V2KnowledgeBasesKnowledgeBaseId(
        knowledgeBaseId: string,
    ): CancelablePromise<DeleteKnowledgeBaseResponseV2> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/knowledge-bases/{knowledge_base_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Upload Jobs
     * @param knowledgeBaseId
     * @param status Optional search by status type
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns AsyncJobsEntity Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBasesKnowledgeBaseIdAsyncJobs(
        knowledgeBaseId: string,
        status?: (AsyncJobAPIStatusEnum | GenericAsyncJobStatusEnum),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<Array<AsyncJobsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/async-jobs',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'status': status,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Chunks
     * ### Description
     * Get chunks from a knowledge base using chunk IDs or a matching metadata field. This API will query from the Vector Database using
     * the passed in filters and optionally can return the embeddings.
     *
     * ### Details
     * This API can be used to get a list of chunks from a knowledge base. Given a chunk id,             a metadata field and value, or both, matching chunks are searched for in the knowledge base             given by knowledge base id.
     * @param knowledgeBaseId
     * @param chunkId Optional search by chunk_id
     * @param metadataFilters Optional search by metadata fields, encoded as a JSON object
     * @param maxChunks Maximum number of chunks returned by the get_chunks endpoint. Defaults to 10 and cannot be greater than 2000.
     * @returns GetChunksResponse Successful Response
     * @throws ApiError
     */
    public static getV4V2KnowledgeBasesKnowledgeBaseIdChunks(
        knowledgeBaseId: string,
        chunkId?: (string | null),
        metadataFilters?: (string | null),
        maxChunks: number = 10,
    ): CancelablePromise<GetChunksResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/chunks',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'chunk_id': chunkId,
                'metadata_filters': metadataFilters,
                'max_chunks': maxChunks,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Query Relevant Chunks
     * ### Description
     * Query a knowledge base for text chunks that are most semantically relevant to the query.
     *
     * ### Details
     * Given a query expressed as an embedding, this API runs a similarity search amongst the         embeddings indexed in the knowledge base to find the most relevant chunk embeddings. To use         this API, specify the `knowledge_base_id` of the knowledge base you want to query, pass in         the natural language `query` that you want to search for, specify the value `top_k`,         which is the number of similar chunks that will be returned, and specify whether you want         the returned chunks to `include_embeddings`.
     *
     * Similarity search is used to efficiently find, retrieve, and rank chunks based on their         similarity to a given query, which is also expressed as an embedding. Similarity scores (         using the cosine similarity metric) are calculated between each chunk embedding and the         embedded query, and the chunks are ranked based on similarity score. The top-ranked chunks         are returned as the query results.
     *
     * We are using the Hierarchical Navigable Small World (HNSW) algorithm to perform a k nearest         neighbors search in the vector space. This algorithm returns an estimate of the best k         nearest neighbors and is optimized for datasets with hundreds of thousands of vectors. You         can read more about the specifics of this algorithm [here](         https://opensearch.org/docs/1.0/search-plugins/knn/approximate-knn/).
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param requestBody
     * @returns QueryKnowledgeBaseResponseV2 Successful Response
     * @throws ApiError
     */
    public static postV4V2KnowledgeBasesKnowledgeBaseIdQuery(
        knowledgeBaseId: string,
        requestBody: QueryKnowledgeBaseRequestV2,
    ): CancelablePromise<QueryKnowledgeBaseResponseV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/query',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Knowledge Base Data Source Connection
     * @param knowledgeBaseId
     * @param knowledgeBaseDataSourceId
     * @param dryRun Dryrun query parameter to determine first how many things will be deleted
     * @returns DeleteKnowledgeBaseDataSourceConnectionResponse Successful Response
     * @throws ApiError
     */
    public static postV4KnowledgeBasesKnowledgeBaseIdDataSourceConnectionsKnowledgeBaseDataSourceIdDelete(
        knowledgeBaseId: string,
        knowledgeBaseDataSourceId: string,
        dryRun: boolean = false,
    ): CancelablePromise<DeleteKnowledgeBaseDataSourceConnectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/data-source-connections/{knowledge_base_data_source_id}/delete',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            query: {
                'dry_run': dryRun,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Upload Job with local files
     * @param knowledgeBaseId
     * @param formData
     * @returns CreateKnowledgeBaseV2UploadsFromFilesResponse Successful Response
     * @throws ApiError
     */
    public static postV4KnowledgeBasesKnowledgeBaseIdUploadFiles(
        knowledgeBaseId: string,
        formData: Body_POST_V4__knowledge_bases__knowledge_base_id__upload_files,
    ): CancelablePromise<CreateKnowledgeBaseV2UploadsFromFilesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/upload_files',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Upload Job
     * @param knowledgeBaseId
     * @param requestBody
     * @returns CreateKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static postV4V2KnowledgeBasesKnowledgeBaseIdUploads(
        knowledgeBaseId: string,
        requestBody: CreateKnowledgeBaseV2UploadRequest,
    ): CancelablePromise<CreateKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/uploads',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Upload Jobs
     * ### Description
     * List all uploads for a knowledge base.
     *
     * ### Details
     * This API can be used to list all uploads that have been created for a knowledge base.         This API will return the details of all uploads including their IDs, their statuses, the         data source configs they use, the chunking strategy configs they use, and the timestamps for         their creation and last-updated time.
     *
     * #### Backwards Compatibility
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param status
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedKnowledgeBaseUpload Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBasesKnowledgeBaseIdUploads(
        knowledgeBaseId: string,
        status?: (UploadJobStatus | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedKnowledgeBaseUpload> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/uploads',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'status': status,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Upload Job
     * @param knowledgeBaseId
     * @param uploadId
     * @param includeArtifactList
     * @returns GetKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static getV4V2KnowledgeBasesKnowledgeBaseIdUploadsUploadId(
        knowledgeBaseId: string,
        uploadId: string,
        includeArtifactList: boolean = true,
    ): CancelablePromise<GetKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/uploads/{upload_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_id': uploadId,
            },
            query: {
                'include_artifact_list': includeArtifactList,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Upload Job
     * @param knowledgeBaseId
     * @param uploadId
     * @returns CancelKnowledgeBaseV2UploadResponse Successful Response
     * @throws ApiError
     */
    public static postV4V2KnowledgeBasesKnowledgeBaseIdUploadsUploadIdCancel(
        knowledgeBaseId: string,
        uploadId: string,
    ): CancelablePromise<CancelKnowledgeBaseV2UploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/uploads/{upload_id}/cancel',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_id': uploadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Tracked Artifacts
     * ### Description
     * List all artifacts tracked by a knowledge base.
     *
     * ### Details
     * This API can be used to list all artifacts that are currently tracked in a knowledge base.         This API will return the details of all artifacts including their IDs, names, the source they         originated from, their current upload statuses, and the timestamps for their creation and
     * last-updated time.
     *
     * This list should be consistent with the state of the data source at the time of start of the         latest upload. If the state is not consistent, create a new upload to update the knowledge         base to reflect the latest state of the data source.
     * @param knowledgeBaseId
     * @param status Get artifacts only with the specified status. Accepted values are: Pending, Completed, Failed, Uploading, Deleting
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedArtifactInfo Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBasesKnowledgeBaseIdArtifacts(
        knowledgeBaseId: string,
        status?: (egp_api_backend__server__api__models__egp_models__ArtifactUploadStatus | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedArtifactInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            query: {
                'status': status,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Tracked Artifact Details
     * ### Description
     * Gets the details of an artifact tracked by a knowledge base.
     *
     * ### Details
     * This API can be used to get information about a single artifact by ID. This response will         contain much more detail about the artifact than show in the         [List Artifacts API](https://scale-egp.readme.io/reference/list_knowledge_base_artifacts_v2)         call. To use this API, pass in the `knowledge_base_id` and `artifact_id` that were returned         from your [List Artifacts API](         https://scale-egp.readme.io/reference/list_knowledge_base_artifacts_v2) call as path         parameters.
     *
     * #### Compatibility with V1
     * V2 and V1 Knowledge Bases are entirely separate and not backwards compatible. Users who         have existing V1 knowledge bases will need to migrate their data to V2 knowledge bases.
     * @param knowledgeBaseId
     * @param artifactId
     * @param statusFilter
     * @returns GetKnowledgeBaseV2ArtifactResponse Successful Response
     * @throws ApiError
     */
    public static getV4V2KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
        statusFilter?: (string | null),
    ): CancelablePromise<GetKnowledgeBaseV2ArtifactResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            query: {
                'status_filter': statusFilter,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Artifact Information
     * @param knowledgeBaseId
     * @param artifactId
     * @param requestBody
     * @returns Artifact Successful Response
     * @throws ApiError
     */
    public static patchV4KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
        requestBody: PatchArtifactRequest,
    ): CancelablePromise<Artifact> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Locally Stored Artifact
     * @param knowledgeBaseId
     * @param artifactId
     * @returns DeleteKnowledgeBaseV2LocalArtifactResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4KnowledgeBasesKnowledgeBaseIdArtifactsArtifactId(
        knowledgeBaseId: string,
        artifactId: string,
    ): CancelablePromise<DeleteKnowledgeBaseV2LocalArtifactResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Chunks of Artifacts with Pagination
     * ### Description
     * List chunks for a specific artifact. This API supports pagination and reads only from the data store to allow
     * querying chunks that are failed as well to enumerate all chunks of a specific artifact.
     * @param knowledgeBaseId
     * @param artifactId
     * @param chunkStatus Filter by the status of the chunks
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedChunkWithStatus Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBasesKnowledgeBaseIdArtifactsArtifactIdChunks(
        knowledgeBaseId: string,
        artifactId: string,
        chunkStatus?: (egp_api_backend__server__internal__entities__ChunkUploadStatus | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedChunkWithStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}/chunks',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            query: {
                'chunk_status': chunkStatus,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create chunk for local chunk artifacts
     * @param knowledgeBaseId
     * @param artifactId
     * @param requestBody
     * @returns ChunkWithStatus Successful Response
     * @throws ApiError
     */
    public static postV4KnowledgeBasesKnowledgeBaseIdArtifactsArtifactIdChunks(
        knowledgeBaseId: string,
        artifactId: string,
        requestBody: ArtifactChunkUpload,
    ): CancelablePromise<ChunkWithStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}/chunks',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Single Chunk Information and status
     * @param knowledgeBaseId
     * @param artifactId
     * @param chunkId
     * @returns ChunkWithStatus Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBasesKnowledgeBaseIdArtifactsArtifactIdChunksChunkId(
        knowledgeBaseId: string,
        artifactId: string,
        chunkId: string,
    ): CancelablePromise<ChunkWithStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}/chunks/{chunk_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
                'chunk_id': chunkId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Single Chunk data for local artifact
     * @param knowledgeBaseId
     * @param artifactId
     * @param chunkId
     * @param requestBody
     * @returns ChunkWithStatus Successful Response
     * @throws ApiError
     */
    public static putV4KnowledgeBasesKnowledgeBaseIdArtifactsArtifactIdChunksChunkId(
        knowledgeBaseId: string,
        artifactId: string,
        chunkId: string,
        requestBody: ArtifactChunkUpload,
    ): CancelablePromise<ChunkWithStatus> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}/chunks/{chunk_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
                'chunk_id': chunkId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Single Chunk from Local Artifact
     * @param knowledgeBaseId
     * @param artifactId
     * @param chunkId
     * @returns DeleteChunkFromLocalArtifactResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4KnowledgeBasesKnowledgeBaseIdArtifactsArtifactIdChunksChunkId(
        knowledgeBaseId: string,
        artifactId: string,
        chunkId: string,
    ): CancelablePromise<DeleteChunkFromLocalArtifactResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/{artifact_id}/chunks/{chunk_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'artifact_id': artifactId,
                'chunk_id': chunkId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Test Knowledge Base Data Source credentials
     * @param knowledgeBaseDataSourceId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4V3KnowledgeBaseDataSourcesKnowledgeBaseDataSourceIdVerify(
        knowledgeBaseDataSourceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-base-data-sources/{knowledge_base_data_source_id}/verify',
            path: {
                'knowledge_base_data_source_id': knowledgeBaseDataSourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Batch Delete Locally Stored Artifacts
     * @param knowledgeBaseId
     * @param requestBody
     * @returns BulkDeleteKnowledgeBaseV2LocalArtifactResponse Successful Response
     * @throws ApiError
     */
    public static postV4KnowledgeBasesKnowledgeBaseIdArtifactsBatchDelete(
        knowledgeBaseId: string,
        requestBody: BulkDeleteKnowledgeBaseV2LocalArtifactRequest,
    ): CancelablePromise<BulkDeleteKnowledgeBaseV2LocalArtifactResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/batch-delete',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Upload Schedules
     * ### Description
     * Lists all upload schedules accessible to the user.
     *
     * ### Details
     * This API can be used to list upload schedules. If a user has access to multiple accounts, all upload schedules from all accounts the user is associated with will be returned.
     * @param knowledgeBaseId
     * @param view
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param xSelectedAccountId
     * @returns PaginatedKnowledgeBaseUploadScheduleResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBasesKnowledgeBaseIdUploadSchedules(
        knowledgeBaseId: string,
        view?: (Array<KnowledgeBaseUploadScheduleViewsOptions> | null),
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedKnowledgeBaseUploadScheduleResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/upload-schedules',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
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
     * Create Upload Schedule
     * ### Description
     * Creates a upload schedule
     *
     * ### Details
     * This API can be used to create a upload schedule. To use this API, review the request schema and pass in all fields that are required to create a upload schedule.
     * @param knowledgeBaseId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns KnowledgeBaseUploadScheduleResponse Successful Response
     * @throws ApiError
     */
    public static postV4KnowledgeBasesKnowledgeBaseIdUploadSchedules(
        knowledgeBaseId: string,
        requestBody: KnowledgeBaseUploadScheduleRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/upload-schedules',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
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
     * Get Upload Schedule
     * ### Description
     * Gets the details of a upload schedule
     *
     * ### Details
     * This API can be used to get information about a single upload schedule by ID. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @param view
     * @returns KnowledgeBaseUploadScheduleResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
        view?: (Array<KnowledgeBaseUploadScheduleViewsOptions> | null),
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Upload Schedule
     * ### Description
     * Updates a upload schedule
     *
     * ### Details
     * This API can be used to update the upload schedule that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @param requestBody
     * @returns KnowledgeBaseUploadScheduleResponse Successful Response
     * @throws ApiError
     */
    public static patchV4KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
        requestBody: PartialKnowledgeBaseUploadScheduleRequest,
    ): CancelablePromise<KnowledgeBaseUploadScheduleResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Upload Schedule
     * ### Description
     * Deletes a upload schedule
     *
     * ### Details
     * This API can be used to delete a upload schedule by ID. To use this API, pass in the `id` that was returned from your Create Upload Schedule API call as a path parameter.
     * @param knowledgeBaseId
     * @param uploadScheduleId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4KnowledgeBasesKnowledgeBaseIdUploadSchedulesUploadScheduleId(
        knowledgeBaseId: string,
        uploadScheduleId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/knowledge-bases/{knowledge_base_id}/upload-schedules/{upload_schedule_id}',
            path: {
                'knowledge_base_id': knowledgeBaseId,
                'upload_schedule_id': uploadScheduleId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Knowledge Base Embedding Models
     * ### Description
     * Lists all embedding models that can be used when creating a KB
     *
     * ### Details
     * This API returns:
     * 1. models from the internal_model_info table (in Scale Prod and VPC)
     * 2. static partner models (openai, cohere) (only in Sclae Prod)
     * 3. model deployments installed in the specified account where model_instance.type = EMBEDDING (in Scale Prod and VPC)
     *
     * If there are duplicates, the priorities are:
     * 1. internal model info
     * 2. static partner models
     * 3. model deployment most recently created
     *
     * Internal model info models are necessary for scale prod, where legacy models may not have associated deployments.
     * Deployments are necessary to enable using newer models that have been distributed via catalog, finetuned models, etc.
     * @param xSelectedAccountId
     * @returns ListKnowledgeBaseEmbeddingModelsResponse Successful Response
     * @throws ApiError
     */
    public static getV4KnowledgeBaseEmbeddingModels(
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ListKnowledgeBaseEmbeddingModelsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/knowledge-base-embedding-models',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Download URLs for Artifacts
     * @param knowledgeBaseId
     * @param requestBody
     * @returns GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse Successful Response
     * @throws ApiError
     */
    public static postV2KnowledgeBasesKnowledgeBaseIdArtifactsGenerateDownloadUrls(
        knowledgeBaseId: string,
        requestBody: GenerateKnowledgeBaseV2ArtifactDownloadUrlsRequest,
    ): CancelablePromise<GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/knowledge-bases/{knowledge_base_id}/artifacts/generate-download-urls',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Download URLs for Artifacts
     * @param knowledgeBaseId
     * @param requestBody
     * @returns GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse Successful Response
     * @throws ApiError
     */
    public static postV3KnowledgeBasesKnowledgeBaseIdArtifactsGenerateDownloadUrls(
        knowledgeBaseId: string,
        requestBody: GenerateKnowledgeBaseV2ArtifactDownloadUrlsRequest,
    ): CancelablePromise<GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/knowledge-bases/{knowledge_base_id}/artifacts/generate-download-urls',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Download URLs for Artifacts
     * @param knowledgeBaseId
     * @param requestBody
     * @returns GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse Successful Response
     * @throws ApiError
     */
    public static postV4KnowledgeBasesKnowledgeBaseIdArtifactsGenerateDownloadUrls(
        knowledgeBaseId: string,
        requestBody: GenerateKnowledgeBaseV2ArtifactDownloadUrlsRequest,
    ): CancelablePromise<GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/knowledge-bases/{knowledge_base_id}/artifacts/generate-download-urls',
            path: {
                'knowledge_base_id': knowledgeBaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
