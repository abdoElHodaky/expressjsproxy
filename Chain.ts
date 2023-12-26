export class Chain
{
 private fee=0.00001
 private addresses=[]
 static address=1
 private maxTrans=2 
 public blocks=[]
  constructor(){
      console.log(this.maxTrans)
  }
  add(b){this.blocks.push(b);}
  checkAddress(address){
     return this.addresses.includes(address)
  }
  getfee(){return this.fee;}
  getlast(){
    return this.blocks[this.blocks.length-1];
   }
   createintial()
   {
    let block=new Block([]);
     block.type="initial";
     this.add(block);
   }
   createblock(trans,hash){
     this.add(
       new Block(trans,hash));
   }
   
   contains(hash){
    let b=this.blocks.filter(b=>b.prevhash==hash);
     
   }
   
  addtrans(block,from="",to="", amount=0){
    let trans=new Trans(from,to,amount);
    block=this.getlast();
    if (block.type!="initial"){
       if(block.trans.length==this.maxTrans)
        {
          this.createblock([],block.hash);
          
        }
        
        //this.getlast().addtrans(trans)
  }
  if(block.type=="initial"){
    this.createblock([],block.hash);
   }
   
   this.getlast().addtrans(trans);
   Block.updatetransSblchash(this.getlast())
  }
 createAddress(user:string=""){
     
    let address=new Address(Chain.address.toString())
    address.setTransfer(this)
    this.addresses.push(address.address)
    Chain.address+=1
    return address 
 }

 syncT(){
      let c=this
      let _fs
      import("fs").then(fs=>_fs=fs).catch(console.log)
      _fs.exists("chain.json",exists=>{
          if(exists==false){
              _fs.writeFile("chain.json",JSON.stringify(c),{
                  encoding:"uft-8"
              },(err)=>{
                  if(err) console.log(err)
                  else console.log("done")
              })
          }
          else{
              c=JSON.parse(_fs.readFileSync("chain.json"))
              this.blocks=c.blocks
              this.addresses=c.addresses
          }
      })
 }
    
                                          }
