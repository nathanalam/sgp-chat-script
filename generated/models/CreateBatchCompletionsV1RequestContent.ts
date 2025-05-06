/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateBatchCompletionsV1RequestContent = {
    prompts: Array<string>;
    max_new_tokens: number;
    temperature: number;
    stop_sequences?: Array<string>;
    return_token_log_probs?: boolean;
    presence_penalty?: number;
    frequency_penalty?: number;
    top_k?: number;
    top_p?: number;
    skip_special_tokens?: boolean;
};

