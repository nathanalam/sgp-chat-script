/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ArtifactsStatus = {
    /**
     * Number of artifacts in the chunking state
     */
    artifacts_chunking: number;
    /**
     * Number of artifacts in the embedding state
     */
    artifacts_embedding: number;
    /**
     * Number of artifacts uploaded successfully.
     */
    artifacts_completed: number;
    /**
     * Previously: Number of artifacts awaiting upload. Note that this status will be deprecated soon and should show 0
     */
    artifacts_pending: number;
    /**
     * Number of artifacts with upload in progress.
     */
    artifacts_uploading: number;
    /**
     * Number of artifacts that failed while being processed.
     */
    artifacts_failed: number;
};

