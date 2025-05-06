/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskORMStatusEnum } from './TaskORMStatusEnum';
import type { TaskORMTaskTypeEnum } from './TaskORMTaskTypeEnum';
import type { TestCaseResultResponse } from './TestCaseResultResponse';
export type TaskResponse = {
    id: string;
    task_type: TaskORMTaskTypeEnum;
    task_entity_parent_id: string;
    task_entity_id: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The ID of the user that the task is assigned to.
     */
    assigned_to?: string;
    /**
     * The date and time when the task assignment expires in ISO format.
     */
    assignment_expires_at?: string;
    status: TaskORMStatusEnum;
    priority: number;
    /**
     * The entity that the task is associated with.
     */
    task_entity?: TestCaseResultResponse;
};

