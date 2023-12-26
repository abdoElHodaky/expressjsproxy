
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

app.get("/",(req,res)=>{
  res.json(chain)
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
