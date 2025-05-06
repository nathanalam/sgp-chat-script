/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvancedProcessingOptions } from './AdvancedProcessingOptions';
import type { BaseProcessingOptions } from './BaseProcessingOptions';
import type { ExperimentalProcessingOptionsTyped } from './ExperimentalProcessingOptionsTyped';
export type ReductoProcessingOptions = {
    /**
     * The parser to use
     */
    parser?: ReductoProcessingOptions.parser;
    advanced_options?: AdvancedProcessingOptions;
    experimental_options?: (ExperimentalProcessingOptionsTyped | Record<string, any>);
    options?: BaseProcessingOptions;
};
export namespace ReductoProcessingOptions {
    /**
     * The parser to use
     */
    export enum parser {
        REDUCTO = 'REDUCTO',
    }
}

