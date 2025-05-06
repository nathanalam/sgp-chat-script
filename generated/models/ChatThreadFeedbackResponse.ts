/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedbackSentiment } from './FeedbackSentiment';
export type ChatThreadFeedbackResponse = {
    id: string;
    chat_thread_id: string;
    application_interaction_id: string;
    sentiment: FeedbackSentiment;
    description: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
};

