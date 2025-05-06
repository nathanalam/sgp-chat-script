/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryWildcardFilterItem } from './QueryWildcardFilterItem';
export type QueryKnowledgeBaseRequestV2 = {
    /**
     * The natural language query to be answered by referencing the data ingested into the knowledge base
     */
    query: string;
    /**
     * Number of chunks to return. Must be greater than 0 if specified. If not specified, all chunks will be returned.
     */
    top_k: number;
    /**
     * Whether or not to include the embeddings for each chunk
     */
    include_embeddings?: boolean;
    /**
     * Optional filter by metadata fields, encoded as a JSON object
     */
    metadata_filters?: Record<string, any>;
    /**
     * Optional wildcard filter for fields. Only fields that are part of the metadata will be accepted.
     */
    wildcard_filters?: Record<string, QueryWildcardFilterItem>;
    /**
     * Enable or disable verbose logging
     */
    verbose?: boolean;
};

