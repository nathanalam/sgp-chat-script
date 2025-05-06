/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataSourceAuthConfig } from './DataSourceAuthConfig';
import type { RemoteDataSourceConfig } from './RemoteDataSourceConfig';
import type { TaggingInformationAll } from './TaggingInformationAll';
export type KnowledgeBaseDataSourceCreateRequest = {
    name: string;
    description?: string;
    data_source_config: RemoteDataSourceConfig;
    data_source_auth_config?: DataSourceAuthConfig;
    tagging_information?: TaggingInformationAll;
};

