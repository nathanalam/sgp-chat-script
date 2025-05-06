/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvalidApplicationErrorCode } from './InvalidApplicationErrorCode';
/**
 * Raised when a field in node configuration is invalid
 */
export type InvalidApplicationNodeConfigurationField = {
    error_code: InvalidApplicationErrorCode;
    message?: string;
    field: string;
    node_id: string;
};

