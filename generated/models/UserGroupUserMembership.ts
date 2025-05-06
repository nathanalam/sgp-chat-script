/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserV2Details } from './UserV2Details';
export type UserGroupUserMembership = {
    /**
     * User group ID
     */
    user_group_id: string;
    /**
     * Member user
     */
    user: UserV2Details;
    /**
     * ISO datetime of creation
     */
    created_at?: string;
    /**
     * User ID of creator
     */
    created_by_user_id?: string;
};

