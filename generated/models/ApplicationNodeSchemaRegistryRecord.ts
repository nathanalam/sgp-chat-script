/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationNodeSchema } from './ApplicationNodeSchema';
import type { ApplicationNodeTagType } from './ApplicationNodeTagType';
import type { ApplicationNodeType } from './ApplicationNodeType';
import type { ApplicationSchemaVersion } from './ApplicationSchemaVersion';
export type ApplicationNodeSchemaRegistryRecord = {
    id: string;
    name: string;
    type: ApplicationNodeType;
    version: ApplicationSchemaVersion;
    nodeSchema: ApplicationNodeSchema;
    tags: Array<ApplicationNodeTagType>;
};

