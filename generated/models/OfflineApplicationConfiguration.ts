/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GuardrailConfiguration } from './GuardrailConfiguration';
export type OfflineApplicationConfiguration = {
    /**
     * User defined metadata about the application
     */
    metadata?: Record<string, any>;
    /**
     * Guardrail configuration for the application
     */
    guardrail_config?: GuardrailConfiguration;
};

