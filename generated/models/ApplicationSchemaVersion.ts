/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An enum representing the version states of an application and its nodes' schemas.
 * Attributes:
 * V0: The initial version of an application schema.
 * AGENTS_SERVICE: Application schema references egp_services definition.
 * OFFLINE: Application schema for applications that do not run on SGP directly.
 */
export enum ApplicationSchemaVersion {
    OFFLINE = 'OFFLINE',
    V0 = 'V0',
    AGENTS_SERVICE = 'AGENTS_SERVICE',
}
