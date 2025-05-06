/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentVendorConfiguration } from './DeploymentVendorConfiguration';
export type ModelDeploymentResponse = {
    name: string;
    model_creation_parameters?: Record<string, any>;
    model_endpoint_id?: string;
    model_instance_id?: string;
    vendor_configuration?: DeploymentVendorConfiguration;
    deployment_metadata?: Record<string, any>;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * Status of the model's deployment.
     */
    status: string;
};

