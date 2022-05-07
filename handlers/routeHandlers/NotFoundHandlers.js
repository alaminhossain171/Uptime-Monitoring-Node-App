//module scaffolding
const handlers={}

handlers.notfoundHandlers=(requestedProperties,callback)=>{
 console.log(requestedProperties);
 callback(404,{
     msg:'not found'
 })
}

module.exports=handlers