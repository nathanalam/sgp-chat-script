/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type File = {
    id: string;
    object?: File.object;
    size: number;
    md5_checksum: string;
    filename: string;
    mime_type: string;
    tags?: Record<string, any>;
    created_at: string;
    created_by_user_id: string;
};
export namespace File {
    export enum object {
        FILE = 'file',
    }
}

