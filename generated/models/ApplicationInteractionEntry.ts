/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionEvaluationResponse } from './ApplicationInteractionEvaluationResponse';
import type { ApplicationInteractionResponse } from './ApplicationInteractionResponse';
import type { GuardrailCheckResultWithPolicy } from './GuardrailCheckResultWithPolicy';
import type { InteractionDetail } from './InteractionDetail';
export type ApplicationInteractionEntry = {
    interaction: ApplicationInteractionResponse;
    guardrail_results?: Array<GuardrailCheckResultWithPolicy>;
    details?: InteractionDetail;
    metrics?: Array<Record<string, any>>;
    grader?: string;
    variant_name?: string;
    evaluation?: ApplicationInteractionEvaluationResponse;
    trace_id?: string;
};

