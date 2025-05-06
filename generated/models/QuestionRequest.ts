/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoricalChoice } from './CategoricalChoice';
import type { FreeTextQuestionOptions } from './FreeTextQuestionOptions';
import type { NumberQuestionOptions } from './NumberQuestionOptions';
import type { QuestionORMTypeEnum } from './QuestionORMTypeEnum';
import type { RatingQuestionOptions } from './RatingQuestionOptions';
export type QuestionRequest = {
    /**
     * The type of question
     */
    type: QuestionORMTypeEnum;
    title: string;
    prompt: string;
    /**
     * List of choices for the question. Required for CATEGORICAL questions.
     */
    choices?: Array<CategoricalChoice>;
    /**
     * Options for rating questions.
     */
    ratingOptions?: RatingQuestionOptions;
    /**
     * Options for number questions.
     */
    numberOptions?: NumberQuestionOptions;
    /**
     * Options for free text questions.
     */
    freeTextOptions?: FreeTextQuestionOptions;
    /**
     * Whether the question allows multiple answers.
     */
    multi?: boolean;
    /**
     * Whether the question is displayed as a dropdown in the UI.
     */
    dropdown?: boolean;
    /**
     * [To be deprecated in favor of question set question_id_to_config] Whether the question is required.
     */
    required?: boolean;
    /**
     * Conditions for the question to be shown.
     */
    conditions?: Array<Record<string, any>>;
    /**
     * The default value for the question.
     */
    default?: any;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

