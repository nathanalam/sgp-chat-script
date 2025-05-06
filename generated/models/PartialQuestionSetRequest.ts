/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PartialQuestionSetRequest = {
    name?: string;
    /**
     * Instructions to answer questions
     */
    instructions?: string;
    /**
     * IDs of questions in the question set
     */
    question_ids?: Array<string>;
    /**
     * Set to true to restore the entity from the database.
     */
    restore?: 'False';
};

