/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';
import type { ApplicationCreateRequest } from '../models/ApplicationCreateRequest';
import type { ApplicationDelete } from '../models/ApplicationDelete';
import type { ApplicationDeploymentRequest } from '../models/ApplicationDeploymentRequest';
import type { ApplicationDeploymentResponse } from '../models/ApplicationDeploymentResponse';
import type { ApplicationFileResponse } from '../models/ApplicationFileResponse';
import type { ApplicationList } from '../models/ApplicationList';
import type { ApplicationNodeSchemaRegistryRecord } from '../models/ApplicationNodeSchemaRegistryRecord';
import type { ApplicationProcessingRequest } from '../models/ApplicationProcessingRequest';
import type { ApplicationSchemaVersion } from '../models/ApplicationSchemaVersion';
import type { ApplicationSpecWithActiveDeployment } from '../models/ApplicationSpecWithActiveDeployment';
import type { ApplicationTestCaseOutputRequest } from '../models/ApplicationTestCaseOutputRequest';
import type { ApplicationTestCaseOutputResponse } from '../models/ApplicationTestCaseOutputResponse';
import type { ApplicationTestCaseOutputResponseWithViews } from '../models/ApplicationTestCaseOutputResponseWithViews';
import type { ApplicationTestCaseOutputViewsOptions } from '../models/ApplicationTestCaseOutputViewsOptions';
import type { ApplicationThreadForkingRequest } from '../models/ApplicationThreadForkingRequest';
import type { ApplicationThreadForkingResponse } from '../models/ApplicationThreadForkingResponse';
import type { ApplicationUpdateRequest } from '../models/ApplicationUpdateRequest';
import type { ApplicationValidationRequest } from '../models/ApplicationValidationRequest';
import type { ApplicationVariantReportGenerationRequest } from '../models/ApplicationVariantReportGenerationRequest';
import type { ApplicationVariantReportViewsOptions } from '../models/ApplicationVariantReportViewsOptions';
import type { ApplicationVariantReportWithScoresResponse } from '../models/ApplicationVariantReportWithScoresResponse';
import type { ApplicationVariantReportWithScoresResponseWithViews } from '../models/ApplicationVariantReportWithScoresResponseWithViews';
import type { ApplicationVariantRequest } from '../models/ApplicationVariantRequest';
import type { ApplicationViews } from '../models/ApplicationViews';
import type { Body_POST_V4__applications_upload_files } from '../models/Body_POST_V4__applications_upload_files';
import type { ChatThreadRequest } from '../models/ChatThreadRequest';
import type { ChatThreadResponse } from '../models/ChatThreadResponse';
import type { CreateApplicationWithVariantRequest } from '../models/CreateApplicationWithVariantRequest';
import type { DeleteResponse } from '../models/DeleteResponse';
import type { DeployedApplication } from '../models/DeployedApplication';
import type { egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse } from '../models/egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse';
import type { OfflineApplicationEvaluationDataset } from '../models/OfflineApplicationEvaluationDataset';
import type { PaginatedApplicationDeploymentResponse } from '../models/PaginatedApplicationDeploymentResponse';
import type { PaginatedApplicationSpecWithEvaluationCount } from '../models/PaginatedApplicationSpecWithEvaluationCount';
import type { PaginatedApplicationTestCaseOutputResponseWithViews } from '../models/PaginatedApplicationTestCaseOutputResponseWithViews';
import type { PaginatedApplicationVariantReportWithScoresResponseWithViews } from '../models/PaginatedApplicationVariantReportWithScoresResponseWithViews';
import type { PaginatedApplicationVariantResponse } from '../models/PaginatedApplicationVariantResponse';
import type { PaginatedChatThreadEntity } from '../models/PaginatedChatThreadEntity';
import type { PartialApplicationDeploymentRequest } from '../models/PartialApplicationDeploymentRequest';
import type { PatchApplicationVariantGuardrail } from '../models/PatchApplicationVariantGuardrail';
import type { PatchApplicationVariantRequest } from '../models/PatchApplicationVariantRequest';
import type { RestoreRequest } from '../models/RestoreRequest';
import type { SortByEnumForApplicationSpec } from '../models/SortByEnumForApplicationSpec';
import type { TestApplicationProcessingRequest } from '../models/TestApplicationProcessingRequest';
import type { UpdateParentApplicationSpecRequest } from '../models/UpdateParentApplicationSpecRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationsService {
    /**
     * List Application Variants
     * ### Description
     * Lists all application variants accessible to the user.
     *
     * ### Details
     * This API can be used to list application variants. If a user has access to multiple accounts, all application variants from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param applicationSpecId
     * @param xSelectedAccountId
     * @returns PaginatedApplicationVariantResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationVariants(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        applicationSpecId?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedApplicationVariantResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-variants',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Application Variant
     * ### Description
     * Creates a application variant
     *
     * ### Details
     * This API can be used to create a application variant. To use this API, review the request schema and pass in all fields that are required to create a application variant.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationVariants(
        requestBody: ApplicationVariantRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/application-variants',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Variant
     * ### Description
     * Gets the details of a application variant
     *
     * ### Details
     * This API can be used to get information about a single application variant by ID. To use this API, pass in the `id` that was returned from your Create Application Variant API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param applicationVariantId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationVariantsApplicationVariantId(
        applicationVariantId: string,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-variants/{application_variant_id}',
            path: {
                'application_variant_id': applicationVariantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Application Variant
     * ### Description
     * Updates a application variant
     *
     * ### Details
     * This API can be used to update the application variant that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Application Variant API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param applicationVariantId
     * @param requestBody
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse Successful Response
     * @throws ApiError
     */
    public static patchV4ApplicationVariantsApplicationVariantId(
        applicationVariantId: string,
        requestBody: PatchApplicationVariantRequest,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/application-variants/{application_variant_id}',
            path: {
                'application_variant_id': applicationVariantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Application Variant
     * ### Description
     * Deletes a application variant
     *
     * ### Details
     * This API can be used to delete a application variant by ID. To use this API, pass in the `id` that was returned from your Create Application Variant API call as a path parameter.
     * @param applicationVariantId
     * @returns DeleteResponse Successful Response
     * @throws ApiError
     */
    public static deleteV4ApplicationVariantsApplicationVariantId(
        applicationVariantId: string,
    ): CancelablePromise<DeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/application-variants/{application_variant_id}',
            path: {
                'application_variant_id': applicationVariantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Deployments
     * ### Description
     * Lists all application deployments accessible to the user.
     *
     * ### Details
     * This API can be used to list application deployments. If a user has access to multiple accounts, all application deployments from all accounts the user is associated with will be returned.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param applicationVariantId
     * @param xSelectedAccountId
     * @returns PaginatedApplicationDeploymentResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationDeployments(
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        applicationVariantId?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedApplicationDeploymentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-deployments',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'application_variant_id': applicationVariantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Application Deployment
     * ### Description
     * Creates a application deployment
     *
     * ### Details
     * This API can be used to create a application deployment. To use this API, review the request schema and pass in all fields that are required to create a application deployment.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ApplicationDeploymentResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationDeployments(
        requestBody: ApplicationDeploymentRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ApplicationDeploymentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/application-deployments',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Deployment
     * ### Description
     * Gets the details of a application deployment
     *
     * ### Details
     * This API can be used to get information about a single application deployment by ID. To use this API, pass in the `id` that was returned from your Create Application Deployment API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param applicationDeploymentId
     * @returns ApplicationDeploymentResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationDeploymentsApplicationDeploymentId(
        applicationDeploymentId: string,
    ): CancelablePromise<ApplicationDeploymentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-deployments/{application_deployment_id}',
            path: {
                'application_deployment_id': applicationDeploymentId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Application Deployment
     * ### Description
     * Updates a application deployment
     *
     * ### Details
     * This API can be used to update the application deployment that matches the ID that was passed in as a path parameter. To use this API, pass in the `id` that was returned from your Create Application Deployment API call as a path parameter.
     *
     * Review the request schema to see the fields that can be updated.
     * @param applicationDeploymentId
     * @param requestBody
     * @returns ApplicationDeploymentResponse Successful Response
     * @throws ApiError
     */
    public static patchV4ApplicationDeploymentsApplicationDeploymentId(
        applicationDeploymentId: string,
        requestBody: PartialApplicationDeploymentRequest,
    ): CancelablePromise<ApplicationDeploymentResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/application-deployments/{application_deployment_id}',
            path: {
                'application_deployment_id': applicationDeploymentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Variant Reports
     * ### Description
     * Lists all application variant reports accessible to the user.
     *
     * ### Details
     * This API can be used to list application variant reports. If a user has access to multiple accounts, all application variant reports from all accounts the user is associated with will be returned.
     * @param view
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param applicationSpecId
     * @param applicationVariantId
     * @param xSelectedAccountId
     * @returns PaginatedApplicationVariantReportWithScoresResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationVariantReports(
        view?: (Array<ApplicationVariantReportViewsOptions> | null),
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        applicationSpecId?: (number | string | null),
        applicationVariantId?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedApplicationVariantReportWithScoresResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-variant-reports',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'application_spec_id': applicationSpecId,
                'application_variant_id': applicationVariantId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Application Variant Report
     * ### Description
     * Creates a application variant report
     *
     * ### Details
     * This API can be used to create a application variant report. To use this API, review the request schema and pass in all fields that are required to create a application variant report.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ApplicationVariantReportWithScoresResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationVariantReports(
        requestBody: ApplicationVariantReportGenerationRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ApplicationVariantReportWithScoresResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/application-variant-reports',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Variant Report
     * ### Description
     * Gets the details of a application variant report
     *
     * ### Details
     * This API can be used to get information about a single application variant report by ID. To use this API, pass in the `id` that was returned from your Create Application Variant Report API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param applicationVariantReportId
     * @param view
     * @returns ApplicationVariantReportWithScoresResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationVariantReportsApplicationVariantReportId(
        applicationVariantReportId: string,
        view?: (Array<ApplicationVariantReportViewsOptions> | null),
    ): CancelablePromise<ApplicationVariantReportWithScoresResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-variant-reports/{application_variant_report_id}',
            path: {
                'application_variant_report_id': applicationVariantReportId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Test Case Outputs
     * ### Description
     * Lists all application test case outputs accessible to the user.
     *
     * ### Details
     * This API can be used to list application test case outputs. If a user has access to multiple accounts, all application test case outputs from all accounts the user is associated with will be returned.
     * @param view
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param accountId
     * @param applicationVariantId
     * @param applicationVariantReportId
     * @param evaluationDatasetId
     * @param evaluationDatasetVersionNum
     * @param applicationTestCaseOutputGroupId
     * @param xSelectedAccountId
     * @returns PaginatedApplicationTestCaseOutputResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationTestCaseOutputs(
        view?: (Array<ApplicationTestCaseOutputViewsOptions> | null),
        page: number = 1,
        limit: number = 100,
        accountId?: (string | null),
        applicationVariantId?: (number | string | null),
        applicationVariantReportId?: (number | string | null),
        evaluationDatasetId?: (number | string | null),
        evaluationDatasetVersionNum?: (number | string | null),
        applicationTestCaseOutputGroupId?: (number | string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedApplicationTestCaseOutputResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-test-case-outputs',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'view': view,
                'page': page,
                'limit': limit,
                'account_id': accountId,
                'application_variant_id': applicationVariantId,
                'application_variant_report_id': applicationVariantReportId,
                'evaluation_dataset_id': evaluationDatasetId,
                'evaluation_dataset_version_num': evaluationDatasetVersionNum,
                'application_test_case_output_group_id': applicationTestCaseOutputGroupId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Batch Create Application Test Case Outputs
     * ### Description
     * Creates a batch of application test case outputs
     *
     * ### Details
     * This API can be used to create multiple application test case outputs so users do not have to the incur the cost of repeated network calls. To use this API, pass in a list of application test case outputs in the request body.
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ApplicationTestCaseOutputResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationTestCaseOutputsBatch(
        requestBody: Array<ApplicationTestCaseOutputRequest>,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ApplicationTestCaseOutputResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/application-test-case-outputs/batch',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Test Case Output
     * ### Description
     * Gets the details of a application test case output
     *
     * ### Details
     * This API can be used to get information about a single application test case output by ID. To use this API, pass in the `id` that was returned from your Create Application Test Case Output API call as a path parameter.
     *
     * Review the response schema to see the fields that will be returned.
     * @param applicationTestCaseOutputId
     * @param view
     * @returns ApplicationTestCaseOutputResponseWithViews Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationTestCaseOutputsApplicationTestCaseOutputId(
        applicationTestCaseOutputId: string,
        view?: (Array<ApplicationTestCaseOutputViewsOptions> | null),
    ): CancelablePromise<ApplicationTestCaseOutputResponseWithViews> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-test-case-outputs/{application_test_case_output_id}',
            path: {
                'application_test_case_output_id': applicationTestCaseOutputId,
            },
            query: {
                'view': view,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Application With Variant
     * Create an application with a variant in a single transaction.
     * @param requestBody
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationWithVariant(
        requestBody: CreateApplicationWithVariantRequest,
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/application-with-variant',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Schemas
     * @param version
     * @returns ApplicationNodeSchemaRegistryRecord Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationSchemas(
        version: ApplicationSchemaVersion,
    ): CancelablePromise<Record<string, ApplicationNodeSchemaRegistryRecord>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-schemas',
            query: {
                'version': version,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Process Application
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsProcess(
        requestBody: TestApplicationProcessingRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/process',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Process Application By Id
     * @param applicationVariantId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsApplicationVariantIdProcess(
        applicationVariantId: string,
        requestBody: ApplicationProcessingRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/{application_variant_id}/process',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Process Deployed Application For Thread
     * @param applicationVariantId
     * @param threadId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsApplicationVariantIdThreadsThreadIdProcess(
        applicationVariantId: string,
        threadId: string,
        requestBody: ApplicationProcessingRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/{application_variant_id}/threads/{thread_id}/process',
            path: {
                'application_variant_id': applicationVariantId,
                'thread_id': threadId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Process Application By Alias
     * @param applicationAlias
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsProcessApplicationAlias(
        applicationAlias: string,
        requestBody: ApplicationProcessingRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/process/{application_alias}',
            path: {
                'application_alias': applicationAlias,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Validate Application
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsValidate(
        requestBody: ApplicationValidationRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/validate',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Application Threads
     * @param applicationVariantId
     * @param includeArchived Include archived threads in the response.
     * @param xSelectedAccountId
     * @returns ChatThreadResponse Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationsApplicationVariantIdThreads(
        applicationVariantId: string,
        includeArchived: boolean = true,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ChatThreadResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_variant_id}/threads',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'include_archived': includeArchived,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create New Application Thread
     * @param applicationVariantId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ChatThreadResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsApplicationVariantIdThreads(
        applicationVariantId: string,
        requestBody: ChatThreadRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ChatThreadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/{application_variant_id}/threads',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Upload Application Files
     * @param formData
     * @param accountId Account which the file will be tied to. Use this account id query param if you are using the API or the SDK.
     * @param xSelectedAccountId
     * @returns ApplicationFileResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsUploadFiles(
        formData: Body_POST_V4__applications_upload_files,
        accountId?: (string | null),
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<ApplicationFileResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/upload-files',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Application Variant Guardrails
     * Updates the application variant's guardrail_config list with the guardrail IDs provided in the patch request.
     * @param applicationVariantId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse Successful Response
     * @throws ApiError
     */
    public static patchV4ApplicationsApplicationVariantIdGuardrails(
        applicationVariantId: string,
        requestBody: PatchApplicationVariantGuardrail,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/applications/{application_variant_id}/guardrails',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Publish Application Variant
     * @param applicationVariantId
     * @param xSelectedAccountId
     * @returns egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationVariantsApplicationVariantIdPublish(
        applicationVariantId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<egp_api_backend__server__api__models__application_models_no_gen__ApplicationVariantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/application-variants/{application_variant_id}/publish',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Modify Parent For Application Spec
     * Set the parent application spec for an application spec.
     * @param childApplicationSpecId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static patchV4ApplicationSpecsChildApplicationSpecIdParent(
        childApplicationSpecId: string,
        requestBody: UpdateParentApplicationSpecRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v4/application-specs/{child_application_spec_id}/parent',
            path: {
                'child_application_spec_id': childApplicationSpecId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fork Application Interaction Span
     * @param applicationVariantId
     * @param threadId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns ApplicationThreadForkingResponse Successful Response
     * @throws ApiError
     */
    public static postV4ApplicationsApplicationVariantIdThreadsThreadIdFork(
        applicationVariantId: string,
        threadId: string,
        requestBody: ApplicationThreadForkingRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ApplicationThreadForkingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/applications/{application_variant_id}/threads/{thread_id}/fork',
            path: {
                'application_variant_id': applicationVariantId,
                'thread_id': threadId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Specs With Evaluation Count
     * @param accountId The ID of the account that owns the given entity.
     * @param sortBy
     * @param includeArchived Include archived applications in the response.
     * @param searchFilter Search term to filter applications by name
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns PaginatedApplicationSpecWithEvaluationCount Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationsApplicationWithEvaluationCount(
        accountId: string,
        sortBy?: Array<SortByEnumForApplicationSpec>,
        includeArchived: boolean = false,
        searchFilter?: string,
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<PaginatedApplicationSpecWithEvaluationCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/application-with-evaluation-count',
            query: {
                'account_id': accountId,
                'sort_by': sortBy,
                'include_archived': includeArchived,
                'search_filter': searchFilter,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Offline Variant Evaluation Datasets
     * @param applicationVariantId
     * @param xSelectedAccountId
     * @returns OfflineApplicationEvaluationDataset Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationVariantsApplicationVariantIdOfflineApplicationEvaluationDatasets(
        applicationVariantId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<Array<OfflineApplicationEvaluationDataset>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-variants/{application_variant_id}/offline-application-evaluation-datasets',
            path: {
                'application_variant_id': applicationVariantId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Spec With Active Deployment By Endpoint
     * @param endpointSlug
     * @returns ApplicationSpecWithActiveDeployment Successful Response
     * @throws ApiError
     */
    public static getV4ApplicationsEndpointSlug(
        endpointSlug: string,
    ): CancelablePromise<ApplicationSpecWithActiveDeployment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{endpoint_slug}',
            path: {
                'endpoint_slug': endpointSlug,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application Specs With Active Deployments
     * @param accountId Account to retrieve deployed applications from.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @returns DeployedApplication Successful Response
     * @throws ApiError
     */
    public static getV4DeployedApplications(
        accountId?: (string | null),
        page: number = 1,
        limit: number = 100,
    ): CancelablePromise<Array<DeployedApplication>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/deployed-applications',
            query: {
                'account_id': accountId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Recent Threads
     * @param accountId Account which the file will be tied to. Use this account id query param if you are using the API or the SDK.
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param xSelectedAccountId
     * @returns PaginatedChatThreadEntity Successful Response
     * @throws ApiError
     */
    public static getV4RecentThreads(
        accountId?: (string | null),
        page: number = 1,
        limit: number = 100,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedChatThreadEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/recent-threads',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'account_id': accountId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Application
     * @param requestBody
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static postV5V5Applications(
        requestBody: ApplicationCreateRequest,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/applications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Applications
     * @param views
     * @param includeArchived
     * @param startingAfter
     * @param endingBefore
     * @param limit
     * @returns ApplicationList Successful Response
     * @throws ApiError
     */
    public static getV5V5Applications(
        views?: Array<ApplicationViews>,
        includeArchived: boolean = false,
        startingAfter?: (string | null),
        endingBefore?: (string | null),
        limit: number = 100,
    ): CancelablePromise<ApplicationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/applications',
            query: {
                'views': views,
                'include_archived': includeArchived,
                'starting_after': startingAfter,
                'ending_before': endingBefore,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Application
     * @param applicationId
     * @param views
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getV5V5ApplicationsApplicationId(
        applicationId: string,
        views?: Array<ApplicationViews>,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v5/applications/{application_id}',
            path: {
                'application_id': applicationId,
            },
            query: {
                'views': views,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Application
     * @param applicationId
     * @param requestBody
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static patchV5V5ApplicationsApplicationId(
        applicationId: string,
        requestBody: (ApplicationUpdateRequest | RestoreRequest),
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v5/applications/{application_id}',
            path: {
                'application_id': applicationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Archive Application
     * @param applicationId
     * @returns ApplicationDelete Successful Response
     * @throws ApiError
     */
    public static deleteV5V5ApplicationsApplicationId(
        applicationId: string,
    ): CancelablePromise<ApplicationDelete> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v5/applications/{application_id}',
            path: {
                'application_id': applicationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
