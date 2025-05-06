/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
import type { DataSourceConfig } from './DataSourceConfig';
export type KnowledgeBaseUpload = {
    id: string;
    knowledge_base_id: string;
    data_source_idempotency_key?: string;
    data_source_config: DataSourceConfig;
    chunking_strategy_config?: ChunkingStrategyConfig;
    created_at?: string;
    updated_at?: string;
    status?: string;
    status_reason?: string;
    created_by_schedule_id?: string;
};

