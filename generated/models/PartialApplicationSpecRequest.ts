/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PartialApplicationSpecRequest = {
    /**
     * The name of the Application Spec
     */
    name?: string;
    /**
     * The description of the Application Spec
     */
    description?: string;
    theme_id?: string;
    /**
     * Whether the application spec should run online evaluation, default is `false`
     */
    run_online_evaluation?: boolean;
    /**
     * Set to true to restore the entity from the database.
     */
    restore?: 'False';
};

