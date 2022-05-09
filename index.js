//dependency's
const http = require("http");

const { reqHandler } = require("./helper/ReqResHandle");
const environment=require('./helper/environment');
const data=require('./lib/data')
//app scaffolding
const app = {};


// data.create('test','newFile',{name:'Bangladesh',language:'Bangla'},(err)=>{
//   console.log('error was ',err);
// })

// data.update('test','newFile',{name:'India',language:'Hindi'},(err)=>{
//   console.log('error was ',err);
// })

// data.read('test','newFile',(err,data)=>{
//   console.log(err,data);
// })

// data.delete('test','newFile',(err)=>{
//   console.log(err);
// })

//app configuration
// app.config = {
//   port: 3000,
// };

//server creation
app.handleServer = () => {
  const server = http.createServer(app.responseServer);

  server.listen(environment.port, () => {
    console.log("server listen at port",environment.port);
  });
};

//response Server
app.responseServer = reqHandler

app.handleServer();
