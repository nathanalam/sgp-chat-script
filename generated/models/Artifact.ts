/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkingStrategyConfig } from './ChunkingStrategyConfig';
import type { DataSource } from './DataSource';
import type { egp_api_backend__server__internal__entities__ArtifactUploadStatus } from './egp_api_backend__server__internal__entities__ArtifactUploadStatus';
export type Artifact = {
    artifact_id?: string;
    knowledge_base_id: string;
    chunking_strategy_config?: ChunkingStrategyConfig;
    artifact_name: string;
    artifact_uri: string;
    artifact_uri_public?: string;
    content_modification_identifier?: string;
    source: DataSource;
    status: egp_api_backend__server__internal__entities__ArtifactUploadStatus;
    status_reason?: string;
    checkpoint?: egp_api_backend__server__internal__entities__ArtifactUploadStatus;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    tags?: Record<string, any>;
};

