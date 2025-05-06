/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BatchAssignTaskRequest = {
    /**
     * Tasks to be assigned
     */
    task_ids: Array<string>;
    /**
     * The ID of the user that the task is assigned to.
     */
    assigned_to?: string;
};

