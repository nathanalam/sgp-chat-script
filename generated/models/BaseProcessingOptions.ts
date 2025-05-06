/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chunking } from './Chunking';
import type { FigureSummary } from './FigureSummary';
import type { TableSummary } from './TableSummary';
export type BaseProcessingOptions = {
    chunking?: Chunking;
    extraction_mode?: BaseProcessingOptions.extraction_mode;
    figure_summary?: FigureSummary;
    filter_blocks?: Array<'Header' | 'Footer' | 'Title' | 'Section Header' | 'Page Number' | 'List Item' | 'Figure' | 'Table' | 'Key Value' | 'Text' | 'Comment' | 'Discard'>;
    force_url_result?: boolean;
    ocr_mode?: BaseProcessingOptions.ocr_mode;
    table_summary?: TableSummary;
};
export namespace BaseProcessingOptions {
    export enum extraction_mode {
        OCR = 'ocr',
        METADATA = 'metadata',
        HYBRID = 'hybrid',
    }
    export enum ocr_mode {
        STANDARD = 'standard',
        AGENTIC = 'agentic',
    }
}

