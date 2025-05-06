/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationEdge } from './ApplicationEdge';
import type { ApplicationNode } from './ApplicationNode';
import type { GuardrailConfiguration } from './GuardrailConfiguration';
export type ApplicationConfigurationV0 = {
    /**
     * User defined metadata about the application
     */
    metadata?: Record<string, any>;
    /**
     * Guardrail configuration for the application
     */
    guardrail_config?: GuardrailConfiguration;
    nodes: Array<ApplicationNode>;
    edges: Array<ApplicationEdge>;
};

