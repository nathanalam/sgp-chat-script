/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgenticApplicationOverrides } from './AgenticApplicationOverrides';
import type { ApplicationEdge } from './ApplicationEdge';
import type { ApplicationNode } from './ApplicationNode';
import type { ApplicationRequestResponsePair } from './ApplicationRequestResponsePair';
import type { KnowledgeBaseNodeOverride } from './KnowledgeBaseNodeOverride';
export type TestApplicationProcessingRequest = {
    /**
     * Input data for the application. You must provide inputs for each input node
     */
    inputs: Record<string, Record<string, any>>;
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
    /**
     * List of nodes in the application graph
     */
    nodes: Array<ApplicationNode>;
    /**
     * List of edges in the application graph
     */
    edges: Array<ApplicationEdge>;
    /**
     * Version of the application schema
     */
    version: TestApplicationProcessingRequest.version;
};
export namespace TestApplicationProcessingRequest {
    /**
     * Version of the application schema
     */
    export enum version {
        V0 = 'V0',
    }
}

