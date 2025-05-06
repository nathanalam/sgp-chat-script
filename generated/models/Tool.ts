/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ToolArguments } from './ToolArguments';
export type Tool = {
    /**
     * Name of the tool.
     *
     * A tool is a function that the _client application_ has at its disposal. The tool name is the name the client wishes the Agent to use to refer to this function when it decides if it wants the user to use the tool or not. Itmust be unique amongst the set of tools provided in a single API call.
     */
    name: string;
    /**
     * Description of the tool.
     *
     * Because some queries are complex and may require multiple tools to complete, it is important to make these descriptions as informative as possible. If a tool is not being chosen when it should, it is common practice to tune the description of the tool to make it more apparent to the agent when the tool can be used effectively.
     */
    description: string;
    /**
     * An JSON Schema-compliant schema for the tool arguments. To describe a function that accepts no parameters, provide the value `{"type": ""object", "properties": {}}`.
     *
     * For more information on how to define a valid JSON Schema object, visit https://json-schema.org/understanding-json-schema/reference/object.html
     */
    arguments: ToolArguments;
};

