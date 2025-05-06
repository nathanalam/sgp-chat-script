/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecuteAgentRequest } from '../models/ExecuteAgentRequest';
import type { ExecuteAgentResponse } from '../models/ExecuteAgentResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AgentsService {
    /**
     * Execute Agent
     * ### Description
     * Executes one Agent inference step. Given a list of messages and a list of tools to ask         for help from, the Agent will either respond with a final answer directly or ask the user to         execute a tool to provide more information.
     *
     * ### Details
     * An Agent is a component that utilizes a Language Model (LLM) as an interpreter and decision         maker. Unlike asking an LLM for a direct response, communicating with an agent consists of a         running dialogue where an agent can optionally ask the user to execute specialized tools for         specific tasks, such as calculations, web searches, or accessing custom data from private         knowledge bases.
     *
     * An agent is designed to be stateless, emitting outputs one step at a time. This means that         client-side applications are responsible for managing message history, tool execution,         and responses. This grants users greater flexibility to write and execute custom tools         and maintain explicit control over their message history.
     *
     * #### Message Types
     * - `User Message`: A message from the user to the agent.
     * - `System Message`: An informational text message from the system to guide the agent. It is         not a user message or agent message because it did not come from either entity.
     * - `Agent Message`: A message from the agent to the client. It will contain either a final         answer as `content` or a request for the user to execute a tool as a `tool_request`.
     * - `Tool Message`: A message from the user to the agent that contains the output of a tool         execution. The tool message will be processed by the agent and the agent will respond with         either a final answer or another tool request.
     *
     * #### Agent Instructions
     * Instructions are used to guide the agent's decision making process and output generation.
     *
     * Good prompt engineering is crucial to getting performant results from the agent. If you are         having trouble getting the agent to perform well, try writing more specific instructions         before trying more expensive techniques such as swapping in other models or finetuning the         underlying LLM.
     *
     * For example, the default instructions we set for the agent are the following:
     *
     * > You are an AI assistant that helps users with their questions. You can answer questions         directly or acquire information from any of the attached tools to assist you. Always answer         the user's most recent query to the best of your knowledge.<br>
     * > When asked about what tools are available, you must list each attached tool's name         and description. When asked about what you can do, mention that in addition to your normal         capabilities, you can also use the attached tools by listing their names and descriptions.         You cannot use any other tools other than the ones provided to you explicitly.
     *
     *
     * ### Restrictions and Limits
     * **Message Limits**:
     * - The message list is not limited by length, but by the context limit of the underlying           language model. If you are getting an error regarding the underlying model's context           limit, try using a memory strategy to condense the input messages.
     *
     * **Model Restrictions**:
     * - Currently, only closed source models like GPT and Claude are supported due to the           limitations of open source models when it comes to tool selection, generating tool           arguments in valid JSON, and planning out multi-step tool execution. Specialized           fine-tuning will likely be required to make open source models compatible with agents.
     * @param requestBody
     * @returns ExecuteAgentResponse Successful Response
     * @throws ApiError
     */
    public static postV2V2AgentsExecute(
        requestBody: ExecuteAgentRequest,
    ): CancelablePromise<ExecuteAgentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/agents/execute',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Execute Agent
     * ### Description
     * Executes one Agent inference step. Given a list of messages and a list of tools to ask         for help from, the Agent will either respond with a final answer directly or ask the user to         execute a tool to provide more information.
     *
     * ### Details
     * An Agent is a component that utilizes a Language Model (LLM) as an interpreter and decision         maker. Unlike asking an LLM for a direct response, communicating with an agent consists of a         running dialogue where an agent can optionally ask the user to execute specialized tools for         specific tasks, such as calculations, web searches, or accessing custom data from private         knowledge bases.
     *
     * An agent is designed to be stateless, emitting outputs one step at a time. This means that         client-side applications are responsible for managing message history, tool execution,         and responses. This grants users greater flexibility to write and execute custom tools         and maintain explicit control over their message history.
     *
     * #### Message Types
     * - `User Message`: A message from the user to the agent.
     * - `System Message`: An informational text message from the system to guide the agent. It is         not a user message or agent message because it did not come from either entity.
     * - `Agent Message`: A message from the agent to the client. It will contain either a final         answer as `content` or a request for the user to execute a tool as a `tool_request`.
     * - `Tool Message`: A message from the user to the agent that contains the output of a tool         execution. The tool message will be processed by the agent and the agent will respond with         either a final answer or another tool request.
     *
     * #### Agent Instructions
     * Instructions are used to guide the agent's decision making process and output generation.
     *
     * Good prompt engineering is crucial to getting performant results from the agent. If you are         having trouble getting the agent to perform well, try writing more specific instructions         before trying more expensive techniques such as swapping in other models or finetuning the         underlying LLM.
     *
     * For example, the default instructions we set for the agent are the following:
     *
     * > You are an AI assistant that helps users with their questions. You can answer questions         directly or acquire information from any of the attached tools to assist you. Always answer         the user's most recent query to the best of your knowledge.<br>
     * > When asked about what tools are available, you must list each attached tool's name         and description. When asked about what you can do, mention that in addition to your normal         capabilities, you can also use the attached tools by listing their names and descriptions.         You cannot use any other tools other than the ones provided to you explicitly.
     *
     *
     * ### Restrictions and Limits
     * **Message Limits**:
     * - The message list is not limited by length, but by the context limit of the underlying           language model. If you are getting an error regarding the underlying model's context           limit, try using a memory strategy to condense the input messages.
     *
     * **Model Restrictions**:
     * - Currently, only closed source models like GPT and Claude are supported due to the           limitations of open source models when it comes to tool selection, generating tool           arguments in valid JSON, and planning out multi-step tool execution. Specialized           fine-tuning will likely be required to make open source models compatible with agents.
     * @param requestBody
     * @returns ExecuteAgentResponse Successful Response
     * @throws ApiError
     */
    public static postV3V2AgentsExecute(
        requestBody: ExecuteAgentRequest,
    ): CancelablePromise<ExecuteAgentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v3/agents/execute',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Execute Agent
     * ### Description
     * Executes one Agent inference step. Given a list of messages and a list of tools to ask         for help from, the Agent will either respond with a final answer directly or ask the user to         execute a tool to provide more information.
     *
     * ### Details
     * An Agent is a component that utilizes a Language Model (LLM) as an interpreter and decision         maker. Unlike asking an LLM for a direct response, communicating with an agent consists of a         running dialogue where an agent can optionally ask the user to execute specialized tools for         specific tasks, such as calculations, web searches, or accessing custom data from private         knowledge bases.
     *
     * An agent is designed to be stateless, emitting outputs one step at a time. This means that         client-side applications are responsible for managing message history, tool execution,         and responses. This grants users greater flexibility to write and execute custom tools         and maintain explicit control over their message history.
     *
     * #### Message Types
     * - `User Message`: A message from the user to the agent.
     * - `System Message`: An informational text message from the system to guide the agent. It is         not a user message or agent message because it did not come from either entity.
     * - `Agent Message`: A message from the agent to the client. It will contain either a final         answer as `content` or a request for the user to execute a tool as a `tool_request`.
     * - `Tool Message`: A message from the user to the agent that contains the output of a tool         execution. The tool message will be processed by the agent and the agent will respond with         either a final answer or another tool request.
     *
     * #### Agent Instructions
     * Instructions are used to guide the agent's decision making process and output generation.
     *
     * Good prompt engineering is crucial to getting performant results from the agent. If you are         having trouble getting the agent to perform well, try writing more specific instructions         before trying more expensive techniques such as swapping in other models or finetuning the         underlying LLM.
     *
     * For example, the default instructions we set for the agent are the following:
     *
     * > You are an AI assistant that helps users with their questions. You can answer questions         directly or acquire information from any of the attached tools to assist you. Always answer         the user's most recent query to the best of your knowledge.<br>
     * > When asked about what tools are available, you must list each attached tool's name         and description. When asked about what you can do, mention that in addition to your normal         capabilities, you can also use the attached tools by listing their names and descriptions.         You cannot use any other tools other than the ones provided to you explicitly.
     *
     *
     * ### Restrictions and Limits
     * **Message Limits**:
     * - The message list is not limited by length, but by the context limit of the underlying           language model. If you are getting an error regarding the underlying model's context           limit, try using a memory strategy to condense the input messages.
     *
     * **Model Restrictions**:
     * - Currently, only closed source models like GPT and Claude are supported due to the           limitations of open source models when it comes to tool selection, generating tool           arguments in valid JSON, and planning out multi-step tool execution. Specialized           fine-tuning will likely be required to make open source models compatible with agents.
     * @param requestBody
     * @returns ExecuteAgentResponse Successful Response
     * @throws ApiError
     */
    public static postV4V2AgentsExecute(
        requestBody: ExecuteAgentRequest,
    ): CancelablePromise<ExecuteAgentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/agents/execute',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
