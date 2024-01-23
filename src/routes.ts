import Router from "express"

let routes=Router()

routes.get("/genAddress",(req,res)=>{
  let address=chain.createAddress()
  console.log(address)
  res.json({
    address: address.address
  })
})
routes.post("/:sender/createTrans",(req,res)=>{
  let sender=req.params.sender
  let receiver=req.body.receiver
  let amount=req.body.amount
  chain.syncT()
  res.status(200).end("done")
})
app.get("/explorer/AllTrans",(req,res)=>{
  res.json(explorer.getTrans())
})
exports=routes
