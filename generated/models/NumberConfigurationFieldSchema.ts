/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NumberValidationRule } from './NumberValidationRule';
export type NumberConfigurationFieldSchema = {
    label: string;
    docs: string;
    default?: number;
    is_advanced_configuration?: boolean;
    type?: NumberConfigurationFieldSchema.type;
    validation_rules: NumberValidationRule;
    is_float?: boolean;
};
export namespace NumberConfigurationFieldSchema {
    export enum type {
        NUMBER = 'NUMBER',
    }
}

