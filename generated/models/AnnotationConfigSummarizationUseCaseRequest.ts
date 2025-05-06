/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoEvaluationPrompt } from './AutoEvaluationPrompt';
import type { DataLoc } from './DataLoc';
export type AnnotationConfigSummarizationUseCaseRequest = {
    document_loc: DataLoc;
    summary_loc: DataLoc;
    expected_summary_loc?: DataLoc;
    llm_prompt?: AutoEvaluationPrompt;
};

