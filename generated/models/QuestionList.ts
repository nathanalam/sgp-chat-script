/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Question } from './Question';
export type QuestionList = {
    object?: QuestionList.object;
    items: Array<Question>;
    /**
     * The maximum number of items to return.
     */
    limit?: number;
    /**
     * The total of items that match the query. This is greater than or equal to the number of items returned.
     */
    total: number;
    /**
     * Whether there are more items left to be fetched.
     */
    has_more: boolean;
};
export namespace QuestionList {
    export enum object {
        LIST = 'list',
    }
}

