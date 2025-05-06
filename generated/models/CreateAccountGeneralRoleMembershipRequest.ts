/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessRoleIdentity } from './AccessRoleIdentity';
import type { AccountGeneralRole } from './AccountGeneralRole';
export type CreateAccountGeneralRoleMembershipRequest = {
    /**
     * Identity to add to account
     */
    identity: AccessRoleIdentity;
    /**
     * Role to assign identity to
     */
    role: AccountGeneralRole;
};

