/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type StudioProjectRequest = {
    /**
     * The name of the Studio Project
     */
    name: string;
    /**
     * The description of the Studio Project
     */
    description: string;
    /**
     * Your API key for Studio, can be updated with the PATCH endpoint
     */
    studio_api_key: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

