/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThemeVars } from './ThemeVars';
export type ThemeRequest = {
    title: string;
    theme_vars: ThemeVars;
    logo_blob: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

