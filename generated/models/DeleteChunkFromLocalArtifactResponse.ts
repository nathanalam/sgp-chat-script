/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeleteChunkFromLocalArtifactResponse = {
    /**
     * Whether or not the artifact was successfully deleted
     */
    deleted: boolean;
    /**
     * The ID of the artifact from which the chunk was deleted
     */
    artifact_id: string;
    /**
     * The ID of the chunk that was deleted
     */
    chunk_id: string;
};

