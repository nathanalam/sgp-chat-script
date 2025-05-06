/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentUserInputType } from './AgentUserInputType';
import type { SelectionConstraintType } from './SelectionConstraintType';
export type ValueConstraint = {
    selection_constraint_type: SelectionConstraintType;
    potential_values: Array<string>;
    value_type: AgentUserInputType;
    min_items?: number;
    max_items?: number;
};

