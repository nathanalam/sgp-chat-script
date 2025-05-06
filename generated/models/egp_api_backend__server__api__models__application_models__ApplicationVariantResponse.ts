/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationAgentsServiceConfiguration } from './ApplicationAgentsServiceConfiguration';
import type { ApplicationConfigurationV0 } from './ApplicationConfigurationV0';
import type { ApplicationSchemaVersion } from './ApplicationSchemaVersion';
import type { OfflineApplicationConfiguration } from './OfflineApplicationConfiguration';
export type egp_api_backend__server__api__models__application_models__ApplicationVariantResponse = {
    id: string;
    name: string;
    /**
     * Optional description of the application variant
     */
    description?: string;
    configuration: (ApplicationConfigurationV0 | ApplicationAgentsServiceConfiguration | OfflineApplicationConfiguration);
    version: ApplicationSchemaVersion;
    application_spec_id: string;
    /**
     * Boolean to indicate whether the variant is in draft mode
     */
    draft: boolean;
    /**
     * The date and time that the variant was published.
     */
    published_at?: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id?: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
};

