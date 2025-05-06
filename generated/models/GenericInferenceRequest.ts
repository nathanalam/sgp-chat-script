/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LaunchInferenceConfiguration } from './LaunchInferenceConfiguration';
export type GenericInferenceRequest = {
    /**
     * model specified as `vendor/name` (ex. openai/gpt-5)
     */
    model: string;
    /**
     * Arguments passed into model
     */
    args?: Record<string, any>;
    /**
     * Vendor specific configuration
     */
    inference_configuration?: LaunchInferenceConfiguration;
};

