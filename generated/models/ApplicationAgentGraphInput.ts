/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentUserInputType } from './AgentUserInputType';
import type { ValueConstraint } from './ValueConstraint';
export type ApplicationAgentGraphInput = {
    name: string;
    required?: boolean;
    title?: string;
    description?: string;
    type: AgentUserInputType;
    examples?: Array<string>;
    default?: string;
    value_constraint?: ValueConstraint;
};

