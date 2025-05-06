/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ToolPropertyValue = {
    /**
     * The argument's type.
     *
     * The type is used to help the Agent generate valid arguments for the tool.
     *
     * For more information about types, see: https://json-schema.org/understanding-json-schema/reference/type.html#type-specific-keywords
     */
    type: ToolPropertyValue.type;
    /**
     * Description of what the argument is used for.
     *
     * This description is used to help the Agent generate sensible arguments for the tool. It is very important that this description is succinct, clear, and accurate.
     */
    description: string;
    /**
     * A default value for the argument if unspecified.
     */
    default?: string;
    /**
     * Example values demonstrating how the argument should look.
     *
     * This can be used to help the agent understand what a valid argument should look like.
     */
    examples?: Array<string>;
};
export namespace ToolPropertyValue {
    /**
     * The argument's type.
     *
     * The type is used to help the Agent generate valid arguments for the tool.
     *
     * For more information about types, see: https://json-schema.org/understanding-json-schema/reference/type.html#type-specific-keywords
     */
    export enum type {
        STRING = 'string',
        NUMBER = 'number',
        INTEGER = 'integer',
        BOOLEAN = 'boolean',
        OBJECT = 'object',
        ARRAY = 'array',
        NULL = 'null',
    }
}

