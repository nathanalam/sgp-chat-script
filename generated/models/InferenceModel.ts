/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__api__models__inference_models_api_models_no_gen__LaunchVendorConfiguration } from './egp_api_backend__server__api__models__inference_models_api_models_no_gen__LaunchVendorConfiguration';
import type { InferenceModelStatus } from './InferenceModelStatus';
import type { InferenceModelType } from './InferenceModelType';
import type { InferenceModelVendor } from './InferenceModelVendor';
import type { LLMEngineVendorConfiguration } from './LLMEngineVendorConfiguration';
export type InferenceModel = {
    id: string;
    object?: InferenceModel.object;
    name: string;
    model_type: InferenceModelType;
    model_vendor: InferenceModelVendor;
    vendor_configuration?: (egp_api_backend__server__api__models__inference_models_api_models_no_gen__LaunchVendorConfiguration | LLMEngineVendorConfiguration);
    status: InferenceModelStatus;
    model_metadata?: Record<string, any>;
    created_at: string;
    created_by_user_id: string;
};
export namespace InferenceModel {
    export enum object {
        MODEL = 'model',
    }
}

