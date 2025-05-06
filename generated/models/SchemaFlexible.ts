/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatMessageV2 } from './ChatMessageV2';
import type { ExtraInfoSchema } from './ExtraInfoSchema';
import type { FileIODataType } from './FileIODataType';
import type { FlexibleIOChunk } from './FlexibleIOChunk';
export type SchemaFlexible = {
    input: (string | Record<string, (string | number | Array<FlexibleIOChunk> | Array<ChatMessageV2> | Record<string, any> | FileIODataType)>);
    expected_output?: (string | Record<string, (string | number | Array<FlexibleIOChunk> | Array<ChatMessageV2> | Record<string, any> | FileIODataType)>);
    expected_extra_info?: ExtraInfoSchema;
};

