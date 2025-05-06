/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EvaluationItem = {
    id: string;
    object?: EvaluationItem.object;
    evaluation_id: string;
    dataset_item_id?: string;
    dataset_item_version_num?: number;
    data: Record<string, any>;
    created_at: string;
    created_by_user_id: string;
    archived_at?: string;
};
export namespace EvaluationItem {
    export enum object {
        EVALUATION_ITEM = 'evaluation.item',
    }
}

