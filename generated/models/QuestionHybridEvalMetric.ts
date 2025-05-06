/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type QuestionHybridEvalMetric = {
    question_type: string;
    is_conditional_question: boolean;
    question_title: string;
    evaluation_question: string;
    choices?: Array<any>;
    agreement_rate: number;
    num_correct: number;
    num_wrong: number;
    num_inconclusive: number;
    num_free_text: number;
    total_tokens: number;
    total_time: number;
};

