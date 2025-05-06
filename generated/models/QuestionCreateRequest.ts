/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoricalChoice } from './CategoricalChoice';
import type { FreeTextQuestionOptions } from './FreeTextQuestionOptions';
import type { NumberQuestionOptions } from './NumberQuestionOptions';
import type { QuestionORMTypeEnum } from './QuestionORMTypeEnum';
import type { RatingQuestionOptions } from './RatingQuestionOptions';
export type QuestionCreateRequest = {
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
};

