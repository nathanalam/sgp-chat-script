/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentVendorConfiguration } from './DeploymentVendorConfiguration';
export type ModelDeploymentRequest = {
    name: string;
    model_creation_parameters?: Record<string, any>;
    vendor_configuration?: DeploymentVendorConfiguration;
    deployment_metadata?: Record<string, any>;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id?: string;
};

