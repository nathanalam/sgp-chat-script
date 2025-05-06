/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dashboard } from '../models/Dashboard';
import type { DashboardID } from '../models/DashboardID';
import type { MetricID } from '../models/MetricID';
import type { ScalarData } from '../models/ScalarData';
import type { TimeseriesData } from '../models/TimeseriesData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MonitoringDashboardService {
    /**
     * Get Dashboard Schema
     * @param applicationSpecId
     * @param dashboardId
     * @returns Dashboard Successful Response
     * @throws ApiError
     */
    public static getV4DashboardsDashboardId(
        applicationSpecId: string,
        dashboardId: DashboardID,
    ): CancelablePromise<Dashboard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/dashboards/{dashboard_id}',
            path: {
                'application_spec_id': applicationSpecId,
                'dashboard_id': dashboardId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Scalar Metric
     * @param applicationSpecId
     * @param metricId
     * @param variants Which variants to filter on
     * @param accountId Account ID used for authorization
     * @param fromTs The starting (oldest) timestamp window in seconds.
     * @param toTs The ending (most recent) timestamp in seconds.
     * @param xSelectedAccountId
     * @returns ScalarData Successful Response
     * @throws ApiError
     */
    public static getV4MetricsScalarMetricId(
        applicationSpecId: string,
        metricId: MetricID,
        variants?: (Array<string> | null),
        accountId?: (string | null),
        fromTs?: number,
        toTs?: number,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<ScalarData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/metrics/scalar/{metric_id}',
            path: {
                'application_spec_id': applicationSpecId,
                'metric_id': metricId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'variants': variants,
                'account_id': accountId,
                'from_ts': fromTs,
                'to_ts': toTs,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Timeseries Metric
     * @param applicationSpecId
     * @param metricId
     * @param variants Which variants to filter on
     * @param accountId Account ID used for authorization
     * @param fromTs The starting (oldest) timestamp window in seconds.
     * @param toTs The ending (most recent) timestamp in seconds.
     * @param xSelectedAccountId
     * @returns TimeseriesData Successful Response
     * @throws ApiError
     */
    public static getV4MetricsTimeseriesMetricId(
        applicationSpecId: string,
        metricId: MetricID,
        variants?: (Array<string> | null),
        accountId?: (string | null),
        fromTs?: number,
        toTs?: number,
        xSelectedAccountId?: (string | null),
    ): CancelablePromise<TimeseriesData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/applications/{application_spec_id}/metrics/timeseries/{metric_id}',
            path: {
                'application_spec_id': applicationSpecId,
                'metric_id': metricId,
            },
            headers: {
                'x-selected-account-id': xSelectedAccountId,
            },
            query: {
                'variants': variants,
                'account_id': accountId,
                'from_ts': fromTs,
                'to_ts': toTs,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
