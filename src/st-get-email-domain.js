import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 export default function getEmailDomain(email) {
  let newEmail = email.split("").reverse().join("")
    return newEmail.slice(0,newEmail.indexOf(String.fromCharCode(64))).split("").reverse().join("");
}