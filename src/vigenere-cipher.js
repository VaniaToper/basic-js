import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(mode = 'true') {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    let result = '';
    let position = 0;

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65;
        let charCodeEncrypted = key.charCodeAt(position) - 65;
        let resultCharCode = ((charCode + charCodeEncrypted) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
        position++;
      } else {
        result += message[i];
      }
    }

    if (!this.mode) return result.split('').reverse().join('');
    return result;
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    let result = '';
    let position = 0;

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode += 65;
        let charCodeEncrypted = key.charCodeAt(position) - 65;
        let resultCharCode = ((charCode - charCodeEncrypted) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
        position++;
      } else {
        result += message[i];
      }
    }

    if (!this.mode) return result.split('').reverse().join('');
    return result;
  }
}
