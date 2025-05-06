/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetricID } from './MetricID';
import type { VisualizationMetadata } from './VisualizationMetadata';
import type { VisualizationType } from './VisualizationType';
export type VisualizationDescriptor = {
    id: string;
    title: string;
    type: VisualizationType;
    metric_id: MetricID;
    metadata?: VisualizationMetadata;
};

