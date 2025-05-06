/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LLMAutoEvalMetadata = {
    /**
     * The cost of the annotation in cents.
     */
    cost?: number;
    prompt_tokens: number;
    completion_tokens: number;
    /**
     * The time elapsed to generate this annotation in seconds.
     */
    time_elapsed_s: number;
    /**
     * The reasoning the LLM gave for the annotation it provided.
     */
    llm_reasoning: string;
    /**
     * The ID of the associated annotation result.
     */
    annotation_result_id: string;
};

