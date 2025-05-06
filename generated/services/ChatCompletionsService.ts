/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateChatCompletionRequest } from '../models/CreateChatCompletionRequest';
import type { CreateChatCompletionResponse } from '../models/CreateChatCompletionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatCompletionsService {
    /**
     * Create Chat Completion
     * ### Description
     * Given a list of messages representing a conversation history, runs LLM inference to produce         the next message.
     *
     * ### Details
     * Like [completions](https://scale-egp.readme.io/docs/completions-1), [chat completions](         https://scale-egp.readme.io/docs/chat-completions-intro) involve an LLM's response to input.         However, chat completions take a conversation history as input, instead of a single prompt,         which enables the LLM to create responses that take past context into account.
     *
     * ### Messages
     * The primary input to the LLM is a list of messages represented by the `messages` array,         which forms the conversation. The `messages` array must contain at least one `message` object.
     * Each `message` object is attributed to a specific entity through its `role`. The available         roles are:
     * - `user`: Represents the human querying the model.            - `assistant`: Represents the model responding to user.            - `system`: Represents a non-user entity that provides information to guide the behavior            of the assistant.
     *
     * When the `role` of a `message` is set to `user`, `assistant`, or `system`, the `message` must         also contain a `content` field which is a string representing the actual text of the message         itself. Semantically, when the `role` is `user`, `content` contains the user's query. When         the `role` is `assistant`, `content` is the model's response to the user. When the `role` is         `system`, `content` represents the instruction for the assistant.
     *
     * ### Instructions
     * You may provide instructions to the assistant by supplying by supplying `instructions` in the         HTTP request body or by specifying a `message` with `role` set to `system` in the `messages`         array. By convention, the system message should be the first message in the array. Do **not**         specify both an instruction and a system message in the `messages` array.
     * @param requestBody
     * @returns CreateChatCompletionResponse Successful Response
     * @throws ApiError
     */
    public static postV2V2ChatCompletions(
        requestBody: CreateChatCompletionRequest,
    ): CancelablePromise<CreateChatCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/chat-completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Chat Completion
     * ### Description
     * Given a list of messages representing a conversation history, runs LLM inference to produce         the next message.
     *
     * ### Details
     * Like [completions](https://scale-egp.readme.io/docs/completions-1), [chat completions](         https://scale-egp.readme.io/docs/chat-completions-intro) involve an LLM's response to input.         However, chat completions take a conversation history as input, instead of a single prompt,         which enables the LLM to create responses that take past context into account.
     *
     * ### Messages
     * The primary input to the LLM is a list of messages represented by the `messages` array,         which forms the conversation. The `messages` array must contain at least one `message` object.
     * Each `message` object is attributed to a specific entity through its `role`. The available         roles are:
     * - `user`: Represents the human querying the model.            - `assistant`: Represents the model responding to user.            - `system`: Represents a non-user entity that provides information to guide the behavior            of the assistant.
     *
     * When the `role` of a `message` is set to `user`, `assistant`, or `system`, the `message` must         also contain a `content` field which is a string representing the actual text of the message         itself. Semantically, when the `role` is `user`, `content` contains the user's query. When         the `role` is `assistant`, `content` is the model's response to the user. When the `role` is         `system`, `content` represents the instruction for the assistant.
     *
     * ### Instructions
     * You may provide instructions to the assistant by supplying by supplying `instructions` in the         HTTP request body or by specifying a `message` with `role` set to `system` in the `messages`         array. By convention, the system message should be the first message in the array. Do **not**         specify both an instruction and a system message in the `messages` array.
     * @param requestBody
     * @returns CreateChatCompletionResponse Successful Response
     * @throws ApiError
     */
    public static postV3V2ChatCompletions(
        requestBody: CreateChatCompletionRequest,
    ): CancelablePromise<CreateChatCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/chat-completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Chat Completion
     * ### Description
     * Given a list of messages representing a conversation history, runs LLM inference to produce         the next message.
     *
     * ### Details
     * Like [completions](https://scale-egp.readme.io/docs/completions-1), [chat completions](         https://scale-egp.readme.io/docs/chat-completions-intro) involve an LLM's response to input.         However, chat completions take a conversation history as input, instead of a single prompt,         which enables the LLM to create responses that take past context into account.
     *
     * ### Messages
     * The primary input to the LLM is a list of messages represented by the `messages` array,         which forms the conversation. The `messages` array must contain at least one `message` object.
     * Each `message` object is attributed to a specific entity through its `role`. The available         roles are:
     * - `user`: Represents the human querying the model.            - `assistant`: Represents the model responding to user.            - `system`: Represents a non-user entity that provides information to guide the behavior            of the assistant.
     *
     * When the `role` of a `message` is set to `user`, `assistant`, or `system`, the `message` must         also contain a `content` field which is a string representing the actual text of the message         itself. Semantically, when the `role` is `user`, `content` contains the user's query. When         the `role` is `assistant`, `content` is the model's response to the user. When the `role` is         `system`, `content` represents the instruction for the assistant.
     *
     * ### Instructions
     * You may provide instructions to the assistant by supplying by supplying `instructions` in the         HTTP request body or by specifying a `message` with `role` set to `system` in the `messages`         array. By convention, the system message should be the first message in the array. Do **not**         specify both an instruction and a system message in the `messages` array.
     * @param requestBody
     * @returns CreateChatCompletionResponse Successful Response
     * @throws ApiError
     */
    public static postV4V2ChatCompletions(
        requestBody: CreateChatCompletionRequest,
    ): CancelablePromise<CreateChatCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/chat-completions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
