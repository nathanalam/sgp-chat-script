/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgenticApplicationOverrides } from './AgenticApplicationOverrides';
import type { ApplicationRequestResponsePair } from './ApplicationRequestResponsePair';
import type { ItemLocator } from './ItemLocator';
export type ApplicationVariantV1RequestWithItemLocator = {
    inputs: (Record<string, any> | ItemLocator);
    history?: (Array<ApplicationRequestResponsePair> | ItemLocator);
    overrides?: (AgenticApplicationOverrides | ItemLocator);
    operation_metadata?: (Record<string, any> | ItemLocator);
    application_variant_id: (string | ItemLocator);
};

