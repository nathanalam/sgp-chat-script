/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
import type { KnowledgeBaseUploadScheduleStatus } from './KnowledgeBaseUploadScheduleStatus';
export type KnowledgeBaseUploadScheduleResponse = {
    knowledge_base_id: string;
    knowledge_base_data_source_id: string;
    chunking_strategy_config: ChunkingStrategyConfig;
    status: KnowledgeBaseUploadScheduleStatus;
    status_reason?: string;
    interval: number;
    next_run_at?: string;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

