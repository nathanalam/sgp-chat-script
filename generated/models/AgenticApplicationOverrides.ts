/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegacySpan } from './LegacySpan';
import type { MachineState } from './MachineState';
/**
 * Execution override options for agentic applications
 */
export type AgenticApplicationOverrides = {
    concurrent?: boolean;
    use_channels?: boolean;
    initial_state?: MachineState;
    partial_trace?: Array<LegacySpan>;
    return_span?: boolean;
};

