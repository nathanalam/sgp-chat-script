/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBatchCompletionsV1ModelConfig } from './CreateBatchCompletionsV1ModelConfig';
import type { CreateBatchCompletionsV1RequestContent } from './CreateBatchCompletionsV1RequestContent';
import type { ToolConfig } from './ToolConfig';
export type LLMEngineBatchCompletionsVendorConfiguration = {
    /**
     * Path to the input file. The input file should be a JSON file of type List[CreateBatchCompletionsRequestContent].
     */
    input_data_path?: string;
    /**
     * Path to the output file. The output file will be a JSON file of type List[CompletionOutput].
     */
    output_data_path: string;
    /**
     * Labels to attach to the batch inference job.
     */
    labels?: Record<string, string>;
    /**
     * Number of replicas to run the batch inference. More replicas are slower to schedule but faster to inference.
     */
    data_parallelism?: number;
    /**
     * Maximum runtime of the batch inference in seconds. Default to one day.
     */
    max_runtime_sec?: number;
    /**
     * Priority of the batch inference job. Default to None.
     */
    priority?: string;
    /**
     *
     * Configuration for tool use.
     * NOTE: this config is highly experimental and signature will change significantly in future iterations.
     */
    tool_config?: ToolConfig;
    content?: CreateBatchCompletionsV1RequestContent;
    model_config: CreateBatchCompletionsV1ModelConfig;
    vendor?: LLMEngineBatchCompletionsVendorConfiguration.vendor;
};
export namespace LLMEngineBatchCompletionsVendorConfiguration {
    export enum vendor {
        LLMENGINE = 'LLMENGINE',
    }
}

