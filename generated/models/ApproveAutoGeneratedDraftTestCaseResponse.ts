/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoGeneratedDraftTestCaseMissingChunkInfo } from './AutoGeneratedDraftTestCaseMissingChunkInfo';
export type ApproveAutoGeneratedDraftTestCaseResponse = {
    /**
     * Draft test_case_id that has chunk_ids missing
     */
    autogenerated_draft_test_case_id: string;
    /**
     * Whether or not the test case was successfully approved
     */
    success: boolean;
    failed_chunks: Array<AutoGeneratedDraftTestCaseMissingChunkInfo>;
};

