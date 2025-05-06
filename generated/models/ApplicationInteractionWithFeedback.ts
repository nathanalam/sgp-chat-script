/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionResponse } from './ApplicationInteractionResponse';
import type { ApplicationTraceSpanResponse } from './ApplicationTraceSpanResponse';
import type { ChatThreadFeedbackResponse } from './ChatThreadFeedbackResponse';
export type ApplicationInteractionWithFeedback = {
    entry: ApplicationInteractionResponse;
    spans?: Array<ApplicationTraceSpanResponse>;
    feedback?: ChatThreadFeedbackResponse;
};

