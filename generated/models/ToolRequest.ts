/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ToolRequest = {
    /**
     * Name of the tool that the AI wants the client to use.
     */
    name: string;
    /**
     * Arguments to pass to the tool. The format must be a JSON Schema-compliant object serialized into a string.
     */
    arguments: string;
};

