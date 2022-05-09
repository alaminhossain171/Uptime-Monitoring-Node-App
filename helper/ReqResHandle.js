const { StringDecoder } = require("string_decoder");
const url = require("url");
const { notfoundHandlers } = require("../handlers/routeHandlers/NotFoundHandlers");
const routes = require("../route");

const handeler={

}

handeler.reqHandler=(req,res)=>{
    const parseUrl=url.parse(req.url,true);
    const path=parseUrl.pathname
   const treamPath=path.replace(/^\/+|\/+$/g,'')
//    console.log(treamPath);
const methodType=req.method.toLowerCase();
// console.log(methodType);
const queryStringObject=parseUrl.query;
const headerObject=req.headers;
// console.log(req.headers);

const requestProperties={
    parseUrl,
    path,
    treamPath,
    methodType,
    queryStringObject,
    headerObject
}


const decoder=new StringDecoder('utf-8');


let realData='';
const choosenHandler=routes[treamPath]?routes[treamPath]:notfoundHandlers;



req.on('data',(buffer)=>{
realData +=decoder.write(buffer)
})
req.on('end',()=>{
    realData +=decoder.end();
    choosenHandler(requestProperties,(statusCode,payload)=>{
        statusCode=typeof statusCode==='number'?statusCode:500;
        payload= typeof payload==="object"?payload:{};
        const payloadString=JSON.stringify(payload);
        res.setHeader('Content-Type','application/json')
        res.writeHead(statusCode);
        
        res.end(payloadString)
    })
   
})
   
}
module.exports=handeler;