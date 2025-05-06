/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ToolRequest } from './ToolRequest';
export type ActionContext = {
    /**
     * The final output of the agent when it no longer needs any tools
     */
    content?: string;
    /**
     * The tool request if the agent needs more information.
     */
    tool_request?: ToolRequest;
};

