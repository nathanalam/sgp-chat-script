/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolConfigurationFieldSchema } from './BoolConfigurationFieldSchema';
import type { NodeInput } from './NodeInput';
import type { NodeOutput } from './NodeOutput';
import type { NumberConfigurationFieldSchema } from './NumberConfigurationFieldSchema';
import type { StringConfigurationFieldSchema } from './StringConfigurationFieldSchema';
export type ApplicationNodeSchema = {
    configuration: Record<string, (NumberConfigurationFieldSchema | StringConfigurationFieldSchema | BoolConfigurationFieldSchema)>;
    inputs: Record<string, NodeInput>;
    outputs: Record<string, NodeOutput>;
};

