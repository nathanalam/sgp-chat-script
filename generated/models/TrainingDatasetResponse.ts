/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataSource } from './DataSource';
import type { TrainingDatasetORMSchemaTypeEnum } from './TrainingDatasetORMSchemaTypeEnum';
export type TrainingDatasetResponse = {
    /**
     * The name of the dataset
     */
    name: string;
    /**
     * The schema type of the dataset, currently only GENERATION is supported
     */
    schema_type: TrainingDatasetORMSchemaTypeEnum;
    /**
     * The data source of the dataset, used to determine how to parse the location
     */
    data_source: DataSource;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
};

