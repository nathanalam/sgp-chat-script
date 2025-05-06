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
import type { MetricConfig } from './MetricConfig';
export type DefaultEvaluationRequest = {
    name: string;
    description: string;
    application_spec_id: string;
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
     * Specifies the config for the metrics to be computed.
     */
    metric_config?: MetricConfig;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * Annotation configuration for tasking
     */
    annotation_config?: (AnnotationConfigRequestBase | AnnotationConfigGenerationRequest | AnnotationConfigMultiturnUseCaseRequest | AnnotationConfigSummarizationUseCaseRequest | AnnotationConfigTranslationUseCaseRequest);
    /**
     * create standalone evaluation or build evaluation which will auto generate test case results
     */
    type?: 'default';
};

