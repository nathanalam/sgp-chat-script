/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GoogleDriveDataSourceAuthConfig = {
    encrypted?: boolean;
    source: 'GoogleDrive';
    /**
     * Client email to use for google drive, set to override client email set in env vars
     */
    client_email: string;
    /**
     * Private key to use for google drive, set to override private key set in env vars
     */
    private_key: string;
    /**
     * Token uri to use for google drive, set to override token uri set in env vars
     */
    token_uri: string;
    /**
     * Client id to use for google drive, set to override client id set in env vars
     */
    client_id: string;
};

