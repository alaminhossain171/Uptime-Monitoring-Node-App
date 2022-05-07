const { StringDecoder } = require("string_decoder");
const url = require("url");
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
// console.log(req.headers);
const decoder=new StringDecoder('utf-8');
let realData='';
req.on('data',(buffer)=>{
realData +=decoder.write(buffer)
})
req.on('end',()=>{
    realData +=decoder.end();
    console.log(realData);
    res.end('hello nodejs')
})
   
}
module.exports=handeler;