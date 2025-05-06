/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvalidApplicationErrorCode } from './InvalidApplicationErrorCode';
/**
 * Raised when application edge configuration is invalid
 */
export type InvalidApplicationEdgeConfiguration = {
    error_code: InvalidApplicationErrorCode;
    message?: string;
    from_node_id: string;
    to_node_id: string;
    from_field: string;
    to_field: string;
};

