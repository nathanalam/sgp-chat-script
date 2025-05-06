/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Dataset = {
    id: string;
    object?: Dataset.object;
    name: string;
    description?: string;
    created_at: string;
    created_by_user_id: string;
    archived_at?: string;
    /**
     * The tags associated with the entity
     */
    tags: Array<string>;
    current_version_num: number;
};
export namespace Dataset {
    export enum object {
        DATASET = 'dataset',
    }
}

