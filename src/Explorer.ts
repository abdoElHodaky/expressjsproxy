import {Chain} from "./Chain"

export class Explorer {
  private chain:Chain
  constructor (chain){
    this.chain=chain;
  }
  getTrans(txhash){
    let blocks=this.chain.blocks;
  //  blocks=blocks.slice(1,blocks.length)
    return blocks.filter(b=>{
      b.trans.find(t=>{
        return (t.hash=txhash);
      })
    })
  }
  getBlock(blhash){
    let blocks=this.chain.blocks;
    blocks=blocks.slice(1,blocks.length);
    let d=blocks.find(b=>{
      return (b.hash==blhash);
    })
    return d
  }
  
}
