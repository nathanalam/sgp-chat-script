/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__utils__model_schemas__model_vendor_configuration__LaunchVendorConfiguration } from './egp_api_backend__server__utils__model_schemas__model_vendor_configuration__LaunchVendorConfiguration';
import type { LaunchEndpointProtocol } from './LaunchEndpointProtocol';
import type { ModelEndpointType } from './ModelEndpointType';
import type { ModelType } from './ModelType';
import type { ParameterSchema } from './ParameterSchema';
export type ModelTemplateResponse = {
    name: string;
    endpoint_type: ModelEndpointType;
    model_type: ModelType;
    vendor_configuration: egp_api_backend__server__utils__model_schemas__model_vendor_configuration__LaunchVendorConfiguration;
    /**
     * The field names and types of available parameter fields which may be specified during model creation
     */
    model_creation_parameters_schema?: ParameterSchema;
    /**
     * The field names and types of available parameter fields which may be specified in a model execution API's `model_request_parameters` field.
     */
    model_request_parameters_schema?: ParameterSchema;
    /**
     * The name of the calling convention expected by the Launch model endpoint
     */
    endpoint_protocol?: LaunchEndpointProtocol;
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

