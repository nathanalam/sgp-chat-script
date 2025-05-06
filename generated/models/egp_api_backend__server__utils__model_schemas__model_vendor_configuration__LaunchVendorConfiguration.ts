/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateModelEndpointConfig } from './CreateModelEndpointConfig';
import type { FineTuningBundleConfiguration } from './FineTuningBundleConfiguration';
import type { ModelBundleConfiguration } from './ModelBundleConfiguration';
/**
 * Configuration for launching a model using the Launch service which is an internal and
 * self-hosted service developed by Scale that deploys models on Kubernetes.
 *
 * Attributes:
 * vendor: The vendor of the model template
 * bundle_config: The bundle configuration of the model template
 * endpoint_config: The endpoint configuration of the model template
 */
export type egp_api_backend__server__utils__model_schemas__model_vendor_configuration__LaunchVendorConfiguration = {
    vendor?: egp_api_backend__server__utils__model_schemas__model_vendor_configuration__LaunchVendorConfiguration.vendor;
    bundle_config: ModelBundleConfiguration;
    endpoint_config?: CreateModelEndpointConfig;
    fine_tuning_job_bundle_config?: FineTuningBundleConfiguration;
};
export namespace egp_api_backend__server__utils__model_schemas__model_vendor_configuration__LaunchVendorConfiguration {
    export enum vendor {
        LAUNCH = 'LAUNCH',
    }
}

