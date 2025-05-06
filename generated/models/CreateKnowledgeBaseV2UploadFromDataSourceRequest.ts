/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
import type { DataSourceAuthConfig } from './DataSourceAuthConfig';
import type { RemoteDataSourceConfig } from './RemoteDataSourceConfig';
import type { TaggingInformation } from './TaggingInformation';
export type CreateKnowledgeBaseV2UploadFromDataSourceRequest = {
    /**
     * Configuration for the data source which describes where to find the data.
     */
    data_source_config: RemoteDataSourceConfig;
    /**
     * Configuration for the data source which describes how to authenticate to the data source.
     */
    data_source_auth_config?: DataSourceAuthConfig;
    /**
     * Configuration for the chunking strategy which describes how to chunk the data.
     */
    chunking_strategy_config?: ChunkingStrategyConfig;
    /**
     * Force reingest, regardless the change of the source file.
     */
    force_reupload?: boolean;
    /**
     * A dictionary of tags to apply to all artifacts added from the data source.
     */
    tagging_information?: TaggingInformation;
};

