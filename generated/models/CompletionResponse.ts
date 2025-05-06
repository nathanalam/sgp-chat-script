/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__utils__model_schemas__completions__Choice } from './egp_api_backend__server__utils__model_schemas__completions__Choice';
export type CompletionResponse = {
    finish_reason?: string;
    prompt_tokens?: number;
    response_tokens?: number;
    completions: Array<any[]>;
    choices?: Array<egp_api_backend__server__utils__model_schemas__completions__Choice>;
};

