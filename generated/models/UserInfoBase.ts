/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessProfile } from './AccessProfile';
export type UserInfoBase = {
    /**
     * User id
     */
    id: string;
    /**
     * First name
     */
    first_name?: string;
    /**
     * Last name
     */
    last_name?: string;
    /**
     * E-mail address
     */
    email: string;
    /**
     * A list of access profiles that the selected user has access to
     */
    access_profiles: Array<AccessProfile>;
    /**
     * The organization ID of the user.
     */
    organization_id?: string;
    /**
     * True if the current user is an organization admin.
     */
    is_organization_admin?: boolean;
    /**
     * User preferences that can be stored in the Scale GenAI Platform.
     */
    preferences?: Record<string, any>;
};

