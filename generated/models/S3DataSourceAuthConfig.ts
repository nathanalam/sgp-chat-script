/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type S3DataSourceAuthConfig = {
    encrypted?: boolean;
    source: 'S3';
    /**
     * Name of the role that a client will be initialized via AssumeRole of AWS sts
     */
    s3_role?: string;
    /**
     * External ID defined by the customer for the IAM role
     */
    external_id?: string;
};

