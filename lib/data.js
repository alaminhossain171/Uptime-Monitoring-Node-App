const fs=require('fs');
const path=require('path');

const lib={};

lib.basedir=path.join(__dirname,'../.data/');


lib.create=function(dir,file,data,callback){
    fs.open(lib.basedir+dir+'/'+file+'.json','wx',function(err,fileDescriptor){
if(!err && fileDescriptor){
const stingData=JSON.stringify(data);
fs.writeFile(fileDescriptor,stingData,function(err){
    if(!err){
fs.close(fileDescriptor,(error)=>{
    if(!error){
        callback(false)
    }
    else{
        callback('Error closing the new file!')
    }
})
    }
    else{
        callback('error writing to new file')
    }
})
}
else{
    callback('could not create new file, it may already exits!')
}
    })
}

lib.read=(dir,file,callback)=>{
    fs.readFile(lib.basedir+dir+'/'+file+'.json','utf8',(err,data)=>{
        callback(err,data);
    })
}

lib.update=(dir,file,data,callback)=>{
    fs.open(lib.basedir+dir+'/'+file+'.json','r+',(err,fileDescriptor)=>{
        if(!err && fileDescriptor){
const stingData=JSON.stringify(data)
fs.ftruncate(fileDescriptor,(err)=>{
    if(!err){
fs.writeFile(fileDescriptor,stingData,(err)=>{
    if(!err){
fs.close(fileDescriptor,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        callback(false)
    }
})
    }
})
    }
    else{
       callback('error truncating file');
    }
})
        }
        else{
            console.log('error updating, file may not exit');
        }
    })
}


lib.delete=(dir,file,callback)=>{
    fs.unlink(lib.basedir+dir+'/'+file+'.json',(err)=>{
      if(!err){
          callback(false)
      }
      else{
          callback('error deleting file')
      }
    }) 
}
module.exports=lib