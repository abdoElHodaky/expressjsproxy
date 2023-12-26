import {Address} from "./User"
import {Block} from"./Block"
import {Trans} from "./Trans"

export class Chain
{
 private fee:number=0.00001
 private addresses:string[]=[]
 static address:number=1
 private maxTrans:number=2 
 public blocks:Block[]=[]
  constructor(){
      console.log(this.maxTrans)
      this.syncT()
  }
  add(b:Block){this.blocks.push(b);}
  checkAddress(address:string){
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
   createblock(trans:Trans[],hash:string){
     this.add(
       new Block(trans,hash));
   }
   
  addtrans(block:Block,from:string="",to:string="", amount:number=0){
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
 createAddress(user:string=""):Address {
    let _address:any;
    let address: Address
    import("crypto").then(crypt=>{

     crypt.randomBytes(56,(err,buff)=>{
     if(err)console.log(err)
     else 
     { 
         let b=Buffer.concat([buff,Buffer.from(Chain.address.toString())])
         _address=b.toString("hex")
         //console.log(_address)
        return _address
      }
     })
    }).then(addr=>{
     address=new Address(addr)
    address.setTransfer(this)
    this.addresses.push(address.address)
    Chain.address+=1
    //console.log(address.address)
    //return address
     
    }).catch(console.log)
    console.log(address)
    return address 
     
 }

 syncT(){
      let c:Chain =this
      //let _fs:any;
      import("fs").then(fs=>{

        fs.exists("chain.json",(exists:boolean)=>{
          if(exists==false){
              fs.writeFile("chain.json",JSON.stringify(c),{
                  encoding:"utf-8"
              },(err:any)=>{
                  if(err) console.log(err)
                  else console.log("done")
              })
          }
          else{
              c=JSON.parse(JSON.stringify(fs.readFileSync("chain.json")))
              this.blocks=c.blocks
              this.addresses=c.addresses
          }
        })}).catch(console.log)
 }
}
