/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__api__models__eval_models_no_gen__TestCaseVersionResponse } from './egp_api_backend__server__api__models__eval_models_no_gen__TestCaseVersionResponse';
export type PaginatedTestCaseVersionResponse = {
    /**
     * The data returned for the current page.
     */
    items: Array<egp_api_backend__server__api__models__eval_models_no_gen__TestCaseVersionResponse>;
    /**
     * The total number of items of the query
     */
    total_item_count: number;
    /**
     * The current page number.
     */
    current_page: number;
    /**
     * The number of items per page.
     */
    items_per_page: number;
};

