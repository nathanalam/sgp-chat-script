/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KnowledgeBaseDataSourceDeletionStatus } from './KnowledgeBaseDataSourceDeletionStatus';
import type { KnowledgeBaseDataSourceResponse } from './KnowledgeBaseDataSourceResponse';
export type KnowledgeBaseDataSourceConnectionResponse = {
    /**
     * The status of the deletion job for this data source connection, if any.
     */
    deletion_status?: KnowledgeBaseDataSourceDeletionStatus;
    /**
     * The date and time when the last upload for the data source was initiated.
     */
    last_uploaded_at: string;
    /**
     * The knowledge base data source entity.
     */
    knowledge_base_data_source: KnowledgeBaseDataSourceResponse;
};

