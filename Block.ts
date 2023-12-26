export class Block{
  type=""
  trans=[]
  prevhash=""
  hash=""
  timestamp=0
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
