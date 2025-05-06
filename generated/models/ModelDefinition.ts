/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InferenceModelType } from './InferenceModelType';
import type { InferenceModelVendor } from './InferenceModelVendor';
export type ModelDefinition = {
    /**
     * model name, for example `gpt-4o`
     */
    model_name: string;
    /**
     * model vendor, for example `openai`
     */
    model_vendor: InferenceModelVendor;
    /**
     * model type, for example `chat_completion`
     */
    model_type: InferenceModelType;
};

