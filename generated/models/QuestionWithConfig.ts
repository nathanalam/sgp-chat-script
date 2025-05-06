/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoricalChoice } from './CategoricalChoice';
import type { FreeTextQuestionOptions } from './FreeTextQuestionOptions';
import type { NumberQuestionOptions } from './NumberQuestionOptions';
import type { QuestionORMTypeEnum } from './QuestionORMTypeEnum';
import type { QuestionSetQuestionConfig } from './QuestionSetQuestionConfig';
import type { RatingQuestionOptions } from './RatingQuestionOptions';
export type QuestionWithConfig = {
    id: string;
    object?: QuestionWithConfig.object;
    type: QuestionORMTypeEnum;
    title: string;
    prompt: string;
    choices?: Array<CategoricalChoice>;
    ratingOptions?: RatingQuestionOptions;
    numberOptions?: NumberQuestionOptions;
    freeTextOptions?: FreeTextQuestionOptions;
    multi?: boolean;
    dropdown?: boolean;
    required?: boolean;
    conditions?: Array<Record<string, any>>;
    default?: any;
    created_at: string;
    created_by_user_id: string;
    /**
     * Specifies additional configurations to use for the question in the context of the question set. For example, `{required: true}` sets the question as required. Writes to the question_id_to_config field on the response
     */
    override_config?: QuestionSetQuestionConfig;
};
export namespace QuestionWithConfig {
    export enum object {
        QUESTION = 'question',
    }
}

