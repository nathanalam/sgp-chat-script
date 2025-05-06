/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentPackageType } from './DeploymentPackageType';
import type { PackageVersionConstraint } from './PackageVersionConstraint';
export type CopyDeploymentPackageToControlPlaneHookRequest = {
    deployment_package_id?: string;
    deployment_package_name?: string;
    deployment_package_type?: DeploymentPackageType;
    version_constraint?: PackageVersionConstraint;
    workspace: string;
};

