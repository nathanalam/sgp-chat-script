/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelProvider } from './ModelProvider';
import type { ModelProviderMetadata } from './ModelProviderMetadata';
export type ModelItemV2 = {
    /**
     * A human-readable name to identify the model
     */
    name: string;
    /**
     * A model provider.
     */
    model_provider: ModelProvider;
    /**
     * Model name for use with UI's built on top of SGP
     */
    display_name?: string;
    /**
     * Metadata associated with the model provider.
     */
    model_provider_metadata?: ModelProviderMetadata;
    /**
     * The identifier of the base model.
     */
    base_model_id: string;
    /**
     * The ID of the model
     */
    id: string;
    /**
     * The account the model belongs to.
     */
    account_id: string;
};

