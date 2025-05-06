/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LastKMemoryStrategyParams } from './LastKMemoryStrategyParams';
export type LastKMemoryStrategy = {
    /**
     * Name of the memory strategy. Must be `last_k`.
     *
     * This strategy truncates the message history to the last `k` messages. It is the simplest way to prevent the model's context limit from being exceeded. However, this strategy only allows the model to have short term memory. For longer term memory, please use one of the other strategies.
     */
    name?: LastKMemoryStrategy.name;
    /**
     * Configuration parameters for the memory strategy.
     */
    params: LastKMemoryStrategyParams;
};
export namespace LastKMemoryStrategy {
    /**
     * Name of the memory strategy. Must be `last_k`.
     *
     * This strategy truncates the message history to the last `k` messages. It is the simplest way to prevent the model's context limit from being exceeded. However, this strategy only allows the model to have short term memory. For longer term memory, please use one of the other strategies.
     */
    export enum name {
        LAST_K = 'last_k',
    }
}

