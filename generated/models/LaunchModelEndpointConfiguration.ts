/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LaunchModelEndpointConfiguration = {
    endpoint_type?: LaunchModelEndpointConfiguration.endpoint_type;
    cpus?: (string | number);
    gpus?: number;
    gpu_type?: LaunchModelEndpointConfiguration.gpu_type;
    memory?: string;
    storage?: string;
    min_workers?: number;
    max_workers?: number;
    per_worker?: number;
    high_priority?: boolean;
    labels?: Record<string, string>;
    public_inference?: boolean;
};
export namespace LaunchModelEndpointConfiguration {
    export enum endpoint_type {
        ASYNC = 'async',
        SYNC = 'sync',
        STREAMING = 'streaming',
    }
    export enum gpu_type {
        NVIDIA_TESLA_T4 = 'nvidia-tesla-t4',
        NVIDIA_AMPERE_A10 = 'nvidia-ampere-a10',
        NVIDIA_AMPERE_A100 = 'nvidia-ampere-a100',
        NVIDIA_AMPERE_A100E = 'nvidia-ampere-a100e',
        NVIDIA_HOPPER_H100 = 'nvidia-hopper-h100',
        NVIDIA_HOPPER_H100_1G20GB = 'nvidia-hopper-h100-1g20gb',
        NVIDIA_HOPPER_H100_3G40GB = 'nvidia-hopper-h100-3g40gb',
    }
}

