/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericAsyncJobProgressSchema } from './GenericAsyncJobProgressSchema';
import type { GenericAsyncJobStatusEnum } from './GenericAsyncJobStatusEnum';
export type ApplicationVariantReportAsyncJob = {
    id: string;
    job_type: ApplicationVariantReportAsyncJob.job_type;
    status: GenericAsyncJobStatusEnum;
    progress?: GenericAsyncJobProgressSchema;
    job_metadata?: Record<string, any>;
    /**
     * The date and time when the job was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the job was last updated in ISO format.
     */
    updated_at: string;
};
export namespace ApplicationVariantReportAsyncJob {
    export enum job_type {
        APPLICATION_VARIANT_REPORT_GENERATION = 'application-variant-report-generation',
    }
}

