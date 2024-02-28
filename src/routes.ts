import Router from "express"
import {Client} from "./User"
export const routes=Router()
//let request=require("request")
let client = new Client()
routes.get("intercept/",(req,res)=>{
  let options=req.body.options
  client.processRequest(options)
  res.send(client.result)
})
