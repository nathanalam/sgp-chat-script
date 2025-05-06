/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureFlagType } from './FeatureFlagType';
export type FeatureFlag = {
    id: string;
    description: string;
    type: FeatureFlagType;
    value: (boolean | number | string | Record<string, any>);
    updated_at?: string;
};

