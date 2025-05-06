/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ToolPropertyValue } from './ToolPropertyValue';
export type ToolArguments = {
    /**
     * Type of argument. Currently only "object" is supported
     */
    type: ToolArguments.type;
    /**
     * An object where each key is the name of a keyword argument and each value is a schema used to validate that property. Each schema must have a type and description, but can also have a default value and examples.
     *
     * For more information on how to define a valid property, visit https://json-schema.org/understanding-json-schema/reference/object.html
     */
    properties?: Record<string, ToolPropertyValue>;
};
export namespace ToolArguments {
    /**
     * Type of argument. Currently only "object" is supported
     */
    export enum type {
        OBJECT = 'object',
    }
}

