/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InteractionGuardrailCheckResultRequest } from './InteractionGuardrailCheckResultRequest';
import type { InteractionInput } from './InteractionInput';
import type { InteractionOutput } from './InteractionOutput';
import type { OperationStatus } from './OperationStatus';
import type { TraceSpanRequest } from './TraceSpanRequest';
/**
 * Represents an interaction performed with an application, including input, output, and associated metadata.
 */
export type InteractionRequest = {
    /**
     * Identifier for the application variant that performed this interaction.
     */
    application_variant_id: string;
    /**
     * Optional UUID identifying the conversation thread associated with the interaction.The interaction will be associated with the thread if the id represents an existing thread.If the thread with the specified id is not found, a new thread will be created.
     */
    thread_id?: string;
    /**
     * The input data for the interaction.
     */
    input: InteractionInput;
    /**
     * The output data from the interaction.
     */
    output: InteractionOutput;
    /**
     * Timestamp marking the start of the interaction.
     */
    start_timestamp: string;
    /**
     * Duration of the interaction in milliseconds.
     */
    duration_ms?: number;
    /**
     * The outcome status of the interaction.
     */
    operation_status?: OperationStatus;
    /**
     * Optional metadata related to the operation, including custom or predefined keys.
     */
    operation_metadata?: Record<string, any>;
    /**
     * List of trace spans associated with the interaction.These spans provide insight into the individual steps taken by nodes involved in generating the output.
     */
    trace_spans?: Array<TraceSpanRequest>;
    /**
     * Results of the guardrails executed on the input
     */
    guardrail_results?: Array<InteractionGuardrailCheckResultRequest>;
};

