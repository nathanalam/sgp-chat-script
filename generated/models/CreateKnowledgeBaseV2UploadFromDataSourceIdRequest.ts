/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
import type { TaggingInformation } from './TaggingInformation';
export type CreateKnowledgeBaseV2UploadFromDataSourceIdRequest = {
    /**
     * Id of the data source to fetch.
     */
    data_source_id: string;
    /**
     * Configuration for the chunking strategy which describes how to chunk the data.
     */
    chunking_strategy_config: ChunkingStrategyConfig;
    /**
     * Force reingest, regardless the change of the source file.
     */
    force_reupload?: boolean;
    /**
     * A dictionary of tags to apply to all artifacts added from the data source.
     */
    tagging_information?: TaggingInformation;
};

