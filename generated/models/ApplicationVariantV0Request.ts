/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationConfigurationV0 } from './ApplicationConfigurationV0';
export type ApplicationVariantV0Request = {
    name: string;
    /**
     * Optional description of the application variant
     */
    description?: string;
    configuration: ApplicationConfigurationV0;
    version: 'V0';
    application_spec_id: string;
    /**
     * Boolean to indicate whether the variant is in draft mode
     */
    draft?: boolean;
    /**
     * The date and time that the variant was published.
     */
    published_at?: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
};

