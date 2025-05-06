/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessRoleIdentityWithEntity } from './AccessRoleIdentityWithEntity';
import type { AccountGroupGeneralRole } from './AccountGroupGeneralRole';
export type AccountGroupGeneralRoleMembershipWithEntity = {
    /**
     * Account group membership is for
     */
    account_group_id: string;
    /**
     * Identity with role
     */
    identity: AccessRoleIdentityWithEntity;
    /**
     * General role level
     */
    role: AccountGroupGeneralRole;
};

