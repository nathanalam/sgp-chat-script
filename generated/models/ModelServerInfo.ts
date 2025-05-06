/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model server information.
 * name: The name of the model server. Only used for display purposes.
 * model_server_id: The ID of the model server.
 * model_deployment_id: The ID of the model deployment being used as the backend.
 * account_id: The ID of the account that owns the model server.
 * alias: An alias for the model server. If configured the model server can be accessed via the alias instead of the model server ID. i.e /models/server/alias/{alias}/execute
 */
export type ModelServerInfo = {
    name: string;
    model_server_id: string;
    model_deployment_id?: string;
    account_id: string;
    alias?: string;
};

