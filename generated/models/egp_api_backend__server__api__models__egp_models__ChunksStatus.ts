/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type egp_api_backend__server__api__models__egp_models__ChunksStatus = {
    /**
     * Number of chunks uploaded successfully.
     */
    chunks_completed: number;
    /**
     * Number of chunks awaiting upload.
     */
    chunks_pending: number;
    /**
     * Number of chunks that failed upload.
     */
    chunks_failed: number;
};

