const { sampleHandler } = require("./handlers/routeHandlers/SampleHandlers");
const { userHandler } = require("./handlers/routeHandlers/userHandler");

const routes={
    sample:sampleHandler,
    user:userHandler
    
}
module.exports=routes