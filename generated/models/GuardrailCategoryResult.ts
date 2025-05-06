/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttackCategory } from './AttackCategory';
import type { Severity } from './Severity';
export type GuardrailCategoryResult = {
    category: AttackCategory;
    policy_id: string;
    threshold: number;
    is_safe: boolean;
    description?: string;
    score?: number;
    severity?: Severity;
    metadata?: Record<string, any>;
};

