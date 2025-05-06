/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RunEvaluationAutoEvalRequest = {
    account_id?: string;
    /**
     * The name of the model to be used for auto-evaluation, if one is not present in the evaluation config.
     */
    model_name?: RunEvaluationAutoEvalRequest.model_name;
};
export namespace RunEvaluationAutoEvalRequest {
    /**
     * The name of the model to be used for auto-evaluation, if one is not present in the evaluation config.
     */
    export enum model_name {
        LLAMA_3_1_70B_INSTRUCT = 'llama-3-1-70b-instruct',
        GPT_4_TURBO_2024_04_09 = 'gpt-4-turbo-2024-04-09',
        LLAMA_3_70B_INSTRUCT_BEDROCK = 'llama-3-70b-instruct-bedrock',
        GPT_4O = 'gpt-4o',
        GPT_4O_MINI = 'gpt-4o-mini',
        O1 = 'o1',
    }
}

