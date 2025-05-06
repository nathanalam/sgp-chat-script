/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchCompletionsVendorConfiguration } from './BatchCompletionsVendorConfiguration';
export type CreateBatchCompletionRequest = {
    vendor_configuration: BatchCompletionsVendorConfiguration;
    /**
     * The account ID to use for usage tracking. This will be gradually enforced.
     */
    account_id?: string;
};

