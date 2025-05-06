/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionSource } from './ApplicationInteractionSource';
import type { ApplicationOperationStatus } from './ApplicationOperationStatus';
export type ApplicationInteractionResponse = {
    id: string;
    input: Record<string, any>;
    output: Record<string, any>;
    /**
     * Boolean of whether this interaction has been uploaded to s3 bucket yet, default is false
     */
    aggregated: boolean;
    application_spec_id: string;
    application_variant_id: string;
    start_timestamp: string;
    /**
     * How much time the step took in milliseconds(ms)
     */
    duration_ms: number;
    /**
     * The outcome of the operation
     */
    operation_status: ApplicationOperationStatus;
    /**
     * The JSON representation of the metadata insights emitted through the execution. This can differ based on different types of operations
     */
    operation_metadata?: Record<string, any>;
    chat_thread_id?: string;
    interaction_source?: ApplicationInteractionSource;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
};

