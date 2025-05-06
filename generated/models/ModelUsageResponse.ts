/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataPoint } from './DataPoint';
export type ModelUsageResponse = {
    /**
     * The list of data points for the given period
     */
    data: Array<DataPoint>;
    /**
     * The start date of the data points. Equal to the first date in the data list
     */
    start_date: string;
    /**
     * The end date of the data points. Equal to the last date in the data list
     */
    end_date: string;
};

