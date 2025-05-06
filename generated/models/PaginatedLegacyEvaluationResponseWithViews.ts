/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegacyEvaluationResponseWithViews } from './LegacyEvaluationResponseWithViews';
export type PaginatedLegacyEvaluationResponseWithViews = {
    /**
     * The data returned for the current page.
     */
    items: Array<LegacyEvaluationResponseWithViews>;
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

