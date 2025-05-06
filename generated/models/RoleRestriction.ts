/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleRestrictionType } from './RoleRestrictionType';
import type { UserGroupRoleRestriction } from './UserGroupRoleRestriction';
export type RoleRestriction = {
    /**
     * The type of restriction
     */
    restriction_type: RoleRestrictionType;
    /**
     * The restriction (currently only user group restrictions)
     */
    restriction: UserGroupRoleRestriction;
};

