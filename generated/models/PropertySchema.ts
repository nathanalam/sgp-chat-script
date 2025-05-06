/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an individual property inside `config`, `inputs`, or `output`.
 *
 * Attributes:
 * type (Optional[str]): The type of the property. If null, the type can have multiple values as specified in `anyOf`.
 * description (Optional[str]): A brief description of the property.
 * title (Optional[str]): The title of the property.
 * default (Optional[Any]): The default value of the property.
 * anyOf (Optional[List[Dict[str, Any]]]): A list of dictionaries specifying multiple possible schemas for the property. If null, the property can only have the type specified in `type`.
 * items (Optional[Any]): Specifies the type of items if the property is an array.
 */
export type PropertySchema = Record<string, any>;
