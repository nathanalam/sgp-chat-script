/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LargeTableChunking } from './LargeTableChunking';
import type { PageRange } from './PageRange';
export type AdvancedProcessingOptions = {
    add_page_markers?: boolean;
    continue_hierarchy?: boolean;
    document_password?: string;
    filter_line_numbers?: boolean;
    force_file_extension?: string;
    keep_line_breaks?: boolean;
    large_table_chunking?: LargeTableChunking;
    merge_tables?: boolean;
    ocr_system?: AdvancedProcessingOptions.ocr_system;
    page_range?: (PageRange | Array<PageRange>);
    remove_text_formatting?: boolean;
    return_ocr_data?: boolean;
    spreadsheet_table_clustering?: AdvancedProcessingOptions.spreadsheet_table_clustering;
    table_output_format?: AdvancedProcessingOptions.table_output_format;
};
export namespace AdvancedProcessingOptions {
    export enum ocr_system {
        HIGHRES = 'highres',
        MULTILINGUAL = 'multilingual',
        COMBINED = 'combined',
    }
    export enum spreadsheet_table_clustering {
        DEFAULT = 'default',
        DISABLED = 'disabled',
    }
    export enum table_output_format {
        HTML = 'html',
        JSON = 'json',
        MD = 'md',
        JSONBBOX = 'jsonbbox',
        DYNAMIC = 'dynamic',
        AI_JSON = 'ai_json',
        CSV = 'csv',
    }
}

