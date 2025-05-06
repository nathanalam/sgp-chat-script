/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationAgentsServiceConfiguration } from './ApplicationAgentsServiceConfiguration';
import type { ApplicationConfigurationV0 } from './ApplicationConfigurationV0';
import type { ApplicationSchemaVersion } from './ApplicationSchemaVersion';
import type { OfflineApplicationConfiguration } from './OfflineApplicationConfiguration';
export type ApplicationVariantNestedCreateRequest = {
    name: string;
    /**
     * Optional description of the application variant
     */
    description?: string;
    version: ApplicationSchemaVersion;
    configuration: (ApplicationConfigurationV0 | ApplicationAgentsServiceConfiguration | OfflineApplicationConfiguration);
    /**
     * Whether the application variant is in draft mode
     */
    draft?: boolean;
};

