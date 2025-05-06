/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThemeVars } from './ThemeVars';
export type ThemeResponse = {
    id: string;
    title: string;
    theme_vars: ThemeVars;
    logo_blob: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

