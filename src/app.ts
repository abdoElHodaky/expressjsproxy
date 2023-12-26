
import "reflect-metadata";
import application from "express"
import { json,urlencoded } from "express";
import cors from "cors";
import {Chain} from "./Chain"
//import { AppDataSource } from "./_datasource";
//import { apiv1 } from "./routes";
const app=application();
const port = process.env.PORT||3000
const chain= new Chain()
app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())
//app.use(apiv1)
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.get("/",(req,res)=>{
  res.json(chain)
})
app.post("/:sender/createTrans",(req,res)=>{
  let sender=req.params.sender
  let receiver=req.body.receiver
  let amount=req.body.amount
  res.json([sender, receiver, amount])
})
app.use((error:any, req:any, res:any, next:any) => {
  console.log(error)
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  next() // (optional) invoking next middleware
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
