/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dataset } from './Dataset';
import type { EvaluationStatus } from './EvaluationStatus';
import type { EvaluationTask } from './EvaluationTask';
export type Evaluation = {
    id: string;
    object?: Evaluation.object;
    name: string;
    description?: string;
    created_at: string;
    created_by_user_id: string;
    archived_at?: string;
    /**
     * The tags associated with the entity
     */
    tags: Array<string>;
    datasets: Array<Dataset>;
    status: EvaluationStatus;
    /**
     * Tasks executed during evaluation. Populated with optional `task` view.
     */
    tasks?: Array<EvaluationTask>;
};
export namespace Evaluation {
    export enum object {
        EVALUATION = 'evaluation',
    }
}

