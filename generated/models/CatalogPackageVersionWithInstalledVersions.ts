/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogDeploymentDependency } from './CatalogDeploymentDependency';
import type { InstallationSummary } from './InstallationSummary';
export type CatalogPackageVersionWithInstalledVersions = {
    id: string;
    version: string;
    release_notes?: string;
    arguments?: Record<string, any>;
    created_at: string;
    deleted_at?: string;
    prerequisites?: Array<Record<string, any>>;
    dependencies: Array<CatalogDeploymentDependency>;
    installations: Array<InstallationSummary>;
};

