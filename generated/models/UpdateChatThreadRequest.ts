/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateChatThreadRequest = {
    /**
     * The title of the chat thread.
     */
    title?: string;
    /**
     * Date when the chat thread is archived, or None to un-archive.
     */
    archived_at?: string;
    /**
     * The metadata associated with the thread
     */
    thread_metadata?: Record<string, any>;
};

