/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationDeploymentStatus } from './ApplicationDeploymentStatus';
export type ApplicationDeploymentResponse = {
    id: string;
    name: string;
    endpoint: string;
    application_variant_id: string;
    status: ApplicationDeploymentStatus;
    is_active: boolean;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
};

