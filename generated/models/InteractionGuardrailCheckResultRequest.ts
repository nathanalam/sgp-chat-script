/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuardrailPolicySeverity } from './GuardrailPolicySeverity';
export type InteractionGuardrailCheckResultRequest = {
    guardrail_id: string;
    policy_id: string;
    severity: GuardrailPolicySeverity;
    triggered: boolean;
    score: number;
    description?: string;
    result_metadata?: Record<string, any>;
};

