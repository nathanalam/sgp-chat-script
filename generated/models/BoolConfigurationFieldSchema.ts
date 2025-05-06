/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseValidationRule } from './BaseValidationRule';
export type BoolConfigurationFieldSchema = {
    label: string;
    docs: string;
    default?: boolean;
    is_advanced_configuration?: boolean;
    type?: BoolConfigurationFieldSchema.type;
    validation_rules: BaseValidationRule;
};
export namespace BoolConfigurationFieldSchema {
    export enum type {
        BOOL = 'BOOL',
    }
}

