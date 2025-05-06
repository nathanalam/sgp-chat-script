/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type egp_api_backend__server__api__models__application_models__ApplicationSpecResponse = {
    /**
     * The name of the Application Spec
     */
    name: string;
    /**
     * The description of the Application Spec
     */
    description: string;
    theme_id?: string;
    /**
     * Whether the application spec should run online evaluation, default is `false`
     */
    run_online_evaluation?: boolean;
    /**
     * Application spec ID of the parent application from which the variants and deployments are inherited.
     */
    parent_application_spec_id?: string;
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
    created_by_user_id?: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
};

