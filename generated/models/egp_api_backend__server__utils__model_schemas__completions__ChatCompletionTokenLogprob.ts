/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__utils__model_schemas__completions__TopLogprob } from './egp_api_backend__server__utils__model_schemas__completions__TopLogprob';
export type egp_api_backend__server__utils__model_schemas__completions__ChatCompletionTokenLogprob = {
    token: string;
    bytes?: Array<number>;
    logprob: number;
    top_logprobs: Array<egp_api_backend__server__utils__model_schemas__completions__TopLogprob>;
};

