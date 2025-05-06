/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: The order of the permissions is important.
 * Comparisons between permission levels are done using the index of the enum value.
 * ie: READ < EDIT < MANAGE
 * This is used to determine if a user has permission to access a resource.
 * With the following implementation:
 * READ = "read"
 * EDIT = "edit"
 * MANAGE = "manage"
 * Read will have index 0, Edit will have index 1, and Manage will have index 2, etc.
 *
 * Please keep this in mind when adding new permission levels.
 */
export enum PermissionLevelType {
    READ = 'read',
    EDIT = 'edit',
    MANAGE = 'manage',
}
