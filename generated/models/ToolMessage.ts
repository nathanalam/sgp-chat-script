/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ToolMessage = {
    /**
     * The role of the message. Must be set to 'tool'.
     *
     * A tool message is a message the client application uses to send tool output to the AI. It should contain the name of the tool and the output from the tool encoded as text.
     */
    role?: 'tool';
    /**
     * Name of the tool
     */
    name: string;
    /**
     * Text output from the tool
     */
    content: string;
};

