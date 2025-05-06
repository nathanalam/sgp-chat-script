/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GenerateKnowledgeBaseV2ArtifactDownloadUrlsResponse = {
    /**
     * Map of artifact id to presigned url
     */
    artifact_download_urls: Record<string, string>;
    /**
     * List of artifact ids that failed to generate presigned urls
     */
    failed_artifact_ids: Array<string>;
};

