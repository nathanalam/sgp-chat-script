/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetOrganizationByDomainResponse } from '../models/GetOrganizationByDomainResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationsService {
    /**
     * Get organization
     * Get organization by domain name
     * @param domain
     * @returns GetOrganizationByDomainResponse Successful Response
     * @throws ApiError
     */
    public static getV4OrganizationsByDomainDomain(
        domain: string,
    ): CancelablePromise<GetOrganizationByDomainResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organizations/by-domain/{domain}',
            path: {
                'domain': domain,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
