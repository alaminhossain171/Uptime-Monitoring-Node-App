// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');


// write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to stirng
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file!');
                        }
                    });
                } else {
                    callback('Error writing to new file!');
                }
            });
        } else {
            callback('There was an error, file may already exists!');
        }
    });
};


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