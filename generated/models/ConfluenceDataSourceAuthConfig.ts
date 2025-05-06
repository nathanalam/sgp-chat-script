/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConfluenceDataSourceAuthConfig = {
    encrypted?: boolean;
    source: 'Confluence';
    /**
     * Client email to use for Confluence, set to override client email set in env vars.
     */
    client_email: string;
    /**
     * API key to use for Confluence, set this to override api key configured in env vars.
     */
    api_key: string;
    /**
     * Your Confluence API server's full domain, set to override domain configured in env vars. E.g. 'https://[your-company].atlassian.net'
     */
    atlassian_domain: string;
};

