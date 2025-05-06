/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CharacterChunkingStrategyConfig = {
    strategy: 'character';
    /**
     * Character designating breaks in input data. Text data will first be split into sections by this separator, then each section will be split into chunks of size `chunk_size`.
     */
    separator?: string;
    /**
     * Maximum number of characters in each chunk. If not specified, a chunk size of 1000 will be used.
     */
    chunk_size?: number;
    /**
     * Number of characters to overlap between chunks. If not specified, an overlap of 200 will be used. For example if the chunk size is 3 and the overlap size is 1, and the text to chunk is 'abcde', the chunks will be 'abc', 'cde'.
     */
    chunk_overlap?: number;
};

