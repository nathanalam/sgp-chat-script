/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSource } from './ArtifactSource';
import type { egp_api_backend__server__api__models__egp_models__ChunksStatus } from './egp_api_backend__server__api__models__egp_models__ChunksStatus';
export type egp_api_backend__server__api__models__egp_models__ArtifactInfo = {
    /**
     * Unique identifier for the artifact.
     */
    artifact_id: string;
    /**
     * Friendly name for the artifact.
     */
    artifact_name: string;
    /**
     * Location (e.g. URI) of the artifact in the data source.
     */
    artifact_uri: string;
    /**
     * Public Location (e.g. URI) of the artifact in the data source.
     */
    artifact_uri_public?: string;
    /**
     * Status of the artifact.
     */
    status: string;
    /**
     * Reason for the artifact's status.
     */
    status_reason?: string;
    /**
     * Data source of the artifact.
     */
    source: ArtifactSource;
    /**
     * Number of chunks pending, completed, and failed.
     */
    chunks_status: egp_api_backend__server__api__models__egp_models__ChunksStatus;
    /**
     * Timestamp at which the artifact was last updated.
     */
    updated_at?: string;
    /**
     * Tags associated with the artifact.
     */
    tags: Record<string, any>;
};

