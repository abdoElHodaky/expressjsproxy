import {Chain} from "./Chain"
import {Trans} from "./Trans"
export class Explorer {
  private chain:Chain
  constructor (chain){
    this.chain=chain;
  }
  getTrans(txhash){
    let blocks=this.chain.blocks;
    let trans:Trans[]=[]
  //  blocks=blocks.slice(1,blocks.length)
   if(txhash!=""){
    return blocks.filter(b=>{
      b.trans.find(t=>{
        return (t.hash=txhash);
      })
    })
    }
    else{
      blocks.filter(b=>{
      b.trans.map(trans.push)})
      return trans
  }
}
  getBlock(blhash:string){
    let blocks=this.chain.blocks;
    blocks=blocks.slice(1,blocks.length);
    let d=blocks.find(b=>{
      return (b.hash==blhash);
    })
    return d
  }
  
}
