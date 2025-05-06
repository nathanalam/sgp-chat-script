/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create a new model server with an initial backend configuration.
 *
 * Args:
 * name (str): The name of the model server. Only used for display purposes.
 * model_deployment_id (str): The ID of the model deployment to use as the initial backend.
 * alias (str, optional): An alias for the model server. Defaults to None. If configured the model
 * server can be accessed via the alias instead of the model server ID. i.e /models/server/alias/{alias}/execute
 */
export type CreateModelServerRequest = {
    name: string;
    model_deployment_id: string;
    alias?: string;
};

