/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGeneralRole } from './AccountGeneralRole';
import type { RoleRestriction } from './RoleRestriction';
export type AccountGeneralRoleRestriction = {
    /**
     * The organization the restriction is for
     */
    organization_id: string;
    /**
     * The general account role being restricted
     */
    role: AccountGeneralRole;
    /**
     * The restriction
     */
    restriction: RoleRestriction;
    /**
     * ISO datetime of creation
     */
    created_at: string;
    /**
     * User ID of creator
     */
    created_by_user_id?: string;
    /**
     * ISO datetime of last modification
     */
    updated_at: string;
    /**
     * User ID of last modifier
     */
    updated_by_user_id?: string;
};

