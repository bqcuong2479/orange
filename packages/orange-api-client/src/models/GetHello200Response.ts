/* tslint:disable */
/* eslint-disable */
/**
 * Orange API
 * Orange API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {exists, mapValues} from '../runtime'
/**
 *
 * @export
 * @interface GetHello200Response
 */
export interface GetHello200Response {
  /**
   *
   * @type {string}
   * @memberof GetHello200Response
   */
  message?: string
  /**
   *
   * @type {string}
   * @memberof GetHello200Response
   */
  name?: string
}

/**
 * Check if a given object implements the GetHello200Response interface.
 */
export function instanceOfGetHello200Response(value: object): boolean {
  let isInstance = true

  return isInstance
}

export function GetHello200ResponseFromJSON(json: any): GetHello200Response {
  return GetHello200ResponseFromJSONTyped(json, false)
}

export function GetHello200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetHello200Response {
  if (json === undefined || json === null) {
    return json
  }
  return {
    message: !exists(json, 'message') ? undefined : json['message'],
    name: !exists(json, 'name') ? undefined : json['name'],
  }
}

export function GetHello200ResponseToJSON(
  value?: GetHello200Response | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    message: value.message,
    name: value.name,
  }
}
