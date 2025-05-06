/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbeddingConfig } from './EmbeddingConfig';
export type KnowledgeBaseEmbeddingModelItem = {
    /**
     * The name of the embedding model
     */
    model_name: string;
    /**
     * The configuration of the embedding model
     */
    model_configuration: EmbeddingConfig;
    /**
     * The ID of the model instance (for custom embedding models only)
     */
    model_instance_id?: string;
    /**
     * The description of the model instance (for custom embedding models only)
     */
    model_instance_description?: string;
};

