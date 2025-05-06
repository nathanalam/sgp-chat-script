/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type egp_api_backend__server__api__models__egp_models__Completion = {
    /**
     * Completion text. If streaming, this field will contain each packet of text.
     */
    text: string;
    /**
     * Reason the LLM finished generating text.
     */
    finish_reason?: string;
    /**
     * Additional metadata returned from the completion response
     */
    response_metadata?: Record<string, any>;
};

