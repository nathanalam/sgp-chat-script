/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditORMStatusEnum } from './AuditORMStatusEnum';
import type { EvaluationORMStatusEnum } from './EvaluationORMStatusEnum';
export type TestCaseResultRequest = {
    label_status?: EvaluationORMStatusEnum;
    audit_status?: AuditORMStatusEnum;
    audit_required?: boolean;
    audit_comment?: string;
    application_spec_id: string;
    evaluation_dataset_version_num: string;
    test_case_id: string;
    test_case_evaluation_data: Record<string, any>;
    result?: Record<string, (string | number | boolean)>;
    time_spent_labeling_s?: number;
    account_id?: string;
    annotated_by_user_id?: string;
};

