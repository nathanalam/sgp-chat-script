/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbeddingModelName } from './EmbeddingModelName';
export type EmbeddingConfigBase = {
    /**
     * The type of the embedding configuration.
     */
    type?: EmbeddingConfigBase.type;
    /**
     * The name of the base embedding model to use. To use custom models, change to type 'models'.
     */
    embedding_model: EmbeddingModelName;
};
export namespace EmbeddingConfigBase {
    /**
     * The type of the embedding configuration.
     */
    export enum type {
        BASE = 'base',
    }
}

