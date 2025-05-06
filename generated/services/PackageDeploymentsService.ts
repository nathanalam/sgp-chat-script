/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogDeploymentPackageWithInstalledVersions } from '../models/CatalogDeploymentPackageWithInstalledVersions';
import type { CopyDeploymentPackageToControlPlaneHookRequest } from '../models/CopyDeploymentPackageToControlPlaneHookRequest';
import type { CopyDeploymentPackageToControlPlaneHookResponse } from '../models/CopyDeploymentPackageToControlPlaneHookResponse';
import type { DeploymentJobPollResponse } from '../models/DeploymentJobPollResponse';
import type { DeploymentPackageInstallationEntity } from '../models/DeploymentPackageInstallationEntity';
import type { DeploymentPackageJobResponse } from '../models/DeploymentPackageJobResponse';
import type { DeploymentPackageType } from '../models/DeploymentPackageType';
import type { InstallationByType } from '../models/InstallationByType';
import type { InstallDeploymentPackageRequest } from '../models/InstallDeploymentPackageRequest';
import type { InstallDeploymentPackageResponse } from '../models/InstallDeploymentPackageResponse';
import type { ListDeploymentPackagesResponse } from '../models/ListDeploymentPackagesResponse';
import type { UninstallPackageRequest } from '../models/UninstallPackageRequest';
import type { VerifyPackageVersionPrerequisitesRequest } from '../models/VerifyPackageVersionPrerequisitesRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PackageDeploymentsService {
    /**
     * Install a deployment packages
     * @param accountId
     * @param requestBody
     * @returns InstallDeploymentPackageResponse Successful Response
     * @throws ApiError
     */
    public static postV4DeploymentPackagesAccountIdInstall(
        accountId: string,
        requestBody: InstallDeploymentPackageRequest,
    ): CancelablePromise<InstallDeploymentPackageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/deployment-packages/{account_id}/install',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Copy a deployment package to control plane hook
     * @param accountId
     * @param requestBody
     * @returns CopyDeploymentPackageToControlPlaneHookResponse Successful Response
     * @throws ApiError
     */
    public static postV4DeploymentPackagesAccountIdCopyToControlPlaneHook(
        accountId: string,
        requestBody: CopyDeploymentPackageToControlPlaneHookRequest,
    ): CancelablePromise<CopyDeploymentPackageToControlPlaneHookResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/deployment-packages/{account_id}/copy-to-control-plane-hook',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Install a deployment packages
     * @param accountId
     * @param requestBody
     * @returns DeploymentPackageJobResponse Successful Response
     * @throws ApiError
     */
    public static postV4DeploymentPackagesAccountIdInstallAsync(
        accountId: string,
        requestBody: InstallDeploymentPackageRequest,
    ): CancelablePromise<DeploymentPackageJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/deployment-packages/{account_id}/install_async',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Verify that the prerequisites for installing a specific package version are met
     * This endpoint verifies that installation prerequisites are met for a specific package version.
     * The input is the same as for package installations, but the response may be a synchronous one
     * if the package version has no prerequisites.
     * @param accountId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4DeploymentPackagesAccountIdVerifyInstallPrerequisitesMet(
        accountId: string,
        requestBody: VerifyPackageVersionPrerequisitesRequest,
    ): CancelablePromise<(DeploymentPackageJobResponse | null)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/deployment-packages/{account_id}/verify-install-prerequisites-met',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageType
     * @returns ListDeploymentPackagesResponse Successful Response
     * @throws ApiError
     */
    public static getV1DeploymentPackagesAccountId(
        accountId: string,
        packageType?: (Array<DeploymentPackageType> | null),
    ): CancelablePromise<ListDeploymentPackagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/deployment-packages/{account_id}/',
            path: {
                'account_id': accountId,
            },
            query: {
                'package_type': packageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageType
     * @returns ListDeploymentPackagesResponse Successful Response
     * @throws ApiError
     */
    public static getV2DeploymentPackagesAccountId(
        accountId: string,
        packageType?: (Array<DeploymentPackageType> | null),
    ): CancelablePromise<ListDeploymentPackagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/deployment-packages/{account_id}/',
            path: {
                'account_id': accountId,
            },
            query: {
                'package_type': packageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageType
     * @returns ListDeploymentPackagesResponse Successful Response
     * @throws ApiError
     */
    public static getV3DeploymentPackagesAccountId(
        accountId: string,
        packageType?: (Array<DeploymentPackageType> | null),
    ): CancelablePromise<ListDeploymentPackagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/deployment-packages/{account_id}/',
            path: {
                'account_id': accountId,
            },
            query: {
                'package_type': packageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageType
     * @returns ListDeploymentPackagesResponse Successful Response
     * @throws ApiError
     */
    public static getV4DeploymentPackagesAccountId(
        accountId: string,
        packageType?: (Array<DeploymentPackageType> | null),
    ): CancelablePromise<ListDeploymentPackagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/deployment-packages/{account_id}/',
            path: {
                'account_id': accountId,
            },
            query: {
                'package_type': packageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageId
     * @returns CatalogDeploymentPackageWithInstalledVersions Successful Response
     * @throws ApiError
     */
    public static getV1DeploymentPackagesAccountIdPackageDeploymentPackageId(
        accountId: string,
        deploymentPackageId: string,
    ): CancelablePromise<CatalogDeploymentPackageWithInstalledVersions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/deployment-packages/{account_id}/package/{deployment_package_id}',
            path: {
                'account_id': accountId,
                'deployment_package_id': deploymentPackageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageId
     * @returns CatalogDeploymentPackageWithInstalledVersions Successful Response
     * @throws ApiError
     */
    public static getV2DeploymentPackagesAccountIdPackageDeploymentPackageId(
        accountId: string,
        deploymentPackageId: string,
    ): CancelablePromise<CatalogDeploymentPackageWithInstalledVersions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/deployment-packages/{account_id}/package/{deployment_package_id}',
            path: {
                'account_id': accountId,
                'deployment_package_id': deploymentPackageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageId
     * @returns CatalogDeploymentPackageWithInstalledVersions Successful Response
     * @throws ApiError
     */
    public static getV3DeploymentPackagesAccountIdPackageDeploymentPackageId(
        accountId: string,
        deploymentPackageId: string,
    ): CancelablePromise<CatalogDeploymentPackageWithInstalledVersions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/deployment-packages/{account_id}/package/{deployment_package_id}',
            path: {
                'account_id': accountId,
                'deployment_package_id': deploymentPackageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageId
     * @returns CatalogDeploymentPackageWithInstalledVersions Successful Response
     * @throws ApiError
     */
    public static getV4DeploymentPackagesAccountIdPackageDeploymentPackageId(
        accountId: string,
        deploymentPackageId: string,
    ): CancelablePromise<CatalogDeploymentPackageWithInstalledVersions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/deployment-packages/{account_id}/package/{deployment_package_id}',
            path: {
                'account_id': accountId,
                'deployment_package_id': deploymentPackageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageType
     * @returns InstallationByType Successful Response
     * @throws ApiError
     */
    public static getV1DeploymentPackagesAccountIdInstallationsOfTypeDeploymentPackageType(
        accountId: string,
        deploymentPackageType: DeploymentPackageType,
    ): CancelablePromise<Array<InstallationByType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/deployment-packages/{account_id}/installations-of-type/{deployment_package_type}',
            path: {
                'account_id': accountId,
                'deployment_package_type': deploymentPackageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageType
     * @returns InstallationByType Successful Response
     * @throws ApiError
     */
    public static getV2DeploymentPackagesAccountIdInstallationsOfTypeDeploymentPackageType(
        accountId: string,
        deploymentPackageType: DeploymentPackageType,
    ): CancelablePromise<Array<InstallationByType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/deployment-packages/{account_id}/installations-of-type/{deployment_package_type}',
            path: {
                'account_id': accountId,
                'deployment_package_type': deploymentPackageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageType
     * @returns InstallationByType Successful Response
     * @throws ApiError
     */
    public static getV3DeploymentPackagesAccountIdInstallationsOfTypeDeploymentPackageType(
        accountId: string,
        deploymentPackageType: DeploymentPackageType,
    ): CancelablePromise<Array<InstallationByType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/deployment-packages/{account_id}/installations-of-type/{deployment_package_type}',
            path: {
                'account_id': accountId,
                'deployment_package_type': deploymentPackageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentPackageType
     * @returns InstallationByType Successful Response
     * @throws ApiError
     */
    public static getV4DeploymentPackagesAccountIdInstallationsOfTypeDeploymentPackageType(
        accountId: string,
        deploymentPackageType: DeploymentPackageType,
    ): CancelablePromise<Array<InstallationByType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/deployment-packages/{account_id}/installations-of-type/{deployment_package_type}',
            path: {
                'account_id': accountId,
                'deployment_package_type': deploymentPackageType,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Uninstall a deployment package installation
     * @param accountId
     * @param requestBody
     * @returns DeploymentPackageJobResponse Successful Response
     * @throws ApiError
     */
    public static postV1DeploymentPackagesAccountIdUninstallAsync(
        accountId: string,
        requestBody: UninstallPackageRequest,
    ): CancelablePromise<DeploymentPackageJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/deployment-packages/{account_id}/uninstall_async',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Uninstall a deployment package installation
     * @param accountId
     * @param requestBody
     * @returns DeploymentPackageJobResponse Successful Response
     * @throws ApiError
     */
    public static postV2DeploymentPackagesAccountIdUninstallAsync(
        accountId: string,
        requestBody: UninstallPackageRequest,
    ): CancelablePromise<DeploymentPackageJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/deployment-packages/{account_id}/uninstall_async',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Uninstall a deployment package installation
     * @param accountId
     * @param requestBody
     * @returns DeploymentPackageJobResponse Successful Response
     * @throws ApiError
     */
    public static postV3DeploymentPackagesAccountIdUninstallAsync(
        accountId: string,
        requestBody: UninstallPackageRequest,
    ): CancelablePromise<DeploymentPackageJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/deployment-packages/{account_id}/uninstall_async',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Uninstall a deployment package installation
     * @param accountId
     * @param requestBody
     * @returns DeploymentPackageJobResponse Successful Response
     * @throws ApiError
     */
    public static postV4DeploymentPackagesAccountIdUninstallAsync(
        accountId: string,
        requestBody: UninstallPackageRequest,
    ): CancelablePromise<DeploymentPackageJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/deployment-packages/{account_id}/uninstall_async',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentJobId
     * @returns DeploymentJobPollResponse Successful Response
     * @throws ApiError
     */
    public static getV1DeploymentPackagesAccountIdPollDeploymentJobId(
        accountId: string,
        deploymentJobId: string,
    ): CancelablePromise<DeploymentJobPollResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/deployment-packages/{account_id}/poll/{deployment_job_id}',
            path: {
                'account_id': accountId,
                'deployment_job_id': deploymentJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentJobId
     * @returns DeploymentJobPollResponse Successful Response
     * @throws ApiError
     */
    public static getV2DeploymentPackagesAccountIdPollDeploymentJobId(
        accountId: string,
        deploymentJobId: string,
    ): CancelablePromise<DeploymentJobPollResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/deployment-packages/{account_id}/poll/{deployment_job_id}',
            path: {
                'account_id': accountId,
                'deployment_job_id': deploymentJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentJobId
     * @returns DeploymentJobPollResponse Successful Response
     * @throws ApiError
     */
    public static getV3DeploymentPackagesAccountIdPollDeploymentJobId(
        accountId: string,
        deploymentJobId: string,
    ): CancelablePromise<DeploymentJobPollResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/deployment-packages/{account_id}/poll/{deployment_job_id}',
            path: {
                'account_id': accountId,
                'deployment_job_id': deploymentJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get available deployment packages
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param deploymentJobId
     * @returns DeploymentJobPollResponse Successful Response
     * @throws ApiError
     */
    public static getV4DeploymentPackagesAccountIdPollDeploymentJobId(
        accountId: string,
        deploymentJobId: string,
    ): CancelablePromise<DeploymentJobPollResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/deployment-packages/{account_id}/poll/{deployment_job_id}',
            path: {
                'account_id': accountId,
                'deployment_job_id': deploymentJobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List all packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV1DeploymentPackagesAccountIdInstallation(
        accountId: string,
    ): CancelablePromise<Array<DeploymentPackageInstallationEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/deployment-packages/{account_id}/installation/',
            path: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List all packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV2DeploymentPackagesAccountIdInstallation(
        accountId: string,
    ): CancelablePromise<Array<DeploymentPackageInstallationEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/deployment-packages/{account_id}/installation/',
            path: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List all packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV3DeploymentPackagesAccountIdInstallation(
        accountId: string,
    ): CancelablePromise<Array<DeploymentPackageInstallationEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/deployment-packages/{account_id}/installation/',
            path: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List all packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV4DeploymentPackagesAccountIdInstallation(
        accountId: string,
    ): CancelablePromise<Array<DeploymentPackageInstallationEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/deployment-packages/{account_id}/installation/',
            path: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get specific packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageInstallationId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV1DeploymentPackagesAccountIdInstallationPackageInstallationId(
        accountId: string,
        packageInstallationId: string,
    ): CancelablePromise<DeploymentPackageInstallationEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/deployment-packages/{account_id}/installation/{package_installation_id}',
            path: {
                'account_id': accountId,
                'package_installation_id': packageInstallationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get specific packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageInstallationId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV2DeploymentPackagesAccountIdInstallationPackageInstallationId(
        accountId: string,
        packageInstallationId: string,
    ): CancelablePromise<DeploymentPackageInstallationEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/deployment-packages/{account_id}/installation/{package_installation_id}',
            path: {
                'account_id': accountId,
                'package_installation_id': packageInstallationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get specific packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageInstallationId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV3DeploymentPackagesAccountIdInstallationPackageInstallationId(
        accountId: string,
        packageInstallationId: string,
    ): CancelablePromise<DeploymentPackageInstallationEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/deployment-packages/{account_id}/installation/{package_installation_id}',
            path: {
                'account_id': accountId,
                'package_installation_id': packageInstallationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get specific packages installed in account
     * Returns the list of available packages as well as those package versions
     * installed in the given account.
     * @param accountId
     * @param packageInstallationId
     * @returns DeploymentPackageInstallationEntity Successful Response
     * @throws ApiError
     */
    public static getV4DeploymentPackagesAccountIdInstallationPackageInstallationId(
        accountId: string,
        packageInstallationId: string,
    ): CancelablePromise<DeploymentPackageInstallationEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/deployment-packages/{account_id}/installation/{package_installation_id}',
            path: {
                'account_id': accountId,
                'package_installation_id': packageInstallationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
