/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type S3DataSourceConfig = {
    source: 'S3';
    /**
     * Name of the S3 bucket where the data is stored.
     */
    s3_bucket: string;
    /**
     * Prefix of the S3 bucket where the data is stored. If not specified, the entire bucket will be used.
     */
    s3_prefix?: string;
    /**
     * AWS region where the S3 bucket is located.
     */
    aws_region: string;
    /**
     * AWS account ID that owns the S3 bucket.
     */
    aws_account_id: string;
};

