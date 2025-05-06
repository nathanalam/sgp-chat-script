/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationDatasetORMSchemaTypeEnum } from './EvaluationDatasetORMSchemaTypeEnum';
export type ManualEvaluationDatasetRequest = {
    /**
     * Manually or automatically generated dataset
     */
    type?: 'manual';
    /**
     * The name of the dataset
     */
    name: string;
    /**
     * The schema type of the dataset
     */
    schema_type: EvaluationDatasetORMSchemaTypeEnum;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

