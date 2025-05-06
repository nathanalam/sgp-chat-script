/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateAccountRequestV2 = {
    /**
     * ID of the account group the account lives under
     */
    account_group_id: string;
    /**
     * Account group name. Must be between 1 and 50 characters after stripping leading and trailing whitespace.
     */
    name: string;
};

