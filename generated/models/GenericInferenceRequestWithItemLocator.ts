/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemLocator } from './ItemLocator';
import type { LaunchInferenceConfiguration } from './LaunchInferenceConfiguration';
export type GenericInferenceRequestWithItemLocator = {
    model: (string | ItemLocator);
    args?: (Record<string, any> | ItemLocator);
    inference_configuration?: (LaunchInferenceConfiguration | ItemLocator);
};

