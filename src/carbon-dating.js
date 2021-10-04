import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 export default function dateSample(sA) {
  if (!sA || typeof(sA) != 'string' || !Number(sA) || Number(sA) < 0 || Number(sA) > 15) return false
  return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sA))*HALF_LIFE_PERIOD/0.693);
}