/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemoryStrategy } from './MemoryStrategy';
import type { Message } from './Message';
import type { ModelParameters } from './ModelParameters';
import type { Tool } from './Tool';
export type ExecuteAgentRequest = {
    /**
     * The ID of the model to use for the agent. We only support the models listed here so far.
     */
    model: ExecuteAgentRequest.model;
    /**
     * The memory strategy to use for the agent. A memory strategy is a way to prevent the underlying LLM's context limit from being exceeded. Each memory strategy uses a different technique to condense the input message list into a smaller payload for the underlying LLM.
     *
     * We only support the Last K memory strategy right now, but will be adding new strategies soon.
     */
    memory_strategy?: MemoryStrategy;
    /**
     * The list of specs of tools that the agent can use. Each spec must contain a `name` key set to the name of the tool, a `description` key set to the description of the tool, and an `arguments` key set to a JSON Schema compliant object describing the tool arguments.
     *
     * The name and description of each tool is used by the agent to decide when to use certain tools. Because some queries are complex and may require multiple tools to complete, it is important to make these descriptions as informative as possible. If a tool is not being chosen when it should, it is common practice to tune the description of the tool to make it more apparent to the agent when the tool can be used effectively.
     *
     *
     */
    tools: Array<Tool>;
    /**
     * The list of messages in the conversation.
     *
     * Expand each message type to see how it works and when to use it. Most conversations should begin with a single `user` message.
     */
    messages: Array<Message>;
    /**
     * Configuration parameters for the agent model, such as temperature, max_tokens, and stop_sequences.
     *
     * If not specified, the default value are:
     * - temperature: 0.2
     * - max_tokens: None (limited by the model's max tokens)
     * - stop_sequences: None
     */
    model_parameters?: ModelParameters;
    /**
     * The initial instructions to provide to the agent.
     *
     * Use this to guide the agent to act in more specific ways. For example, if you have specific rules you want to restrict the agent to follow you can specify them here. For example, if I want the agent to always use certain tools before others, I can write that rule in these instructions.
     *
     * Good prompt engineering is crucial to getting performant results from the agent. If you are having trouble getting the agent to perform well, try writing more specific instructions here before trying more expensive techniques such as swapping in other models or finetuning the underlying LLM.
     */
    instructions?: string;
};
export namespace ExecuteAgentRequest {
    /**
     * The ID of the model to use for the agent. We only support the models listed here so far.
     */
    export enum model {
        GPT_4 = 'gpt-4',
        GPT_4_0613 = 'gpt-4-0613',
        GPT_4_32K = 'gpt-4-32k',
        GPT_4_32K_0613 = 'gpt-4-32k-0613',
        GPT_3_5_TURBO = 'gpt-3.5-turbo',
        GPT_3_5_TURBO_0613 = 'gpt-3.5-turbo-0613',
        GPT_3_5_TURBO_16K = 'gpt-3.5-turbo-16k',
        GPT_3_5_TURBO_16K_0613 = 'gpt-3.5-turbo-16k-0613',
        CLAUDE_INSTANT_1 = 'claude-instant-1',
        CLAUDE_INSTANT_1_1 = 'claude-instant-1.1',
        CLAUDE_2 = 'claude-2',
        CLAUDE_2_0 = 'claude-2.0',
    }
}

