import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
  chain: [],
getLength() {
  this.chain.length;
  return this;
},
  addLink: function (value){
      if(value !== undefined){
          this.chain.push(( "( " + String(value) + " )"));
          return this;} else {
          return this;
      }
          },


removeLink(position) {
    if(typeof position !== "number" || position <= 0 || position > this.chain.length) {
          this.chain = [];
        throw Error('You can\'t remove incorrect link!')

    } else { this.chain.splice(position-1,1)}
    return this;
},
reverseChain() {
      this.chain = this.chain.reverse();
    return this;
},
finishChain() {
      let copyChain = this.chain
    this.chain = []
  return String(copyChain).replace(/,/g, "~~");
}

};