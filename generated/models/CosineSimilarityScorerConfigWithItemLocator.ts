/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemLocator } from './ItemLocator';
export type CosineSimilarityScorerConfigWithItemLocator = {
    type: 'cosine_similarity';
    candidate: (string | ItemLocator);
    reference: (string | ItemLocator);
};

