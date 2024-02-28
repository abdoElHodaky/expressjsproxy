var request=require("request")
export class Client {
    private request:any=request
    constructor(){
        
    }
    
    processRequest(url:string,res){
        request(url, function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      console.log(body); 
      res.send(body); 
     } 
    }
   
    
}

