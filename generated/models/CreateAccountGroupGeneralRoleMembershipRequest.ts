/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessRoleIdentity } from './AccessRoleIdentity';
import type { AccountGroupGeneralRole } from './AccountGroupGeneralRole';
export type CreateAccountGroupGeneralRoleMembershipRequest = {
    /**
     * Identity to add to account group
     */
    identity: AccessRoleIdentity;
    /**
     * Role to assign identity to
     */
    role: AccountGroupGeneralRole;
};

