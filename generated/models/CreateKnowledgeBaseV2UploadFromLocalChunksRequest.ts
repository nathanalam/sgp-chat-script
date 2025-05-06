/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactChunkUpload } from './ArtifactChunkUpload';
import type { LocalChunksSourceConfig } from './LocalChunksSourceConfig';
import type { TaggingInformation } from './TaggingInformation';
export type CreateKnowledgeBaseV2UploadFromLocalChunksRequest = {
    /**
     * Configuration for the data source which describes where to find the data.
     */
    data_source_config: LocalChunksSourceConfig;
    /**
     * List of chunks.
     */
    chunks?: Array<ArtifactChunkUpload>;
    /**
     * Force reingest, regardless the change of the source file.
     */
    force_reupload?: boolean;
    /**
     * A dictionary of tags to apply to all artifacts added from the data source.
     */
    tagging_information?: TaggingInformation;
};

