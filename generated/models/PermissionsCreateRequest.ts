/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourcePermission } from './ResourcePermission';
import type { ResourcePermissionType } from './ResourcePermissionType';
export type PermissionsCreateRequest = {
    /**
     * Type of resource to apply permissions to, for example `knowledge_base`
     */
    resource_type: ResourcePermissionType;
    /**
     * Identifier of the resource to apply permissions to
     */
    resource_id: string;
    permissions: Array<ResourcePermission>;
};

