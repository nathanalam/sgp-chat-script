/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionAutoEvaluationRequestWithItemLocator } from './QuestionAutoEvaluationRequestWithItemLocator';
export type QuestionAutoEvaluationTask = {
    task_type?: 'question_auto_evaluation';
    /**
     * Alias to title the results column. Defaults to the `task_type`
     */
    alias?: string;
    configuration: QuestionAutoEvaluationRequestWithItemLocator;
};

