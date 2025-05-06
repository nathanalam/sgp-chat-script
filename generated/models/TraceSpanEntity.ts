/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationStatus } from './OperationStatus';
import type { OperationType } from './OperationType';
/**
 * Represents a trace span entity, tied to an interaction.
 */
export type TraceSpanEntity = {
    /**
     * Identifier for the node that emitted this trace span.
     */
    node_id: string;
    /**
     * Type of the operation, e.g., RERANKING.
     */
    operation_type: OperationType;
    /**
     * The outcome of the operation performed by this node.
     */
    operation_status?: OperationStatus;
    /**
     * The start time of the step.
     */
    start_timestamp: string;
    /**
     * The end time of the step.
     */
    end_timestamp?: string;
    /**
     * The JSON representation of the input that this step received.
     */
    operation_input?: Record<string, any>;
    /**
     * The JSON representation of the output that this step emitted.
     */
    operation_output?: Record<string, any>;
    /**
     * The JSON representation of the metadata insights emitted during execution. This can differ based on different types of operations.
     */
    operation_metadata?: Record<string, any>;
    /**
     * The duration of the operation step in milliseconds.
     */
    duration_ms?: number;
    /**
     * Unique identifier for the trace span.
     */
    id: string;
    /**
     * The ID of the application interaction this trace span belongs to.
     */
    application_interaction_id: string;
};

