/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemLocator } from './ItemLocator';
import type { ItemLocatorTemplate } from './ItemLocatorTemplate';
export type QuestionAutoEvaluationRequestWithItemLocator = {
    /**
     * model specified as `model_vendor/model_name`
     */
    model: string;
    prompt: (string | ItemLocator | ItemLocatorTemplate);
    /**
     * question to be evaluated
     */
    question_id: string;
};

