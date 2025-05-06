/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInteractionEvaluationResponse } from './ApplicationInteractionEvaluationResponse';
import type { GenericAsyncJobStatusEnum } from './GenericAsyncJobStatusEnum';
export type ApplicationOnlineEvaluationDetails = {
    /**
     * Application Interaction ID
     */
    application_interaction_id: string;
    /**
     * Evaluation job status
     */
    evaluation_status?: GenericAsyncJobStatusEnum;
    /**
     * Evaluation results
     */
    evaluation_results?: Array<ApplicationInteractionEvaluationResponse>;
};

