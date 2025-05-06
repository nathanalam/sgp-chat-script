/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionContext } from './ActionContext';
import type { AgentAction } from './AgentAction';
export type ExecuteAgentResponse = {
    /**
     * The action that the agent performed.
     *
     * The context will contain a key for each action that the agent can perform. However, only the key corresponding to the action that the agent actually performed will have a populated value. The rest of the values will be `null`.
     */
    action: AgentAction;
    /**
     * Context object containing the output payload. This will contain a key for all actions that the agent can perform. However, only the key corresponding to the action that the agent performed have a populated value. The rest of the values will be `null`.
     */
    context: ActionContext;
};

