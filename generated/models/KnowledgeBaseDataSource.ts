/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemoteDataSourceConfig } from './RemoteDataSourceConfig';
import type { TaggingInformationAll } from './TaggingInformationAll';
export type KnowledgeBaseDataSource = {
    /**
     * The unique identifier of the entity.
     */
    id: string;
    object?: KnowledgeBaseDataSource.object;
    name: string;
    description?: string;
    data_source_config: RemoteDataSourceConfig;
    tagging_information?: TaggingInformationAll;
    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;
    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;
    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;
};
export namespace KnowledgeBaseDataSource {
    export enum object {
        KNOWLEDGE_BASE_DATA_SOURCE = 'knowledge_base_data_source',
    }
}

