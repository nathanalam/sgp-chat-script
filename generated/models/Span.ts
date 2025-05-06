/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationOperationStatus } from './ApplicationOperationStatus';
export type Span = {
    id: string;
    object?: Span.object;
    name: string;
    /**
     * id for grouping traces together, uuid is recommended
     */
    trace_id: string;
    /**
     * Reference to a parent span_id
     */
    parent_id?: string;
    start_timestamp: string;
    end_timestamp?: string;
    input?: Record<string, any>;
    output?: Record<string, any>;
    metadata?: Record<string, any>;
    status?: ApplicationOperationStatus;
    type?: string;
    account_id: string;
    created_by_user_id: string;
};
export namespace Span {
    export enum object {
        SPAN = 'span',
    }
}

