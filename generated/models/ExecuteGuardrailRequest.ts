/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatMessageV2 } from './ChatMessageV2';
/**
 * Execute a Guardrail to see if chat thread are compliant with configured GuardrailPolicy
 *
 * Parameters:
 * messages: List[Message] - list of messages to be checked
 * verbose: bool - whether to include detailed information in the response, like safe categories and policy descriptions
 */
export type ExecuteGuardrailRequest = {
    messages: Array<ChatMessageV2>;
    verbose?: boolean;
};

