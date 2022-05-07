//dependency's
const http = require("http");

const { reqHandler } = require("./helper/ReqResHandle");

//app scaffolding
const app = {};

//app configuration
app.config = {
  port: 3000,
};

//server creation
app.handleServer = () => {
  const server = http.createServer(responseServer);

  server.listen(3000, () => {
    console.log("server listen at port 3000");
  });
};

//response Server
const responseServer = reqHandler

app.handleServer();
