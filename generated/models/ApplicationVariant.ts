/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationAgentsServiceConfiguration } from './ApplicationAgentsServiceConfiguration';
import type { ApplicationConfigurationV0 } from './ApplicationConfigurationV0';
import type { ApplicationSchemaVersion } from './ApplicationSchemaVersion';
import type { OfflineApplicationConfiguration } from './OfflineApplicationConfiguration';
export type ApplicationVariant = {
    id: string;
    object?: ApplicationVariant.object;
    name: string;
    /**
     * Optional description of the application variant
     */
    description?: string;
    configuration: (ApplicationConfigurationV0 | ApplicationAgentsServiceConfiguration | OfflineApplicationConfiguration);
    /**
     * Boolean to indicate whether the variant is in draft mode
     */
    draft: boolean;
    version: ApplicationSchemaVersion;
    application_id: string;
    /**
     * The date and time when the entity was published in ISO format.
     */
    published_at?: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id?: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
};
export namespace ApplicationVariant {
    export enum object {
        APPLICATION_VARIANT = 'application_variant',
    }
}

