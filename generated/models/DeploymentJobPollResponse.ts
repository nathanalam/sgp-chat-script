/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentJobLogEntryPublic } from './DeploymentJobLogEntryPublic';
import type { DeploymentJobStatus } from './DeploymentJobStatus';
export type DeploymentJobPollResponse = {
    status: DeploymentJobStatus;
    job_type: string;
    /**
     * Arguments of the requested deployment job
     */
    request?: Record<string, any>;
    /**
     * Result of the package deployment job
     */
    result?: Record<string, any>;
    /**
     * The ID of the account that owns the given entity for account-level jobs.
     */
    account_id?: string;
    /**
     * The ID of the organization for organization-scoped jobs.
     */
    organization_id?: string;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id?: string;
    logs?: Array<DeploymentJobLogEntryPublic>;
};

