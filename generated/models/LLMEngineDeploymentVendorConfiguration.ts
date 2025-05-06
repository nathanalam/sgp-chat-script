/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GPUType } from './GPUType';
export type LLMEngineDeploymentVendorConfiguration = {
    cpus?: number;
    memory?: string;
    storage?: string;
    gpus?: number;
    gpu_type?: GPUType;
    min_workers?: number;
    max_workers?: number;
    /**
     * The maximum number of concurrent requests that an individual worker can
     * service. Launch automatically scales the number of workers for the endpoint so that
     * each worker is processing ``per_worker`` requests, subject to the limits defined by
     * ``min_workers`` and ``max_workers``.
     *
     * - If the average number of concurrent requests per worker is lower than
     * ``per_worker``, then the number of workers will be reduced. - Otherwise,
     * if the average number of concurrent requests per worker is higher than
     * ``per_worker``, then the number of workers will be increased to meet the elevated
     * traffic.
     *
     * Here is our recommendation for computing ``per_worker``:
     *
     * 1. Compute ``min_workers`` and ``max_workers`` per your minimum and maximum
     * throughput requirements. 2. Determine a value for the maximum number of
     * concurrent requests in the workload. Divide this number by ``max_workers``. Doing
     * this ensures that the number of workers will "climb" to ``max_workers``.
     */
    per_worker?: number;
    vendor?: 'LLMENGINE';
    high_priority?: boolean;
    num_shards?: number;
    checkpoint_path?: string;
    model_name?: string;
    base_model_name?: string;
    inference_framework_image_tag?: string;
};

