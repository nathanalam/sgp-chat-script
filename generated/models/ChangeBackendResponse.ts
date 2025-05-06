/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Point the model server to a new model deployment.
 *
 * Args:
 * old_model_deployment_id(str): The ID of the model deployment to use as the new backend.
 */
export type ChangeBackendResponse = {
    name: string;
    model_server_id: string;
    model_deployment_id?: string;
    account_id: string;
    alias?: string;
    new_model_deployment_id: string;
    old_model_deployment_id?: string;
};

