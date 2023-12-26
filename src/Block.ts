let crypt=require("crypto")
import {Trans} from "./Trans"
export class Block{
  private type:string=""
  private trans:Trans[]=[]
  private prevhash:string=""
  private hash:string=""
  private timestamp:number=0
  constructor(trans,prevhash="",timestamp=Date.now()){
    this.prevhash=prevhash
    this.trans=trans
    this.timestamp=timestamp
    
    this.ghash()
  }
  addtrans(trans){
   
  this.trans.push(trans)
  this.ghash()
    
    
  }
  ghash(){
    let b=Buffer.from(
      this.prevhash+
      JSON.stringify(this.trans)+
      JSON.stringify(this.timestamp))
      this.hash=crypt.
      createHash("sha256")
      .update(b).digest("hex")
    
    
  }
  static updatetransSblchash(block){
   block.trans.map(t=>t.setblchash(block.hash))    
  }
}
