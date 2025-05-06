/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationDeploymentResponse } from './ApplicationDeploymentResponse';
import type { egp_api_backend__server__api__models__application_models__ApplicationSpecResponse } from './egp_api_backend__server__api__models__application_models__ApplicationSpecResponse';
import type { egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse } from './egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse';
export type DeployedApplication = {
    application_spec: egp_api_backend__server__api__models__application_models__ApplicationSpecResponse;
    application_variant: egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse;
    application_deployment: ApplicationDeploymentResponse;
};

