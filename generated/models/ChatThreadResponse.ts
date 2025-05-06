/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatThreadResponse = {
    id: string;
    title: string;
    application_variant_id: string;
    thread_metadata?: Record<string, any>;
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
};

