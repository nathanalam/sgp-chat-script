/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
export type KnowledgeBaseUploadScheduleRequest = {
    knowledge_base_data_source_id: string;
    chunking_strategy_config: ChunkingStrategyConfig;
    interval: number;
    next_run_at?: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id?: string;
};

