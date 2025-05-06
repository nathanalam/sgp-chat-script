/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionSetQuestionConfig } from './QuestionSetQuestionConfig';
export type QuestionIDWithConfiguration = {
    id: string;
    /**
     * Specifies additional configurations to use for the question in the context of the question set. For example, `{required: true}` sets the question as required. Writes to the question_id_to_config field on the response
     */
    override_config?: QuestionSetQuestionConfig;
};

