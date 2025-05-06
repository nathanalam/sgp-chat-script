/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditTable } from './AuditTable';
export type AuditTables = {
    object?: AuditTables.object;
    start_time: string;
    end_time: string;
    tables: Array<AuditTable>;
};
export namespace AuditTables {
    export enum object {
        AUDIT_TABLES = 'audit.tables',
    }
}

