/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationAgentGraphEdge } from './ApplicationAgentGraphEdge';
import type { ApplicationOperationType } from './ApplicationOperationType';
export type ApplicationAgentGraphNode = {
    id: string;
    name: string;
    type: string;
    operation_type?: ApplicationOperationType;
    config?: Record<string, any>;
    nodes?: Array<ApplicationAgentGraphNode>;
    edges?: Array<ApplicationAgentGraphEdge>;
};

