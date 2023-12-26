export class Trans{
  private from=""
  private to=""
  private amount=0
  private hash="" 
  private timestamp=0
  private blchash=""
  constructor(from,to,amount){
    this.from=from
    this.to=to
    this.amount=amount 
    this.timestamp=Date.now()
    this.ghash()
  }
  ghash(){
      let b=Buffer.from(
      JSON.stringify(this.timestamp))
      this.hash=crypt.
      createHash("sha256")
      .update(b).digest("hex")
    
  }
  gethash(){return this.hash;}
  setblchash(hash){this.blchash=hash;}
  
}
