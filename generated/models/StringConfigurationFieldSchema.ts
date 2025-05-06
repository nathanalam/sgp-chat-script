/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StringValidationRule } from './StringValidationRule';
export type StringConfigurationFieldSchema = {
    label: string;
    docs: string;
    default?: boolean;
    is_advanced_configuration?: boolean;
    type?: StringConfigurationFieldSchema.type;
    validation_rules: StringValidationRule;
};
export namespace StringConfigurationFieldSchema {
    export enum type {
        TEXT = 'TEXT',
    }
}

