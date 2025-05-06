/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentsServiceGraphDescriptor } from './AgentsServiceGraphDescriptor';
import type { ApplicationAgentGraphInput } from './ApplicationAgentGraphInput';
import type { GuardrailConfiguration } from './GuardrailConfiguration';
export type ApplicationAgentsServiceConfiguration = {
    /**
     * User defined metadata about the application
     */
    metadata?: Record<string, any>;
    /**
     * Guardrail configuration for the application
     */
    guardrail_config?: GuardrailConfiguration;
    type: ApplicationAgentsServiceConfiguration.type;
    params: any;
    /**
     * The graph of the agents service configuration
     */
    graph?: AgentsServiceGraphDescriptor;
    /**
     * The starting inputs that this agent configuration expects
     */
    inputs?: Array<ApplicationAgentGraphInput>;
    /**
     * The inputs that each node expects
     */
    inputs_by_node?: Record<string, Array<ApplicationAgentGraphInput>>;
    /**
     * Errors that occurred when calling agent service
     */
    agent_service_errors?: Array<string>;
    /**
     * Raw configuration entered by the user. May be invalid if variant is in draft mode.
     */
    raw_configuration?: string;
};
export namespace ApplicationAgentsServiceConfiguration {
    export enum type {
        WORKFLOW = 'WORKFLOW',
        PLAN = 'PLAN',
        STATE_MACHINE = 'STATE_MACHINE',
    }
}

