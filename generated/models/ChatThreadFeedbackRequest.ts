/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedbackSentiment } from './FeedbackSentiment';
export type ChatThreadFeedbackRequest = {
    chat_thread_id: string;
    application_interaction_id: string;
    sentiment: FeedbackSentiment;
    description: string;
};

