/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbeddingConfig } from './EmbeddingConfig';
export type CreateKnowledgeBaseRequestV2 = {
    /**
     * The configuration of the embedding
     */
    embedding_config: EmbeddingConfig;
    /**
     * Account to create knowledge base in. If you have access to more than one account, you must specify an account_id
     */
    account_id?: string;
    /**
     * A unique name for the knowledge base
     */
    knowledge_base_name: string;
    /**
     * Metadata associated with the knowledge base
     */
    metadata?: Record<string, any>;
};

