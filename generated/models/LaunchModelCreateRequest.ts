/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__api__models__inference_models_api_models_no_gen__LaunchVendorConfiguration } from './egp_api_backend__server__api__models__inference_models_api_models_no_gen__LaunchVendorConfiguration';
export type LaunchModelCreateRequest = {
    /**
     * Unique name to reference your model
     */
    name: string;
    model_type?: LaunchModelCreateRequest.model_type;
    model_vendor?: 'launch';
    model_metadata?: Record<string, any>;
    on_conflict?: LaunchModelCreateRequest.on_conflict;
    vendor_configuration: egp_api_backend__server__api__models__inference_models_api_models_no_gen__LaunchVendorConfiguration;
};
export namespace LaunchModelCreateRequest {
    export enum model_type {
        GENERIC = 'generic',
    }
    export enum on_conflict {
        ERROR = 'error',
        UPDATE = 'update',
    }
}

