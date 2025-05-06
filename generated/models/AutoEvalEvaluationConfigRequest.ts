/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoEvaluationParameters } from './AutoEvaluationParameters';
export type AutoEvalEvaluationConfigRequest = {
    /**
     * Evaluation type
     */
    evaluation_type?: 'llm_benchmark';
    question_set_id: string;
    studio_project_id?: string;
    /**
     * The name of the model to be used for auto-evaluation
     */
    auto_evaluation_model?: AutoEvalEvaluationConfigRequest.auto_evaluation_model;
    /**
     * Execution parameters for auto-evaluation
     */
    auto_evaluation_parameters?: AutoEvaluationParameters;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};
export namespace AutoEvalEvaluationConfigRequest {
    /**
     * The name of the model to be used for auto-evaluation
     */
    export enum auto_evaluation_model {
        LLAMA_3_1_70B_INSTRUCT = 'llama-3-1-70b-instruct',
        GPT_4_TURBO_2024_04_09 = 'gpt-4-turbo-2024-04-09',
        LLAMA_3_70B_INSTRUCT_BEDROCK = 'llama-3-70b-instruct-bedrock',
        GPT_4O = 'gpt-4o',
        GPT_4O_MINI = 'gpt-4o-mini',
        O1 = 'o1',
    }
}

