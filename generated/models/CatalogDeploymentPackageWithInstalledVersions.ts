/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogPackageVersionWithInstalledVersions } from './CatalogPackageVersionWithInstalledVersions';
import type { DeploymentPackageType } from './DeploymentPackageType';
export type CatalogDeploymentPackageWithInstalledVersions = {
    id: string;
    name: string;
    description?: string;
    deployment_package_type: DeploymentPackageType;
    is_installable_from_ui?: boolean;
    updated_at: string;
    deleted_at?: string;
    versions: Array<CatalogPackageVersionWithInstalledVersions>;
};

