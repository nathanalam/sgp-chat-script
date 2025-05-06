/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse } from './egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse';
export type PaginatedApplicationSpecResponse = {
    /**
     * The data returned for the current page.
     */
    items: Array<egp_api_backend__server__api__models__application_models_no_gen__ApplicationSpecResponse>;
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

