/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LaunchModelBundleConfiguration = {
    registry: string;
    repository: string;
    tag: string;
    predict_route?: string;
    command: Array<string>;
    streaming_predict_route?: string;
    streaming_command?: Array<string>;
    request_schema?: Record<string, any>;
    response_schema?: Record<string, any>;
    env_vars?: Record<string, any>;
    readiness_delay?: number;
    healthcheck_route?: string;
};

