/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ModelBundleConfiguration = {
    registry: string;
    image: string;
    tag: string;
    command?: Array<string>;
    env?: Record<string, string>;
    streaming_command?: Array<string>;
    readiness_initial_delay_seconds?: number;
    healthcheck_route?: string;
    predict_route?: string;
    streaming_predict_route?: string;
};

