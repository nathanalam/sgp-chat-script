/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuardrailCheckType } from './GuardrailCheckType';
import type { GuardrailPolicyRequest } from './GuardrailPolicyRequest';
export type CreateGuardrailsWithPoliciesRequest = {
    description: string;
    check_type: GuardrailCheckType;
    /**
     * Guardrail metadata
     */
    guardrail_metadata?: Record<string, any>;
    policies: Array<GuardrailPolicyRequest>;
};

