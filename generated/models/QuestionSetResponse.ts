/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionSetQuestionConfig } from './QuestionSetQuestionConfig';
export type QuestionSetResponse = {
    name: string;
    /**
     * Specifies additional configurations to use for specific questions in the context of the question set. For example, `{<question_a_id>: {required: true}, <question_b_id>: {required: true}}` sets two questions as required.
     */
    question_id_to_config?: Record<string, QuestionSetQuestionConfig>;
    /**
     * Instructions to answer questions
     */
    instructions?: string;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
};

