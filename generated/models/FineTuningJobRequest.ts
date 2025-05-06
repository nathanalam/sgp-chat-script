/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FineTuningJobVendorConfiguration } from './FineTuningJobVendorConfiguration';
export type FineTuningJobRequest = {
    base_model_id?: string;
    vendor_configuration?: FineTuningJobVendorConfiguration;
    fine_tuned_model_id?: string;
    training_dataset_id: string;
    validation_dataset_id?: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

