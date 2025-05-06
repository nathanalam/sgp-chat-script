/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PatchApplicationVariantConfiguration = {
    /**
     * The user-defined application variant metadata.
     */
    metadata?: Record<string, any>;
    /**
     * Configuration sent to agent service.
     */
    params?: any;
    /**
     * The raw configuration string for the application variant.
     */
    raw_configuration?: string;
    type?: PatchApplicationVariantConfiguration.type;
};
export namespace PatchApplicationVariantConfiguration {
    export enum type {
        WORKFLOW = 'WORKFLOW',
        PLAN = 'PLAN',
        STATE_MACHINE = 'STATE_MACHINE',
    }
}

