/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomChunkingStrategyConfig = {
    strategy: 'custom';
    /**
     * Endpoint path to call for custom chunking
     */
    endpoint: string;
    /**
     * Parameters that will be appended to the body of the request for the chunk.
     */
    params?: Record<string, any>;
};

