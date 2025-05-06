/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseModelMetadata } from './BaseModelMetadata';
import type { ModelType } from './ModelType';
import type { ModelVendor } from './ModelVendor';
export type ModelInstanceRequest = {
    name: string;
    display_name?: string;
    model_vendor?: ModelVendor;
    model_type: ModelType;
    base_model_id?: string;
    base_model_metadata?: BaseModelMetadata;
    model_creation_parameters?: Record<string, any>;
    model_card?: string;
    training_data_card?: string;
    description?: string;
    model_template_id?: string;
    model_group_id?: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

