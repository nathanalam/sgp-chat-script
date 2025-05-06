/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuardrailCategoryResult } from './GuardrailCategoryResult';
import type { Severity } from './Severity';
export type ExecuteGuardrailResponse = {
    is_safe: boolean;
    score: number;
    severity?: Severity;
    unsafe_categories: Array<GuardrailCategoryResult>;
    safe_categories: Array<GuardrailCategoryResult>;
    metadata?: Record<string, any>;
    verbose?: boolean;
};

