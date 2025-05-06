/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type egp_api_backend__server__api__models__egp_models__AssistantMessage = {
    /**
     * The role of the message. Must be set to 'assistant'.
     *
     * An assistant message is a message from the AI to the client. It is different from an agent message in that it cannot contain a tool request. It is simply a direct response from the AI to the client.
     */
    role?: 'assistant';
    /**
     * Text response from the assistant
     */
    content: string;
};

