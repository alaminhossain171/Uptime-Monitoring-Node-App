//module scaffolding
const handlers={}

handlers.userHandler=(requestedProperties,callback)=>{
    console.log(requestedProperties.methodType);
  const acceptendMethods=['get','post','put','delete'];
  console.log(acceptendMethods.indexOf(requestedProperties.methodType));
  if(acceptendMethods.indexOf(requestedProperties.methodType)>-1){
handlers._users[requestedProperties.methodType](requestedProperties,callback);
  }
  else{
      callback(405)
  }

}
handlers._users={}
handlers._users.post=(requestedProperties,callback)=>{

};
handlers._users.get=(requestedProperties,callback)=>{
    callback(200)
}
handlers._users.put=(requestedProperties,callback)=>{
    
}
handlers._users.delete=(requestedProperties,callback)=>{
    
}

module.exports=handlers