/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionWithConfig } from './QuestionWithConfig';
export type QuestionSet = {
    id: string;
    object?: QuestionSet.object;
    name: string;
    instructions?: string;
    created_at: string;
    created_by_user_id: string;
    archived_at?: string;
    /**
     * Questions in the question set
     */
    questions?: Array<QuestionWithConfig>;
};
export namespace QuestionSet {
    export enum object {
        QUESTION_SET = 'question_set',
    }
}

