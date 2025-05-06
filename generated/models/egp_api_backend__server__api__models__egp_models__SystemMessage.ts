/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type egp_api_backend__server__api__models__egp_models__SystemMessage = {
    /**
     * The role of the message. Must be set to 'system'.
     *
     * A system message is different from other messages in that it does not originate from a party engaged in a user/AI conversation. Instead, it is a message that is injected by either the application or system to guide the conversation. For example, a system message may be used as initial instructions for an AI entity or to tell the AI that it did not do something correctly.
     */
    role?: 'system';
    /**
     * Text input from the system.
     */
    content: string;
};

