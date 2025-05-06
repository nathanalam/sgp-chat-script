/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgenticApplicationOverrides } from './AgenticApplicationOverrides';
import type { ApplicationEdge } from './ApplicationEdge';
import type { ApplicationNode } from './ApplicationNode';
import type { KnowledgeBaseNodeOverride } from './KnowledgeBaseNodeOverride';
export type ApplicationValidationRequest = {
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
    version: ApplicationValidationRequest.version;
    /**
     * Optional overrides for the application
     */
    overrides?: (AgenticApplicationOverrides | Record<string, KnowledgeBaseNodeOverride>);
};
export namespace ApplicationValidationRequest {
    /**
     * Version of the application schema
     */
    export enum version {
        V0 = 'V0',
    }
}

