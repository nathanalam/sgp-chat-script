/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeduplicationStrategy } from './DeduplicationStrategy';
export type LocalFileSourceConfig = {
    source: 'LocalFile';
    /**
     * Action to take if an artifact with the same name already exists in the knowledge base. Can be either Overwrite (default) or Fail.
     */
    deduplication_strategy?: DeduplicationStrategy;
};

