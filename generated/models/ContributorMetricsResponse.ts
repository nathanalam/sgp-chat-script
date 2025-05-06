/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ContributorMetricsResponse = {
    /**
     * The ID of the evaluation.
     */
    evaluation_id: string;
    /**
     * The ID of the user who annotated the test case.
     */
    annotated_by_user_id: string;
    /**
     * Total time spent labeling in seconds.
     */
    total_time_spent_labeling_sec?: number;
    /**
     * Average time spent labeling per test case in seconds.
     */
    avg_time_spent_labeling_sec?: number;
    /**
     * Total number of test cases labeled.
     */
    total_num_test_cases_labeled: number;
    /**
     * Number of test cases that were fixed.
     */
    num_test_cases_fixed: number;
    /**
     * Percentage of test cases done by this contributor that were fixed.
     */
    percentage_test_cases_fixed: number;
};

