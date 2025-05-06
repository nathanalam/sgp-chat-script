/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CrossEncoderRankParams = {
    /**
     * Cross encoder model to use when ranking. Currently supports [cross-encoder/ms-marco-MiniLM-L-12-v2](https://huggingface.co/cross-encoder/ms-marco-MiniLM-L-12-v2) and [cross-encoder/mmarco-mMiniLMv2-L12-H384-v1](https://huggingface.co/cross-encoder/mmarco-mMiniLMv2-L12-H384-v1).
     */
    cross_encoder_model?: CrossEncoderRankParams.cross_encoder_model;
};
export namespace CrossEncoderRankParams {
    /**
     * Cross encoder model to use when ranking. Currently supports [cross-encoder/ms-marco-MiniLM-L-12-v2](https://huggingface.co/cross-encoder/ms-marco-MiniLM-L-12-v2) and [cross-encoder/mmarco-mMiniLMv2-L12-H384-v1](https://huggingface.co/cross-encoder/mmarco-mMiniLMv2-L12-H384-v1).
     */
    export enum cross_encoder_model {
        CROSS_ENCODER_MS_MARCO_MINI_LM_L_12_V2 = 'cross-encoder/ms-marco-MiniLM-L-12-v2',
        CROSS_ENCODER_MMARCO_M_MINI_LMV2_L12_H384_V1 = 'cross-encoder/mmarco-mMiniLMv2-L12-H384-v1',
    }
}

