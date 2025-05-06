/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataSource } from './DataSource';
import type { egp_api_backend__server__internal__entities__ArtifactUploadStatus } from './egp_api_backend__server__internal__entities__ArtifactUploadStatus';
import type { egp_api_backend__server__internal__entities__ChunksStatus } from './egp_api_backend__server__internal__entities__ChunksStatus';
export type egp_api_backend__server__internal__entities__ArtifactInfo = {
    artifact_id: string;
    artifact_name: string;
    artifact_uri: string;
    artifact_uri_public?: string;
    status: egp_api_backend__server__internal__entities__ArtifactUploadStatus;
    status_reason?: string;
    source: DataSource;
    chunks_status: egp_api_backend__server__internal__entities__ChunksStatus;
    created_at?: string;
    updated_at?: string;
    tags?: Record<string, any>;
};

