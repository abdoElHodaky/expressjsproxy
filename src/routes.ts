import Router from "express"
import {chain,explorer} from "./app"
import {Address} from "./User"
export const routes=Router()

routes.get("/genAddress",(req,res)=>{
  let address=chain.createAddress()
  console.log(address)
  res.json({
    address: address
  })
})

routes.post("/createTrans",(req,res)=>{
  let sender=req.body.sender
  let receiver=req.body.receiver
  let amount:number=req.body.amount
  //let addsender=new Address(sender)
 // addsender.
  sender.setTransfer(chain)
  receiver.setTransfer(chain)
  sender.transferTo(receiver,amount)
  chain.syncT()
  res.status(200).json(
    [...sender.transferHistory.reverse()]
  )
})

routes.get("/explorer/AllTrans",(req,res)=>{
  res.json(explorer.getTrans())
})

routes.post("/confirm",(req,res)=>{
  if(chain.pending_trans.length>0)
    chain.confirm()
    res.end("confirmed)
  else
    res.end("")
  
})
