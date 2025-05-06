/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NodeDocsResponse } from '../models/NodeDocsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AgentsDocsService {
    /**
     * Get documentation for all Agents nodes
     * @param agentServiceEndpointOverride
     * @returns NodeDocsResponse Successful Response
     * @throws ApiError
     */
    public static getV5Nodes(
        agentServiceEndpointOverride?: (string | null),
    ): CancelablePromise<NodeDocsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/agents/docs/nodes',
            query: {
                'agent_service_endpoint_override': agentServiceEndpointOverride,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
