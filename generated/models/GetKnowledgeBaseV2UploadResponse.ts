/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactsStatus } from './ArtifactsStatus';
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
import type { DataSourceConfig } from './DataSourceConfig';
import type { egp_api_backend__server__api__models__egp_models__ArtifactInfo } from './egp_api_backend__server__api__models__egp_models__ArtifactInfo';
import type { UploadJobStatus } from './UploadJobStatus';
export type GetKnowledgeBaseV2UploadResponse = {
    /**
     * Unique ID of the upload job.
     */
    upload_id: string;
    /**
     * Configuration for downloading data from source.
     */
    data_source_config: DataSourceConfig;
    /**
     * Configuration for chunking the text content of each artifact.
     */
    chunking_strategy_config?: ChunkingStrategyConfig;
    /**
     * The timestamp at which the upload job started.
     */
    created_at: string;
    /**
     * The timestamp at which the upload job was last updated.
     */
    updated_at: string;
    /**
     * Sync status
     */
    status: UploadJobStatus;
    /**
     * Reason for the upload job's status.
     */
    status_reason?: string;
    /**
     * Number of artifacts in each of the various states, such as completed and failed for this upload. This includes artifacts for this data source that are retried.
     */
    artifacts_status: ArtifactsStatus;
    /**
     * List of info for each artifacts associated with this upload. This includes artifacts for this data source that are retried.
     */
    artifacts: Array<egp_api_backend__server__api__models__egp_models__ArtifactInfo>;
    /**
     * Id of the upload schedule that triggered this upload_id. Null if triggered manually.
     */
    created_by_schedule_id?: string;
};

