/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AzureAIFoundryRankParams } from './AzureAIFoundryRankParams';
export type AzureAIFoundryRankStrategy = {
    /**
     * Use a model from Azure AI Foundry for ranking.
     */
    method?: 'azure_ai_foundry';
    /**
     * The parameters needed for ranking.
     */
    params: AzureAIFoundryRankParams;
};

