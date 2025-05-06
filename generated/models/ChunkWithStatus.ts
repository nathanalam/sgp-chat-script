/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__internal__entities__ChunkUploadStatus } from './egp_api_backend__server__internal__entities__ChunkUploadStatus';
export type ChunkWithStatus = {
    /**
     * The id of the chunk
     */
    id: string;
    /**
     * The text of the chunk as stored in the database
     */
    text: string;
    /**
     * The id of the artifact
     */
    artifact_id: string;
    /**
     * Chunk position
     */
    chunk_position: number;
    /**
     * Metadata of the chunk which is stored in OpenSearch
     */
    metadata?: Record<string, any>;
    /**
     * Metadata of the chunk which is stored in the database only provided via custom chunking.
     */
    user_supplied_metadata?: Record<string, any>;
    /**
     * Status of the chunk. If Failed or Pending, its possible that the chunk does not reflect in OpenSearch
     */
    status: egp_api_backend__server__internal__entities__ChunkUploadStatus;
    /**
     * Status reason of the chunk. May be successful
     */
    status_reason?: string;
    /**
     * Date and time of chunk creation
     */
    created_at?: string;
};

