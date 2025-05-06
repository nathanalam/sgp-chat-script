/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationDeploymentResponse } from './ApplicationDeploymentResponse';
import type { egp_api_backend__server__api__models__application_models__ApplicationSpecResponse } from './egp_api_backend__server__api__models__application_models__ApplicationSpecResponse';
import type { egp_api_backend__server__api__models__application_models__ApplicationVariantResponse } from './egp_api_backend__server__api__models__application_models__ApplicationVariantResponse';
import type { ThemeResponse } from './ThemeResponse';
export type ApplicationSpecWithActiveDeployment = {
    application_spec: egp_api_backend__server__api__models__application_models__ApplicationSpecResponse;
    application_variant: egp_api_backend__server__api__models__application_models__ApplicationVariantResponse;
    application_deployment: ApplicationDeploymentResponse;
    theme: ThemeResponse;
    supports_multi_turn: boolean;
};

