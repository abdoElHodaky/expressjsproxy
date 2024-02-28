var request=require("request")
export class Client {
    private request:any=request
    public result:any
    constructor(){
        
    }
    
    processRequest(options:RequestOptions){
        request(options, function (error, response, body) { 
         this.result=body
    }
   
    
}

export class RequestOptions{
   public url:string
   public method:string 
   public headers:{}
   public body:string
  
}

