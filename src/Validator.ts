import {Chain} from "./Chain"
export class Validator {
 private chain:Chain
 constructor(chain:Chain){
   this.chain=chain
 }
validate (){
  this.chain.confirm()
}
  
}
