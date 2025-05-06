/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationConfig } from './AnnotationConfig';
import type { AnnotationConfigGenerationRequest } from './AnnotationConfigGenerationRequest';
import type { AnnotationConfigMultiturnUseCaseRequest } from './AnnotationConfigMultiturnUseCaseRequest';
import type { AnnotationConfigRequestBase } from './AnnotationConfigRequestBase';
import type { AnnotationConfigSummarizationUseCaseRequest } from './AnnotationConfigSummarizationUseCaseRequest';
import type { AnnotationConfigTranslationUseCaseRequest } from './AnnotationConfigTranslationUseCaseRequest';
export type PartialPatchEvaluationRequest = {
    name?: string;
    description?: string;
    application_spec_id?: string;
    application_variant_id?: string;
    tags?: Record<string, any>;
    evaluation_config?: Record<string, any>;
    /**
     * The ID of the associated evaluation config.
     */
    evaluation_config_id?: string;
    /**
     * Specifies the annotation configuration to use for specific questions.
     */
    question_id_to_annotation_config?: Record<string, AnnotationConfig>;
    /**
     * Annotation configuration for tasking
     */
    annotation_config?: (AnnotationConfigRequestBase | AnnotationConfigGenerationRequest | AnnotationConfigMultiturnUseCaseRequest | AnnotationConfigSummarizationUseCaseRequest | AnnotationConfigTranslationUseCaseRequest);
    /**
     * If llm_benchmark is provided, the evaluation will be updated to a hybrid evaluation. No-op on existing hybrid evaluations, and not available for studio evaluations.
     */
    evaluation_type?: PartialPatchEvaluationRequest.evaluation_type;
    /**
     * Set to true to restore the entity from the database.
     */
    restore?: 'False';
};
export namespace PartialPatchEvaluationRequest {
    /**
     * If llm_benchmark is provided, the evaluation will be updated to a hybrid evaluation. No-op on existing hybrid evaluations, and not available for studio evaluations.
     */
    export enum evaluation_type {
        LLM_BENCHMARK = 'llm_benchmark',
    }
}

