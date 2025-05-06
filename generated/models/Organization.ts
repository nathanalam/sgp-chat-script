/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Organization = {
    /**
     * Organization ID
     */
    id: string;
    /**
     * Organization name
     */
    name: string;
    /**
     * Flag indicating whether this organization has enabled restricting access to general roles
     */
    has_restricted_roles: boolean;
    /**
     * List of organization domains
     */
    domains?: Array<string>;
};

