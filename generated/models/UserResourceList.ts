/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserResource } from './UserResource';
export type UserResourceList = {
    object?: UserResourceList.object;
    items: Array<UserResource>;
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
export namespace UserResourceList {
    export enum object {
        LIST = 'list',
    }
}

