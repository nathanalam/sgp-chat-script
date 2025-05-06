/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Chunking = {
    chunk_mode?: Chunking.chunk_mode;
    chunk_size?: number;
};
export namespace Chunking {
    export enum chunk_mode {
        VARIABLE = 'variable',
        SECTION = 'section',
        PAGE = 'page',
        BLOCK = 'block',
        DISABLED = 'disabled',
        PAGE_SECTIONS = 'page_sections',
    }
}

