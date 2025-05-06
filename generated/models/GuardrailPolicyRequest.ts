/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GuardrailPolicyRequest = {
    category: string;
    unsafe_threshold: number;
    /**
     * Guardrail metadata
     */
    guardrail_policy_metadata?: Record<string, any>;
    /**
     * Description of the policy (defaults to category description)
     */
    description?: string;
};

