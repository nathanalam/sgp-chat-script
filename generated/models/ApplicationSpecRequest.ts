/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationSpecRequest = {
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
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

