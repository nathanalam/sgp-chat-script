/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationScorerBaseModelName } from './ApplicationScorerBaseModelName';
import type { AutoEvalBaseModelName } from './AutoEvalBaseModelName';
export type GenericModelUsage = {
    prompt_tokens?: number;
    completion_tokens?: number;
    cost?: number;
    model?: (ApplicationScorerBaseModelName | AutoEvalBaseModelName);
};

