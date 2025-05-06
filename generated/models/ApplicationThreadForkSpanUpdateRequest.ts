/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApplicationThreadForkSpanUpdateRequest = {
    /**
     * ID of the span to update
     */
    span_id: string;
    /**
     * New set of outputs from the span
     */
    outputs: Record<string, any>;
    /**
     * ID of the interaction to update
     */
    interaction_id: string;
};

