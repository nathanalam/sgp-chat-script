/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationConfig } from './AnnotationConfig';
import type { EvaluationORMStatusEnum } from './EvaluationORMStatusEnum';
import type { MetricConfig } from './MetricConfig';
export type LegacyEvaluationResponse = {
    name: string;
    description: string;
    status: EvaluationORMStatusEnum;
    application_spec_id: string;
    application_variant_id?: string;
    tags?: Record<string, any>;
    evaluation_config?: Record<string, any>;
    /**
     * The ID of the associated evaluation config.
     */
    evaluation_config_id?: string;
    /**
     * The date and time that all test case results for the evaluation were completed for the evaluation in ISO format.
     */
    completed_at?: string;
    /**
     * The total number of test case results for the evaluation
     */
    total_test_case_result_count: number;
    /**
     * The number of test case results that have been completed for the evaluation
     */
    completed_test_case_result_count: number;
    /**
     * Annotation configuration for tasking
     */
    annotation_config?: AnnotationConfig;
    /**
     * Specifies the annotation configuration to use for specific questions.
     */
    question_id_to_annotation_config?: Record<string, AnnotationConfig>;
    /**
     * Specifies the config for the metrics to be computed.
     */
    metric_config?: MetricConfig;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
};

