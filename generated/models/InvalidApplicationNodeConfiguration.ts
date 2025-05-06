/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvalidApplicationErrorCode } from './InvalidApplicationErrorCode';
/**
 * Raised when application node configuration is invalid
 */
export type InvalidApplicationNodeConfiguration = {
    error_code: InvalidApplicationErrorCode;
    message?: string;
    node_id: string;
};

