/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemLocator } from './ItemLocator';
export type BleuScorerConfigWithItemLocator = {
    type: 'bleu';
    candidate: (string | ItemLocator);
    reference: (string | ItemLocator);
};

