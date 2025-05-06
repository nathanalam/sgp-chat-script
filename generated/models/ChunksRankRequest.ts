/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChunkV2 } from './ChunkV2';
import type { RankStrategy } from './RankStrategy';
export type ChunksRankRequest = {
    /**
     * Natural language query to re-rank chunks against. If a vector store query was originally used to retrieve these chunks, please use the same query for this ranking
     */
    query: string;
    /**
     * List of chunks to rank
     */
    relevant_chunks: Array<ChunkV2>;
    /**
     * The ranking strategy to use.
     *
     * Rank strategies determine how the ranking is done, They consist of the ranking method name and additional params needed to compute the ranking.
     *
     * Use the built-in `cross_encoder` or `rouge` strategies or create a custom one with the Models API.
     */
    rank_strategy: RankStrategy;
    /**
     * Number of chunks to return. Must be greater than 0 if specified. If not specified, all chunks will be returned.
     */
    top_k?: number;
    /**
     * Account to rank chunks with. If you have access to more than one account, you must specify an account_id
     */
    account_id?: string;
};

