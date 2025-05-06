/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkV2 } from './ChunkV2';
export type QueryKnowledgeBaseResponseV2 = {
    /**
     * An ordered list of the k most similar chunks and their similarity scores from most to least similar
     */
    chunks: Array<ChunkV2>;
    /**
     * Timestamp at which the query was begun by the server.
     */
    started_at?: string;
    /**
     * Timestamp at which the query was completed by the server.
     */
    completed_at?: string;
    /**
     * query request ID for verbose logging
     */
    request_id?: string;
};

