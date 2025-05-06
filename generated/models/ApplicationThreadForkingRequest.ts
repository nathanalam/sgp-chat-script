/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationThreadForkInputsRequest } from './ApplicationThreadForkInputsRequest';
import type { ApplicationThreadForkInputStateRequest } from './ApplicationThreadForkInputStateRequest';
import type { ApplicationThreadForkSpanUpdateRequest } from './ApplicationThreadForkSpanUpdateRequest';
/**
 * Either provide new inputs or a span ID to update
 */
export type ApplicationThreadForkingRequest = (ApplicationThreadForkInputsRequest | ApplicationThreadForkSpanUpdateRequest | ApplicationThreadForkInputStateRequest);

