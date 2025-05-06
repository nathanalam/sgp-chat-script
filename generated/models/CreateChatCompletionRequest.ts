/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatMessage } from './ChatMessage';
import type { MemoryStrategy } from './MemoryStrategy';
import type { ModelParameters } from './ModelParameters';
export type CreateChatCompletionRequest = {
    /**
     * The account ID to use for usage tracking. This will be gradually enforced.
     */
    account_id?: string;
    /**
     * The ID of the model to use for chat completions. We only support the models listed here so far.
     */
    model: CreateChatCompletionRequest.model;
    /**
     * The memory strategy to use for the agent. A memory strategy is a way to prevent the underlying LLM's context limit from being exceeded. Each memory strategy uses a different technique to condense the input message list into a smaller payload for the underlying LLM.
     *
     * We only support the Last K memory strategy right now, but will be adding new strategies soon.
     */
    memory_strategy?: MemoryStrategy;
    /**
     * The list of messages in the conversation.
     *
     * Expand each message type to see how it works and when to use it. Most conversations should begin with a single `user` message.
     */
    messages: Array<ChatMessage>;
    /**
     * Configuration parameters for the chat completion model, such as temperature, max_tokens, and stop_sequences.
     *
     * If not specified, the default value are:
     * - temperature: 0.2
     * - max_tokens: None (limited by the model's max tokens)
     * - stop_sequences: None
     */
    model_parameters?: ModelParameters;
    /**
     * The initial instructions to provide to the chat completion model.
     *
     * Use this to guide the model to act in more specific ways. For example, if you have specific rules you want to restrict the model to follow you can specify them here.
     *
     * Good prompt engineering is crucial to getting performant results from the model. If you are having trouble getting the model to perform well, try writing more specific instructions here before trying more expensive techniques such as swapping in other models or finetuning the underlying LLM.
     */
    instructions?: string;
    /**
     * Currently only supported for LLM-Engine models. A Jinja template string that defines how the chat completion API formats the string prompt. For Llama models, the template must take in at most a `messages` object, `bos_token` string, and `eos_token` string. The `messages` object is a list of dictionaries, each with keys `role` and `content`. For Mixtral models, the template must take in at most a `messages` object and `eos_token` string. The `messages` object looks identical to the Llama model's `messages` object, but the template can assume the `role` key takes on the values `user` or `assistant`, or `system` for the first message. The chat template either needs to handle this system message (which gets set via the `instructions` field or by the messages), or the `instructions` field must be set to `null` and the `messages` object must not contain any system messages.See the default chat template present in the Llama and Mixtral tokenizers for examples.
     */
    chat_template?: string;
    /**
     * Whether or not to stream the response.
     *
     * Setting this to True will stream the completion in real-time.
     */
    stream?: boolean;
};
export namespace CreateChatCompletionRequest {
    /**
     * The ID of the model to use for chat completions. We only support the models listed here so far.
     */
    export enum model {
        O1 = 'o1',
        O1_MINI = 'o1-mini',
        O3_MINI = 'o3-mini',
        GPT_4 = 'gpt-4',
        GPT_4_0613 = 'gpt-4-0613',
        GPT_4_32K = 'gpt-4-32k',
        GPT_4_32K_0613 = 'gpt-4-32k-0613',
        GPT_4O = 'gpt-4o',
        GPT_4O_MINI = 'gpt-4o-mini',
        GPT_4O_2024_08_06 = 'gpt-4o-2024-08-06',
        GPT_3_5_TURBO = 'gpt-3.5-turbo',
        GPT_3_5_TURBO_0613 = 'gpt-3.5-turbo-0613',
        GPT_3_5_TURBO_16K = 'gpt-3.5-turbo-16k',
        GPT_3_5_TURBO_16K_0613 = 'gpt-3.5-turbo-16k-0613',
        GEMINI_PRO = 'gemini-pro',
        GEMINI_1_5_PRO_001 = 'gemini-1.5-pro-001',
        GEMINI_1_5_PRO_002 = 'gemini-1.5-pro-002',
        GEMINI_1_5_PRO_PREVIEW_0409 = 'gemini-1.5-pro-preview-0409',
        GEMINI_1_5_PRO_PREVIEW_0514 = 'gemini-1.5-pro-preview-0514',
        LLAMA_2_7B_CHAT = 'llama-2-7b-chat',
        LLAMA_2_13B_CHAT = 'llama-2-13b-chat',
        LLAMA_2_70B_CHAT = 'llama-2-70b-chat',
        LLAMA_3_8B_INSTRUCT = 'llama-3-8b-instruct',
        LLAMA_3_70B_INSTRUCT = 'llama-3-70b-instruct',
        LLAMA_3_1_8B_INSTRUCT = 'llama-3-1-8b-instruct',
        LLAMA_3_1_70B_INSTRUCT = 'llama-3-1-70b-instruct',
        LLAMA_3_2_1B_INSTRUCT = 'llama-3-2-1b-instruct',
        LLAMA_3_2_3B_INSTRUCT = 'llama-3-2-3b-instruct',
        LLAMA_3_3_70B_INSTRUCT = 'llama-3-3-70b-instruct',
        META_LLAMA_3_8B_INSTRUCT_RMU = 'Meta-Llama-3-8B-Instruct-RMU',
        META_LLAMA_3_8B_INSTRUCT_RR = 'Meta-Llama-3-8B-Instruct-RR',
        META_LLAMA_3_8B_INSTRUCT_DERTA = 'Meta-Llama-3-8B-Instruct-DERTA',
        META_LLAMA_3_8B_INSTRUCT_LAT = 'Meta-Llama-3-8B-Instruct-LAT',
        MIXTRAL_8X7B_INSTRUCT = 'mixtral-8x7b-instruct',
        MIXTRAL_8X22B_INSTRUCT = 'mixtral-8x22b-instruct',
        CLAUDE_3_OPUS_20240229 = 'claude-3-opus-20240229',
        CLAUDE_3_SONNET_20240229 = 'claude-3-sonnet-20240229',
        CLAUDE_3_HAIKU_20240307 = 'claude-3-haiku-20240307',
        CLAUDE_3_5_SONNET_20240620 = 'claude-3-5-sonnet-20240620',
        CLAUDE_3_5_SONNET_20241022 = 'claude-3-5-sonnet-20241022',
        MISTRAL_LARGE_LATEST = 'mistral-large-latest',
        PHI_3_MINI_4K_INSTRUCT = 'phi-3-mini-4k-instruct',
        PHI_3_CAT_MERGED = 'phi-3-cat-merged',
        ZEPHYR_CAT_MERGED = 'zephyr-cat-merged',
        DOLPHIN_2_9_LLAMA3_8B = 'dolphin-2.9-llama3-8b',
        DOLPHIN_2_9_LLAMA3_70B = 'dolphin-2.9-llama3-70b',
        DEFENSE_LLAMA_3_8B_INSTRUCT = 'defense-llama-3-8b-instruct',
        DONOVAN_COMBAT_LLAMA = 'donovan-combat-llama',
        LLAMA3_1_405B_INSTRUCT_V1 = 'llama3-1-405b-instruct-v1',
    }
}

