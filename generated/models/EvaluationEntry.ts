/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationConfigEntity } from './EvaluationConfigEntity';
import type { EvaluationDatasetEntity } from './EvaluationDatasetEntity';
import type { EvaluationDatasetVersionEntity } from './EvaluationDatasetVersionEntity';
import type { LegacyEvaluationEntity } from './LegacyEvaluationEntity';
import type { QuestionEntity } from './QuestionEntity';
import type { QuestionSetEntity } from './QuestionSetEntity';
import type { TestCaseResultEntity } from './TestCaseResultEntity';
export type EvaluationEntry = {
    evaluation: LegacyEvaluationEntity;
    dataset?: EvaluationDatasetEntity;
    dataset_version?: EvaluationDatasetVersionEntity;
    evaluation_config?: EvaluationConfigEntity;
    question_set?: QuestionSetEntity;
    questions?: Array<QuestionEntity>;
    test_case_results?: Array<TestCaseResultEntity>;
};

