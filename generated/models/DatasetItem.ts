/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DatasetItem = {
    id: string;
    object?: DatasetItem.object;
    dataset_id?: string;
    data: any;
    content_hash: string;
    created_at: string;
    created_by_user_id: string;
    archived_at?: string;
};
export namespace DatasetItem {
    export enum object {
        DATASET_ITEM = 'dataset.item',
    }
}

