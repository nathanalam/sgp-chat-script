/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactsStatus } from './ArtifactsStatus';
import type { EmbeddingConfig } from './EmbeddingConfig';
import type { KnowledgeBaseDataSourceConnectionResponse } from './KnowledgeBaseDataSourceConnectionResponse';
export type KnowledgeBaseItemV2 = {
    /**
     * The unique ID of the knowledge base
     */
    knowledge_base_id: string;
    /**
     * (Legacy) The unique ID of the underlying vector store. This is to allow for backwards compatibility with the V1 Vector Store APIs. This will be removed in the near future.
     */
    vector_store_id: string;
    /**
     * The name of the knowledge base
     */
    knowledge_base_name: string;
    /**
     * The embedding configuration
     */
    embedding_config: EmbeddingConfig;
    /**
     * Metadata associated with the knowledge base
     */
    metadata?: Record<string, any>;
    /**
     * The timestamp at which the knowledge base was created
     */
    created_at: string;
    /**
     * The timestamp at which the knowledge base was last updated
     */
    updated_at?: string;
    /**
     * The data source connections associated with the knowledge base. Only returned with the `view=Connections` query parameter.
     */
    connections?: Array<KnowledgeBaseDataSourceConnectionResponse>;
    /**
     * Number of artifacts in each of the various states, such as completed and failed for this knowledge base. This includes all data sources.
     */
    artifacts_status?: ArtifactsStatus;
    /**
     * The total number of artifacts in the knowledge base. Only returned with the `view=ArtifactCount` query parameter.
     */
    artifact_count?: number;
    /**
     * Whether the knowledge base has been clustered.
     */
    cluster_status?: string;
    /**
     * The user ID of the user who created the knowledge base.
     */
    created_by_user_id?: string;
};

