/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoEvaluationParameters } from './AutoEvaluationParameters';
export type ManualEvaluationConfigRequest = {
    /**
     * Evaluation type
     */
    evaluation_type?: 'studio';
    question_set_id: string;
    studio_project_id?: string;
    /**
     * The name of the model to be used for auto-evaluation. Not applicable for manual evaluations.
     */
    auto_evaluation_model?: null;
    /**
     * Execution parameters for auto-evaluation
     */
    auto_evaluation_parameters?: AutoEvaluationParameters;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

