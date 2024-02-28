var request=require("request")
export class Client {
    private request:any=request
    public result:any
    constructor(){
        
    }
    
    processRequest(options){
        request(options, function (error, response, body) { 
         this.result=body
    }
   
    
}

