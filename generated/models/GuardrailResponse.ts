/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuardrailCheckType } from './GuardrailCheckType';
export type GuardrailResponse = {
    id: string;
    account_id: string;
    description?: string;
    check_type: GuardrailCheckType;
    guardrail_metadata?: Record<string, any>;
    is_archived?: boolean;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
};

