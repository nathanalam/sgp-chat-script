/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__api__models__egp_models__Completion } from './egp_api_backend__server__api__models__egp_models__Completion';
import type { TokenUsage } from './TokenUsage';
export type CreateCompletionResponse = {
    /**
     * The actual completion text and the finish reason.
     */
    completion: egp_api_backend__server__api__models__egp_models__Completion;
    /**
     * Token usage numbers. If streaming, this field is null until the stream completes, at which point it will be populated (if supported).
     */
    token_usage?: TokenUsage;
};

