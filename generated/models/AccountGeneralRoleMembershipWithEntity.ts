/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessRoleIdentityWithEntity } from './AccessRoleIdentityWithEntity';
import type { AccountGeneralRole } from './AccountGeneralRole';
export type AccountGeneralRoleMembershipWithEntity = {
    /**
     * Account membership is for
     */
    account_id: string;
    /**
     * Identity with role
     */
    identity: AccessRoleIdentityWithEntity;
    /**
     * General role level
     */
    role: AccountGeneralRole;
};

