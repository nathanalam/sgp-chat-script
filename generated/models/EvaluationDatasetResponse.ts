/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationDatasetORMSchemaTypeEnum } from './EvaluationDatasetORMSchemaTypeEnum';
import type { EvaluationDatasetSchemaSubType } from './EvaluationDatasetSchemaSubType';
import type { EvaluationDatasetVendor } from './EvaluationDatasetVendor';
export type EvaluationDatasetResponse = {
    /**
     * The name of the dataset
     */
    name: string;
    /**
     * The schema type of the dataset.
     */
    schema_type: EvaluationDatasetORMSchemaTypeEnum;
    /**
     * ID of the knowledge base that the evaluation dataset is associated with.
     */
    knowledge_base_id?: string;
    /**
     * Metadata about the Evaluation Dataset that it is associated with
     */
    evaluation_dataset_metadata?: Record<string, any>;
    /**
     * Boolean to check whether or not the knowledge base has been uploaded to since publication of the dataset.
     */
    out_of_date?: boolean;
    /**
     * The vendor of the evaluation dataset (e.g. 'Scale' for Scale off-the-shelf datasets). Null if the evaluation dataset is not from a vendor (e.g., is created by the customer).
     */
    vendor?: EvaluationDatasetVendor;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
    schema_sub_type?: EvaluationDatasetSchemaSubType;
};

