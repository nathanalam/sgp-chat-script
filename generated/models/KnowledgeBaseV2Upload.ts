/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
import type { DataSourceConfig } from './DataSourceConfig';
export type KnowledgeBaseV2Upload = {
    /**
     * Unique identifier for the upload job.
     */
    id: string;
    /**
     * Unique identifier for the knowledge base.
     */
    knowledge_base_id: string;
    /**
     * Configuration for the data source which describes where to find the data.
     */
    data_source_config: DataSourceConfig;
    /**
     * Configuration for the chunking strategy which describes how to chunk the data.
     */
    chunking_strategy_config?: ChunkingStrategyConfig;
    /**
     * Timestamp at which the upload job was created.
     */
    created_at?: string;
    /**
     * Timestamp at which the upload job was last updated.
     */
    updated_at?: string;
    /**
     * Status of the upload job. One of 'Pending', 'Running', 'Completed', 'Failed'.
     */
    status?: string;
    /**
     * Reason for the upload job's status.
     */
    status_reason?: string;
    /**
     * Id of the upload schedule that triggered this upload_id. Null if triggered manually.
     */
    created_by_schedule_id?: string;
};

