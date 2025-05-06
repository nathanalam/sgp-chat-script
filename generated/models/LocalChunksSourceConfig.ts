/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeduplicationStrategy } from './DeduplicationStrategy';
export type LocalChunksSourceConfig = {
    source: 'LocalChunks';
    /**
     * The file name assigned to the artifact, containing a file extension. Adding an extension is mandatory, to allow detecting file types for text extraction.
     */
    artifact_name: string;
    /**
     * A unique identifier for an artifact within the knowledge base, such as full path in a directory or file system.
     */
    artifact_uri: string;
    /**
     * Action to take if an artifact with the same name already exists in the knowledge base. Can be either Overwrite (default) or Fail.
     */
    deduplication_strategy?: DeduplicationStrategy;
};

