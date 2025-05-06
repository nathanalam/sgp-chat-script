/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AzureAIFoundryRankStrategy } from './AzureAIFoundryRankStrategy';
import type { CrossEncoderRankStrategy } from './CrossEncoderRankStrategy';
import type { ModelRankStrategy } from './ModelRankStrategy';
import type { RougeRankStrategy } from './RougeRankStrategy';
export type RankStrategy = (CrossEncoderRankStrategy | RougeRankStrategy | ModelRankStrategy | AzureAIFoundryRankStrategy);

