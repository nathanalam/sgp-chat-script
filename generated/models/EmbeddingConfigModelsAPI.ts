/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EmbeddingConfigModelsAPI = {
    /**
     * The type of the embedding configuration.
     */
    type: EmbeddingConfigModelsAPI.type;
    /**
     * The ID of the deployment of the created model in the Models API V3.
     */
    model_deployment_id: string;
};
export namespace EmbeddingConfigModelsAPI {
    /**
     * The type of the embedding configuration.
     */
    export enum type {
        MODELS_API = 'models_api',
    }
}

