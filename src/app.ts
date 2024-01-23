
import "reflect-metadata";
import application from "express"
import { json,urlencoded } from "express";
import cors from "cors";
import {Chain} from "./Chain"
import {Explorer} from "./Explorer"
import {routes} from "./routes"
//import { AppDataSource } from "./_datasource";
//import { apiv1 } from "./routes";
const app=application();
const port = process.env.PORT||3000
export const chain= new Chain()
export const explorer=new Explorer(chain)
app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())
//app.use(apiv1)
//const express = require('express');
const path = require('path')
const express=require("express")
const fs=require("fs")
app.use(express.static("/"))
app.get("/",(req,res)=>{
let data=`===============Api Docs ===========`+"\n" +
"|Type|-|params|-|route|"+"\n"+
"|Get|- |      |-|/genAddress| return generated address"+"\n"+
"|Post|-|sender_address, receiver|-|/:sender/transfer|"+"\n"+
"|Get| -|      |-|/explorer/AllTrans|"+"\n"+
`================End=================`;
  
  //console.log(fs.readFileSync("docs.txt"))
  res.send(data)
})
/*app.get("/genAddress",(req,res)=>{
  let address=chain.createAddress()
  console.log(address)
  res.json({
    address: address.address
  })
})
app.post("/:sender/createTrans",(req,res)=>{
  let sender=req.params.sender
  let receiver=req.body.receiver
  let amount=req.body.amount
  chain.syncT()
  res.status(200).end("done")
})
app.get("/explorer/AllTrans",(req,res)=>{
  res.json(explorer.getTrans())
})*/
app.use("/api",routes)
app.use("*",(error:any, req:any, res:any, next:any) => {
  console.log(error)
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  next() // (optional) invoking next middleware
})
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
