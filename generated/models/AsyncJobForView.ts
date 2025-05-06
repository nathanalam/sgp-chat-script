/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AsyncJobForView = {
    job_type?: string;
    parent_job_id?: string;
    status: string;
    progress?: Record<string, any>;
    job_metadata?: Record<string, any>;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
    /**
     * The unique identifier of the entity.
     */
    id: string;
};

