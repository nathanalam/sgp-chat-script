/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditORMStatusEnum } from './AuditORMStatusEnum';
import type { EvaluationORMStatusEnum } from './EvaluationORMStatusEnum';
import type { ResultSchemaFlexible } from './ResultSchemaFlexible';
import type { UserV2Details } from './UserV2Details';
export type FlexibleTestCaseResultResponse = {
    /**
     * The status of the test case result. This should not be explictly set when creating a test case result. When patching a test case result, this field can be set to 'PENDING' to prevent the test case result from being marked 'COMPLETED'.
     */
    label_status: EvaluationORMStatusEnum;
    audit_status?: AuditORMStatusEnum;
    audit_required?: boolean;
    audit_comment?: string;
    application_spec_id: string;
    evaluation_id: string;
    evaluation_dataset_id: string;
    evaluation_dataset_version_num: string;
    test_case_id: string;
    test_case_evaluation_data: ResultSchemaFlexible;
    test_case_evaluation_data_schema?: 'FLEXIBLE';
    /**
     * The result of the test case evaluation, in JSON form where the key is the question ID and the value is the result.
     */
    result?: Record<string, (string | number | boolean)>;
    completed_at?: string;
    /**
     * The time spent labeling in seconds.
     */
    time_spent_labeling_s?: number;
    application_test_case_output_id?: string;
    /**
     * The date and time when the entity was overwritten or deleted in ISO format.
     */
    invalidated_at?: string;
    /**
     * The unique identifier of the entity.
     */
    id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The user who annotated the task.
     */
    annotated_by_user_id?: string;
    /**
     * The user who edited the task.
     */
    edited_by_user_id?: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
    edited_by?: UserV2Details;
};

