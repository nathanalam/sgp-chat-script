/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseModelMetadata } from './BaseModelMetadata';
import type { ModelDeploymentResponse } from './ModelDeploymentResponse';
import type { ModelGroupResponse } from './ModelGroupResponse';
import type { ModelType } from './ModelType';
import type { ModelVendor } from './ModelVendor';
export type ModelInstanceResponseWithViews = {
    model_group?: ModelGroupResponse;
    deployments?: Array<ModelDeploymentResponse>;
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
    /**
     * JSON schema for the requests to the model instance
     */
    request_schema: Record<string, any>;
    /**
     * JSON schema for the response to the model
     */
    response_schema: Record<string, any>;
    /**
     * Number of deployments of this model instance
     */
    deployment_count: number;
    /**
     * True if a model supports multi-turn conversations natively
     */
    supports_multi_turn: boolean;
};

