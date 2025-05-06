/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ImageUrlSubPart = {
    /**
     * The URL of the image. Note: only OpenAI supports this.
     */
    url: string;
    /**
     * Only used for OpenAI. Corresponds to OpenAI's image detail parameter.
     */
    detail?: ImageUrlSubPart.detail;
};
export namespace ImageUrlSubPart {
    /**
     * Only used for OpenAI. Corresponds to OpenAI's image detail parameter.
     */
    export enum detail {
        LOW = 'low',
        HIGH = 'high',
        AUTO = 'auto',
    }
}

