/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoEvalBaseModelName } from './AutoEvalBaseModelName';
import type { AutoEvaluationParameters } from './AutoEvaluationParameters';
import type { EvaluationConfigORMEvaluationTypeEnum } from './EvaluationConfigORMEvaluationTypeEnum';
import type { QuestionSetWithQuestions } from './QuestionSetWithQuestions';
export type EvaluationConfigExpanded = {
    /**
     * Evaluation type
     */
    evaluation_type: EvaluationConfigORMEvaluationTypeEnum;
    question_set_id: string;
    studio_project_id?: string;
    /**
     * The name of the model to be used for auto-evaluation
     */
    auto_evaluation_model?: AutoEvalBaseModelName;
    /**
     * Execution parameters for auto-evaluation
     */
    auto_evaluation_parameters?: AutoEvaluationParameters;
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
    question_set: QuestionSetWithQuestions;
};

