import {Chain} from "./Chain";
export class Address {
    private transferHistory:any=[]
    private tokens=[];
    private user:string=""
    public address:string=""
    public balance:number=1000
    private transfer:Transfer
    constructor(address:string,user:string=""){
        this.address=address
        this.user=user
    }
    setTransfer(chain:Chain){
        this.transfer=new Transfer(chain)
    }
    transferTo(to: Address, amount:number){
        this.transfer.from=this
        this.transfer.to=to
        //this.transfer.amount=amount
        this.transfer.transfer(amount);
        this.transferHistory.push({
            from:this.address,
            to:to.address,
            timestamp:this.transfer.gettimestamp(),
            amount:amount
        })
    }
   /* setbalance(balance:number){
        this.balance=balance 
    }*/
    
}

export class Transfer {
 public from:Address=<Address>{}
 public to:Address=<Address>{}
 private timestamp=0
  private chain:Chain
  constructor(chain:Chain){
      this.chain=chain
  }
  transfer(amount:number){
      let chain:Chain=this.chain
      if ((chain.checkAddress(this.from.address))
          &&(chain.checkAddress(this.to.address)))
           {
            chain.addtrans(chain.getlast(),
      this.from.address,
      this.to.address,
      amount               
       )
      amount-=chain.getfee()
      this.timestamp=Date.now()
      this.from.balance-=amount
      this.to.balance+=amount
      }
      else{
          console.log("check addresses")
      }
  }
   gettimestamp (){return this.timestamp;}

    
}
