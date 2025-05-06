/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrainingDatasetORMSchemaTypeEnum } from './TrainingDatasetORMSchemaTypeEnum';
export type Body_POST_V3__training_datasets = {
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The name of the dataset
     */
    name: string;
    /**
     * The schema type of the dataset, currently only GENERATION is supported
     */
    schema_type: TrainingDatasetORMSchemaTypeEnum;
    /**
     * The file to upload as the training dataset
     */
    file: Blob;
};

