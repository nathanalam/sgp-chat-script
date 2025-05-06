/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LLMEngineVendorConfiguration } from './LLMEngineVendorConfiguration';
export type LLMEngineModelCreateRequest = {
    /**
     * Unique name to reference your model
     */
    name: string;
    model_type?: LLMEngineModelCreateRequest.model_type;
    model_vendor?: 'llmengine';
    model_metadata?: Record<string, any>;
    on_conflict?: LLMEngineModelCreateRequest.on_conflict;
    vendor_configuration: LLMEngineVendorConfiguration;
};
export namespace LLMEngineModelCreateRequest {
    export enum model_type {
        CHAT_COMPLETION = 'chat_completion',
    }
    export enum on_conflict {
        ERROR = 'error',
        UPDATE = 'update',
    }
}

