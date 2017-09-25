// @flow
import * as jsonpack from 'jsonpack/main';

/**
 * Split a string into chunks of the given size
 * @param  {String} string is the String to split
 * @param  {Number} size is the size you of the cuts
 * @return {Array} an Array with the strings
 */
export const splitString = (string: string, size: number) => {
  const re = new RegExp(`.{1,${size}}`, 'g');
  return string.match(re);
};

const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

export const jsonStringsToDates = (key: string, value: any) => {
  if (typeof value === 'string' && dateFormat.test(value)) {
    return new Date(value);
  }
  return value;
};

/**
 * Divide Json to Strings equals parts, specifying a size
 * @param {Object} json Object JSON to parse
 * @param {number} size Size in number from divide
 * @returns {Object} jsonStrings
 */
export const divideJsonToStrings = (json: any, size: number) => {
  const jsonString = jsonpack.pack(JSON.parse(JSON.stringify(json))).replace(/\r?\n|\r/g, '');
  const jsonResult = splitString(jsonString, size);
  return jsonResult;
};

/**
 * Concat strings parts to JSON Object
 * @param {Object} jsnParts Object with strings parts parsed by divideJsonToStrings func
 * @returns {Object} Rebuilded JSON Object
 */
export const joinStringsToJson = (jsnParts: any) => {
  let newJsonString = '';
  jsnParts.forEach((item) => {
    newJsonString += item;
  });
  const newJson = JSON.parse(JSON.stringify(jsonpack.unpack(newJsonString)), jsonStringsToDates);
  return newJson;
};

export default divideJsonToStrings;
