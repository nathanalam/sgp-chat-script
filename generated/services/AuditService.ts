/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditTables } from '../models/AuditTables';
import type { AuditTableType } from '../models/AuditTableType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuditService {
    /**
     * Get Audit Tables
     * @param type
     * @param startTime
     * @param endTime
     * @param xSelectedAccountId
     * @returns AuditTables Successful Response
     * @throws ApiError
     */
    public static getV5V5AuditTables(
        type: Array<AuditTableType>,
        startTime?: (string | null),
        endTime?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AuditTables> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/audit-tables',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
