/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequiredResources } from './RequiredResources';
import type { TrainingDatasetORMSchemaTypeEnum } from './TrainingDatasetORMSchemaTypeEnum';
export type FineTuningBundleConfiguration = {
    registry: string;
    image: string;
    tag: string;
    command?: Array<string>;
    env?: Record<string, string>;
    /**
     * The filesystem location where the fine tuning job's configuration will be available when it is started.
     */
    mount_location?: string;
    /**
     * Optionally set required training and validation dataset schema
     */
    training_dataset_schema_type?: TrainingDatasetORMSchemaTypeEnum;
    resources?: RequiredResources;
};

