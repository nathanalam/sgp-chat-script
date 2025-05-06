/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from './Account';
import type { Role } from './Role';
export type AccessProfile = {
    /**
     * Access profile id.
     */
    id: string;
    /**
     * Id of the user in the access profile.
     */
    user_id: string;
    /**
     * The role of the user in the access profile.
     */
    role: Role;
    /**
     * The account in the access profile.
     */
    account: Account;
};

