/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateBatchCompletionsV1ModelConfig = {
    /**
     * ID of the model to use.
     */
    model: string;
    /**
     * Path to the checkpoint to load the model from.
     */
    checkpoint_path?: string;
    /**
     *
     * Suggested number of shards to distribute the model. When not specified, will infer the number of shards based on model config.
     * System may decide to use a different number than the given value.
     *
     */
    num_shards?: number;
    /**
     * Maximum context length to use for the model. Defaults to the max allowed by the model
     */
    max_context_length?: number;
    /**
     * Random seed for the model.
     */
    seed?: number;
    /**
     * Role of the response in the conversation. Only supported in chat completions.
     */
    response_role?: string;
    /**
     * Labels to attach to the batch inference job.
     */
    labels?: Record<string, string>;
};

