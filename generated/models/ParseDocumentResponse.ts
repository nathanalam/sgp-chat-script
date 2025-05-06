/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericAsyncJobStatusEnum } from './GenericAsyncJobStatusEnum';
export type ParseDocumentResponse = {
    /**
     * The status of the parse document workflow
     */
    status: GenericAsyncJobStatusEnum;
    /**
     * The message of the parse document workflow
     */
    message?: string;
    /**
     * The content of the parsed document
     */
    content?: Record<string, any>;
    /**
     * The id of the workflow
     */
    workflow_id?: string;
};

