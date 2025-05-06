/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TokenChunkingStrategyConfig = {
    strategy: 'token';
    /**
     * Character designating breaks in input data. Text data will first be split into sections by this separator, then each section will be split into chunks of size `chunk_size`.
     */
    separator?: string;
    /**
     * Target number of tokens in each chunk. If not specified, a target chunk size of 200 will be used.
     */
    target_chunk_size?: number;
    /**
     * Maximum number of tokens in each chunk. If not specified, a maximum chunk size of 600 will be used.
     */
    max_chunk_size?: number;
    /**
     * Number of tokens to overlap between chunks. If not specified, an overlap of 0 will be used. Not this if only followed approximately.
     */
    chunk_overlap?: number;
};

