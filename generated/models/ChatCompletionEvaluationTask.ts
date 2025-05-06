/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionRequestWithItemLocator_ } from './ChatCompletionRequestWithItemLocator_';
export type ChatCompletionEvaluationTask = {
    task_type?: 'chat_completion';
    /**
     * Alias to title the results column. Defaults to the `task_type`
     */
    alias?: string;
    configuration: ChatCompletionRequestWithItemLocator_;
};

