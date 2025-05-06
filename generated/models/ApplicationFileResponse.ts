/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationFileResponse = {
    id: string;
    file_name: string;
    file_size_bytes: number;
    file_artifact_blob_path?: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
};

