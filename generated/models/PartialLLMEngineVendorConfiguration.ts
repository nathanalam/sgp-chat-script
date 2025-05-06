/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PartialLLMEngineVendorConfiguration = {
    model?: string;
    inference_framework_image_tag?: string;
    nodes_per_worker?: number;
    min_workers?: number;
    max_workers?: number;
    per_worker?: number;
    num_shards?: number;
    labels?: Record<string, string>;
    source?: string;
    inference_framework?: string;
    endpoint_type?: string;
    quantize?: string;
    checkpoint_path?: string;
    post_inference_hooks?: Array<string>;
    cpus?: number;
    gpus?: number;
    memory?: string;
    gpu_type?: string;
    storage?: string;
    high_priority?: boolean;
    default_callback_url?: string;
    public_inference?: boolean;
};

