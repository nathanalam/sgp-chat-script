/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EvaluationMetricsResponse = {
    /**
     * The ID of the evaluation.
     */
    evaluation_id: string;
    /**
     * Total number of test cases.
     */
    num_total_test_cases: number;
    /**
     * Number of test cases labeled.
     */
    num_test_cases_labeled: number;
    /**
     * Number of test cases flagged.
     */
    num_test_cases_flagged: number;
    /**
     * Number of test cases fixed.
     */
    num_test_cases_fixed: number;
    /**
     * Percentage of test cases that were fixed.
     */
    percentage_test_cases_fixed: number;
    /**
     * Number of test cases unaudited.
     */
    num_test_cases_unaudited: number;
    /**
     * Percentage of test cases that were unaudited.
     */
    percentage_test_cases_unaudited: number;
    /**
     * Number of test cases approved.
     */
    num_test_cases_approved: number;
    /**
     * Percentage of test cases that were approved.
     */
    percentage_test_cases_approved: number;
    /**
     * Average time spent labeling per test case in seconds.
     */
    avg_labeling_time_per_test_case: number;
    /**
     * Average number of test cases labeled per day.
     */
    avg_num_test_cases_labeled_per_day: number;
};

