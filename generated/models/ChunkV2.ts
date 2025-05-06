/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChunkV2 = {
    /**
     * The unique ID of the chunk with embedding
     */
    chunk_id: string;
    /**
     * The text associated with the chunk
     */
    text: string;
    /**
     * The vector embedding of the text associated with the chunk
     */
    embedding?: Array<number>;
    /**
     * Any additional key value pairs of information stored by you on the chunk with embedding
     */
    metadata?: Record<string, any>;
    /**
     * Any additional key value pairs of information returned from the custom chunking.
     */
    user_supplied_metadata?: Record<string, any>;
    /**
     * Original attachment URL from which this chunk got its data from
     */
    attachment_url?: string;
    /**
     * Title for this chunk, for example the file name
     */
    title?: string;
    /**
     * A number between 0 and 1 representing how similar a chunk's embedding is to the query embedding. Higher numbers mean that this chunk with embedding is more similar.
     */
    score: number;
};

