/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionWithFeedback } from './ApplicationInteractionWithFeedback';
import type { ChatThreadResponse } from './ChatThreadResponse';
export type ChatThreadHistory = {
    thread: ChatThreadResponse;
    messages: Array<ApplicationInteractionWithFeedback>;
    /**
     * The ID of the application spec that the thread belongs to.
     */
    application_spec_id: string;
};

