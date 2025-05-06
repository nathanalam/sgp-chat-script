/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoEvaluationPrompt } from './AutoEvaluationPrompt';
import type { DataLoc } from './DataLoc';
export type AnnotationConfigTranslationUseCaseRequest = {
    original_text_loc: DataLoc;
    translation_loc: DataLoc;
    language_loc?: DataLoc;
    expected_translation_loc?: DataLoc;
    llm_prompt?: AutoEvaluationPrompt;
};

