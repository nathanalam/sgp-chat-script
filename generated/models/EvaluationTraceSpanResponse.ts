/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationOperationStatus } from './ApplicationOperationStatus';
import type { ApplicationOperationType } from './ApplicationOperationType';
import type { EvaluationSpanIOData } from './EvaluationSpanIOData';
export type EvaluationTraceSpanResponse = {
    /**
     * Identifies the application step
     */
    id: string;
    /**
     * The interaction ID this span belongs to
     */
    application_interaction_id?: string;
    /**
     * The id of the application variant this span belongs to
     */
    application_variant_id?: string;
    /**
     * The id of the node in the application_variant config that emitted this insight
     */
    node_id: string;
    /**
     * Type of the operation, e.g. RERANKING
     */
    operation_type: ApplicationOperationType;
    /**
     * The outcome of the operation
     */
    operation_status: ApplicationOperationStatus;
    /**
     * The JSON representation of the input that this step received.
     */
    operation_input: EvaluationSpanIOData;
    /**
     * The JSON representation of the output that this step emitted.
     */
    operation_output: EvaluationSpanIOData;
    /**
     * The JSON representation of the expected output for this step
     */
    operation_expected?: EvaluationSpanIOData;
    /**
     * The JSON representation of the metadata insights emitted through the execution. This can differ based on different types of operations
     */
    operation_metadata?: Record<string, any>;
    /**
     * The start time of the step
     */
    start_timestamp: string;
    /**
     * The end time of the step, nullable, since it can be set to done at a later point in time.
     */
    end_timestamp?: string;
    /**
     * How much time the step took in milliseconds(ms)
     */
    duration_ms: number;
    /**
     * The root-level ID where this span belongs to
     */
    trace_id?: string;
    /**
     * Who is the parent span of this current span, null if span is root parent.
     */
    parent_id?: string;
};

