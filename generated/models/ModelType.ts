/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An enum representing the different types of models supported.
 *
 * Attributes:
 * COMPLETION: Denotes that the model type is completion.
 * CHAT_COMPLETION: Denotes that the model type is chat completion.
 * AGENT: Denotes that the model type is agent.
 * EMBEDDING: Denotes that the model type is embedding.
 * RERANKING: Denotes that the model type is reranking.
 * GENERIC: Denotes that the model type is generic.
 * BUNDLE: "Not to be used directly - type to surface a model bundle in the UI - TODO: Explicitly type a bundle
 */
export enum ModelType {
    COMPLETION = 'COMPLETION',
    CHAT_COMPLETION = 'CHAT_COMPLETION',
    AGENT = 'AGENT',
    EMBEDDING = 'EMBEDDING',
    RERANKING = 'RERANKING',
    GENERIC = 'GENERIC',
    BUNDLE = 'BUNDLE',
}
