import _typeof from "@babel/runtime/helpers/esm/typeof";
export * from './api';
/**
 * Underscore isNumber
 */

export function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]';
}
/**
 * Lodash isUndefined
 */

export function isUndefined(value) {
  return value === undefined;
}
/**
 * Lodash isObject
 */

export function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}
/**
 * Lodash noop
 */

export function noop() {// No operation performed.
}