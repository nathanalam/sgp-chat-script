/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationFieldValue } from './ConfigurationFieldValue';
import type { NodeSchemaId } from './NodeSchemaId';
export type ApplicationNode = {
    id: string;
    application_node_schema_id: NodeSchemaId;
    configuration?: Record<string, ConfigurationFieldValue>;
};

