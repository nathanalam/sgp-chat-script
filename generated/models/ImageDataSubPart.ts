/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ImageDataSubPart = {
    /**
     * The type of the image data. Only base64 is supported.
     */
    type?: ImageDataSubPart.type;
    /**
     * The media/mime type of the image data. For example, 'image/png'. Check providers' documentation for supported media types.
     */
    media_type: string;
    /**
     * The base64-encoded image data.
     */
    data: string;
    /**
     * Only used for OpenAI. Corresponds to OpenAI's image detail parameter.
     */
    detail?: ImageDataSubPart.detail;
};
export namespace ImageDataSubPart {
    /**
     * The type of the image data. Only base64 is supported.
     */
    export enum type {
        BASE64 = 'base64',
    }
    /**
     * Only used for OpenAI. Corresponds to OpenAI's image detail parameter.
     */
    export enum detail {
        LOW = 'low',
        HIGH = 'high',
        AUTO = 'auto',
    }
}

