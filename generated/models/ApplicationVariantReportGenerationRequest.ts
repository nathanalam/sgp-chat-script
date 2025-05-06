/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationVariantReportGenerationRequest = {
    application_variant_id: string;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id?: string;
    evaluation_dataset_ids: Array<string>;
    application_test_case_output_group_ids?: Array<string>;
};

