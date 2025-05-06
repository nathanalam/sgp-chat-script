/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationType } from './AnnotationType';
import type { CategoricalChoice } from './CategoricalChoice';
import type { LLMAutoEvalMetadata } from './LLMAutoEvalMetadata';
export type AnnotationResultExpanded = {
    question_id: string;
    /**
     * The type of annotation result.
     */
    annotation_type: AnnotationType;
    test_case_result_lineage_id: string;
    /**
     * The selected choices(s) for the annotation result, in JSON form. For categorical questions, this is an object or list of objects (depending on if multiple selections are allowed). For free text questions, this is a string. For numeric or rating questions, this is a number.
     */
    selected_choice: (CategoricalChoice | Array<CategoricalChoice> | number | string);
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    llm_auto_eval_metadata?: LLMAutoEvalMetadata;
};

