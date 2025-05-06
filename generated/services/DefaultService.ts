/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationEmbedding } from '../models/AnnotationEmbedding';
import type { AnnotationEmbeddingRequest } from '../models/AnnotationEmbeddingRequest';
import type { AsyncEvaluationAutoEvalResult } from '../models/AsyncEvaluationAutoEvalResult';
import type { AttestationRequest } from '../models/AttestationRequest';
import type { DeploymentPackageJobResponse } from '../models/DeploymentPackageJobResponse';
import type { EvaluationReport } from '../models/EvaluationReport';
import type { FeatureFlag } from '../models/FeatureFlag';
import type { ListModelServerResponse } from '../models/ListModelServerResponse';
import type { ModelServerInfo } from '../models/ModelServerInfo';
import type { PaginatedEvaluationEntry } from '../models/PaginatedEvaluationEntry';
import type { RunEvaluationAutoEvalRequest } from '../models/RunEvaluationAutoEvalRequest';
import type { SyncCatalogForOrganizationRequest } from '../models/SyncCatalogForOrganizationRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Fixed Server interface for Model execution by named alias
     * @param xSelectedAccountId
     * @returns ListModelServerResponse Successful Response
     * @throws ApiError
     */
    public static getV4V4Serving(
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ListModelServerResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/serving',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Fixed Server interface for Model execution by named alias
     * @param modelServerId
     * @returns ModelServerInfo Successful Response
     * @throws ApiError
     */
    public static getV4V4ServingModelServerId(
        modelServerId: string,
    ): CancelablePromise<ModelServerInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/serving/{model_server_id}',
            path: {
                'model_server_id': modelServerId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete a Model Server
     * @param modelServerId
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteV4V4ServingModelServerId(
        modelServerId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v4/serving/{model_server_id}',
            path: {
                'model_server_id': modelServerId,
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
     * Fixed Server interface for Model execution by named alias
     * @param alias
     * @param xSelectedAccountId
     * @returns ModelServerInfo Successful Response
     * @throws ApiError
     */
    public static getV4V4ServingAAlias(
        alias: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ModelServerInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/serving/a/{alias}',
            path: {
                'alias': alias,
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
     * Gets a feature flag value
     * @param featureFlagId
     * @param accountId Filter by account_id
     * @returns FeatureFlag Successful Response
     * @throws ApiError
     */
    public static getV4FeatureFlagFeatureFlagId(
        featureFlagId: string,
        accountId?: string,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/feature-flag/{feature_flag_id}',
            path: {
                'feature_flag_id': featureFlagId,
            },
            query: {
                'account_id': accountId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Health check endpoint for all SGP services
     * Health check endpoint for all SGP services.
     *
     * Always checks the following services:
     * - EGP API DB
     * - Temporal
     * - Identity Service
     *
     * Additional services can be checked by passing a list of service names in the query parameter `targets`.
     *
     * Note: Disabling the registration_secret requirement for TMO.
     * @param targets List of services to check
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getV4Health(
        targets?: (Array<string> | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
            query: {
                'targets': targets,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Attestation
     * @param requestBody
     * @param xSelectedAccountId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static postV5Attestation(
        requestBody: AttestationRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v5/attestation',
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
     * Get evaluation report for an application
     * @param applicationSpecId
     * @returns EvaluationReport Successful Response
     * @throws ApiError
     */
    public static getV2V2ApplicationSpecsApplicationSpecIdEvaluationReport(
        applicationSpecId: string,
    ): CancelablePromise<EvaluationReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/application-specs/{application_spec_id}/evaluation-report',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get evaluation report for an application
     * @param applicationSpecId
     * @returns EvaluationReport Successful Response
     * @throws ApiError
     */
    public static getV3V2ApplicationSpecsApplicationSpecIdEvaluationReport(
        applicationSpecId: string,
    ): CancelablePromise<EvaluationReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/application-specs/{application_spec_id}/evaluation-report',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get evaluation report for an application
     * @param applicationSpecId
     * @returns EvaluationReport Successful Response
     * @throws ApiError
     */
    public static getV4V2ApplicationSpecsApplicationSpecIdEvaluationReport(
        applicationSpecId: string,
    ): CancelablePromise<EvaluationReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/application-specs/{application_spec_id}/evaluation-report',
            path: {
                'application_spec_id': applicationSpecId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Embed annotation page for tasking tools
     * @param requestBody
     * @returns AnnotationEmbedding Successful Response
     * @throws ApiError
     */
    public static postV4AnnotationEmbeddings(
        requestBody: AnnotationEmbeddingRequest,
    ): CancelablePromise<Array<AnnotationEmbedding>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/annotation-embeddings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Auto-Evaluation Job
     * ### Description
     * Submit an asynchronous Auto-Evaluation job for all test case results of a         provided evaluation run.
     * ### Details
     * When called, this API runs the auto-evaluator on the test case results of the provided         evaluation.
     * If the evaluation's configured type is 'human', this route will convert the         evaluation to 'llm_benchmark' type to mark it as a hybrid evaluation with both human and         auto-annotations on every test case result. In this case, the evaluation configuration         will be copied to a new evaluation configuration, and the evaluation's `evaluation_config_id`         field will point to this new configuration. If the evaluation is already of type 'llm_auto'         or 'llm_benchmark', this route will not modify the evaluation type, but will still kick off an         asynchronous job to run the auto-evaluator on the test case results. All other evaluation types         are currently not supported.
     * You can monitor the status of the auto-evaluation workflow by making a GET         request to this endpoint with the same evaluation ID as you passed in the POST request.
     * ### Restrictions and Limits
     * Evaluation types other than 'llm_auto', 'llm_benchmark', and 'human' are not supported.
     * @param evaluationId
     * @param requestBody
     * @param xSelectedAccountId
     * @returns AsyncEvaluationAutoEvalResult Successful Response
     * @throws ApiError
     */
    public static postV4V4EvaluationsEvaluationIdAnnotationResultsAutoEval(
        evaluationId: string,
        requestBody: RunEvaluationAutoEvalRequest,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<AsyncEvaluationAutoEvalResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/evaluations/{evaluation_id}/annotation-results/auto-eval',
            path: {
                'evaluation_id': evaluationId,
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
     * Get evaluation report for an evaluation
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns EvaluationReport Successful Response
     * @throws ApiError
     */
    public static getV2EvaluationReport(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/evaluations/{evaluation_id}/evaluation-report',
            path: {
                'evaluation_id': evaluationId,
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
     * Get evaluation report for an evaluation
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns EvaluationReport Successful Response
     * @throws ApiError
     */
    public static getV3EvaluationReport(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/evaluations/{evaluation_id}/evaluation-report',
            path: {
                'evaluation_id': evaluationId,
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
     * Get evaluation report for an evaluation
     * @param evaluationId
     * @param xSelectedAccountId
     * @returns EvaluationReport Successful Response
     * @throws ApiError
     */
    public static getV4EvaluationReport(
        evaluationId: string,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<EvaluationReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluations/{evaluation_id}/evaluation-report',
            path: {
                'evaluation_id': evaluationId,
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
     * Lists the evaluation runs for the given filters
     * @param applicationSpecId
     * @param applicationVariantId
     * @param questionSetId
     * @param evaluationDatasetId
     * @param page Page number for pagination to be returned by the given endpoint. Starts at page 1
     * @param limit Maximum number of artifacts to be returned by the given endpoint. Defaults to 100 and cannot be greater than 10k.
     * @param xSelectedAccountId
     * @returns PaginatedEvaluationEntry Successful Response
     * @throws ApiError
     */
    public static getV4Runs(
        applicationSpecId?: (string | null),
        applicationVariantId?: (string | null),
        questionSetId?: (string | null),
        evaluationDatasetId?: (string | null),
        page: number = 1,
        limit: number = 100,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<PaginatedEvaluationEntry> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/evaluation_views/runs',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'application_spec_id': applicationSpecId,
                'application_variant_id': applicationVariantId,
                'question_set_id': questionSetId,
                'evaluation_dataset_id': evaluationDatasetId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Sync Catalog From Control Plane
     * Synchronize package catalog from Control Plane
     * @param excludeOldVersions Defaults to true—old versions of packages will be excluded from the sync
     * @param xSelectedAccountId
     * @param requestBody
     * @returns DeploymentPackageJobResponse Successful Response
     * @throws ApiError
     */
    public static postV4SyncCatalogFromControlPlane(
        excludeOldVersions?: (boolean | null),
        xSelectedAccountId?: (string | null),
        requestBody?: (SyncCatalogForOrganizationRequest | null),
    ): CancelablePromise<DeploymentPackageJobResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sync-catalog-from-control-plane',
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'exclude_old_versions': excludeOldVersions,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
