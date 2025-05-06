/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SharePointDataSourceConfig = {
    source: 'SharePoint';
    /**
     * Client ID associated with this SharePoint site
     */
    client_id: string;
    /**
     * Tenant ID that the SharePoint site is within
     */
    tenant_id: string;
    /**
     * Site ID for this SharePoint site, can be found at https://[hostname].sharepoint.com/sites/[site name]/_api/site/id
     */
    site_id: string;
    /**
     * Nested folder path to read files from the root of the site. Please omit the leading slash. Example: 'Documents/sub_directory'
     */
    folder_path?: string;
    /**
     * Recurse through the folder contents, default is True.
     */
    recursive?: boolean;
};

