/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationVariant } from './ApplicationVariant';
export type Application = {
    /**
     * The unique identifier of the entity.
     */
    id: string;
    object?: Application.object;
    /**
     * The name of the application
     */
    name: string;
    /**
     * The description of the application
     */
    description: string;
    theme_id?: string;
    /**
     * Whether the application should run online evaluation, default is `false`
     */
    run_online_evaluation?: boolean;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id?: string;
    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;
    /**
     * The different variants of this application.
     */
    variants?: Array<ApplicationVariant>;
};
export namespace Application {
    export enum object {
        APPLICATION = 'application',
    }
}

