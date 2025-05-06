/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GuardrailPolicyResponse = {
    id: string;
    description?: string;
    category: string;
    unsafe_threshold: number;
    guardrail_policy_metadata?: Record<string, any>;
    guardrail_id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
};

