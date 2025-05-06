/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { egp_api_backend__server__api__models__egp_models__UserMessageContentParts } from './egp_api_backend__server__api__models__egp_models__UserMessageContentParts';
export type egp_api_backend__server__api__models__egp_models__UserMessage = {
    /**
     * The role of the message. Must be set to 'user'.
     *
     * A user message is a message from the user to the AI. This should be the message used to send end user input to the AI.
     */
    role?: 'user';
    /**
     * Input from the user. Can either be text or a list of content parts. Not all models support image content parts, or multiple parts.
     */
    content: (string | Array<egp_api_backend__server__api__models__egp_models__UserMessageContentParts>);
};

