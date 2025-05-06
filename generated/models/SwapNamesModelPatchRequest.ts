/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SwapNamesModelPatchRequest = {
    name: string;
    on_conflict?: SwapNamesModelPatchRequest.on_conflict;
};
export namespace SwapNamesModelPatchRequest {
    export enum on_conflict {
        ERROR = 'error',
        SWAP = 'swap',
    }
}

