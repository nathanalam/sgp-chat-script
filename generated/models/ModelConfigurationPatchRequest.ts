/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartialLaunchVendorConfiguration } from './PartialLaunchVendorConfiguration';
import type { PartialLLMEngineVendorConfiguration } from './PartialLLMEngineVendorConfiguration';
export type ModelConfigurationPatchRequest = {
    model_metadata?: Record<string, any>;
    vendor_configuration: (PartialLaunchVendorConfiguration | PartialLLMEngineVendorConfiguration);
};

