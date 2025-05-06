/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionCreateRequestWithConfig } from './QuestionCreateRequestWithConfig';
import type { QuestionIDWithConfiguration } from './QuestionIDWithConfiguration';
export type QuestionSetCreateRequest = {
    name: string;
    /**
     * Instructions to answer questions
     */
    instructions?: string;
    /**
     * IDs of existing questions in the question set or new questions to create. You can also optionally specify configurations for each question. Example: [`question_id`, {'id': 'question_id2', 'configuration': {...}}, {'title': 'New question', ...}]
     */
    questions: Array<(QuestionCreateRequestWithConfig | QuestionIDWithConfiguration | string)>;
};

