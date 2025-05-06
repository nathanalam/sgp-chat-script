/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionORMTypeEnum } from './QuestionORMTypeEnum';
export type LegacyQuestionForView = {
    type: QuestionORMTypeEnum;
    title: string;
    prompt: string;
    /**
     * List of choices for the question. Required for CATEGORICAL questions.
     */
    choices?: Array<Record<string, any>>;
    /**
     * Whether the question allows multiple answers.
     */
    multi?: boolean;
    /**
     * Whether the question is required.
     */
    required?: boolean;
    /**
     * Conditions for the question to be shown.
     */
    conditions?: Array<Record<string, any>>;
    /**
     * The unique identifier of the entity.
     */
    id: string;
};

