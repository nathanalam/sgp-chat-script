/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response model for exporting application interactions.
 *
 * This class represents the response when users export application interaction data.
 * It contains either a signed URL to download the exported data from object storage,
 * or the actual content bytes when direct download is used (in environments where object storage is not configured).
 */
export type ApplicationInteractionExportResponse = {
    /**
     * The name of the exported file
     */
    filename: string;
    /**
     * Pre-signed URL to download the file from object storage, if applicable
     */
    signed_url?: string;
    /**
     * The raw file content as bytes, used when direct download is enabled
     */
    content?: Blob;
};

