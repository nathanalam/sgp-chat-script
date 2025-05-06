/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationVariantNestedCreateRequest } from './ApplicationVariantNestedCreateRequest';
export type ApplicationCreateRequest = {
    /**
     * The name of the Application Spec
     */
    name: string;
    /**
     * The description of the Application Spec
     */
    description: string;
    theme_id?: string;
    /**
     * Whether the application should run online evaluation, default is `false`
     */
    run_online_evaluation?: boolean;
    /**
     * The variant to create with the application
     */
    variants?: Array<ApplicationVariantNestedCreateRequest>;
};

