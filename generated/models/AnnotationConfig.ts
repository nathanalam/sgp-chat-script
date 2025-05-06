/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationConfigDirectionType } from './AnnotationConfigDirectionType';
import type { AnnotationConfigType } from './AnnotationConfigType';
import type { AnnotationItem } from './AnnotationItem';
import type { AutoEvaluationPrompt } from './AutoEvaluationPrompt';
export type AnnotationConfig = {
    annotation_config_type?: AnnotationConfigType;
    components?: Array<Array<AnnotationItem>>;
    direction?: AnnotationConfigDirectionType;
    llm_prompt?: AutoEvaluationPrompt;
};

