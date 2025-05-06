/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RougeRankParams = {
    /**
     * Rouge type, can be n-gram based (e.g. rouge1, rouge2) or longest common subsequence (rougeL or rougeLsum)
     */
    metric?: string;
    /**
     * Metric to use from Rouge score
     */
    score?: RougeRankParams.score;
};
export namespace RougeRankParams {
    /**
     * Metric to use from Rouge score
     */
    export enum score {
        PRECISION = 'precision',
        RECALL = 'recall',
        FMEASURE = 'fmeasure',
    }
}

