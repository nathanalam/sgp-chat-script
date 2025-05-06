/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CrossEncoderRankParams } from './CrossEncoderRankParams';
export type CrossEncoderRankStrategy = {
    /**
     * The name of the rank strategy. Must be `cross_encoder`.
     */
    method?: 'cross_encoder';
    /**
     * The parameters needed for ranking.
     */
    params?: CrossEncoderRankParams;
};

