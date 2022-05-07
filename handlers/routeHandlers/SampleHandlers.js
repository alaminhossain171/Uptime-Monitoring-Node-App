//module scaffolding
const handlers={}

handlers.sampleHandler=(requestedProperties,callback)=>{
   console.log(requestedProperties);
   callback(200,
    {
        msg:'hey its sample'
    }
    )
}

module.exports=handlers