/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgenticApplicationOverrides } from './AgenticApplicationOverrides';
import type { ApplicationRequestResponsePair } from './ApplicationRequestResponsePair';
import type { KnowledgeBaseNodeOverride } from './KnowledgeBaseNodeOverride';
export type ApplicationVariantProcessingRequest = {
    /**
     * Input data for the application. For agents service variants, you must provide inputs as a mapping from `{input_name: input_value}`. For V0 variants, you must specify the node your input should be passed to, structuring your input as `{node_id: {input_name: input_value}}`.
     */
    inputs: Record<string, any>;
    /**
     * History of the application
     */
    history?: Array<ApplicationRequestResponsePair>;
    /**
     * Optional overrides for the application
     */
    overrides?: (AgenticApplicationOverrides | Record<string, KnowledgeBaseNodeOverride>);
    /**
     * Control to have streaming of the endpoint. If the last node before the output is a completion node, you can set this to true to get the output as soon as the completion node has a token
     */
    stream?: boolean;
    /**
     * Arbitrary user-defined metadata that can be attached to the process operations and will be registered in the interaction.
     */
    operation_metadata?: Record<string, any>;
};

