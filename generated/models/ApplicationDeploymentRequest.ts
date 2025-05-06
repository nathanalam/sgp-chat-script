/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationDeploymentRequest = {
    name: string;
    endpoint: string;
    application_variant_id: string;
    is_active: boolean;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

