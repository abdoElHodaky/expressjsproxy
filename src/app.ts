
import "reflect-metadata";
import application from "express"
import { json,urlencoded } from "express";
import cors from "cors";

import {routes} from "./routes"
const app=application();
const port = process.env.PORT||3000

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
  res.redirect("/docs")
})

app.use("/proxy/",routes)
app.use("*",(error:any, req:any, res:any, next:any) => {
  console.log(error)
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  next() // (optional) invoking next middleware
})
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
