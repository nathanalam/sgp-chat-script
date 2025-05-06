/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FineTuningJobStatus } from './FineTuningJobStatus';
import type { FineTuningJobVendorConfiguration } from './FineTuningJobVendorConfiguration';
export type FineTuningJobResponse = {
    base_model_id?: string;
    vendor_configuration?: FineTuningJobVendorConfiguration;
    fine_tuned_model_id?: string;
    training_dataset_id: string;
    validation_dataset_id?: string;
    status: FineTuningJobStatus;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
};

