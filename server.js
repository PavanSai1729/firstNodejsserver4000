const http = require("http");

const server = http.createServer((req, res)=>{

    console.log("Pavan Sai");
    
    //process.exit();
});

server.listen(4000, ()=>{
    console.log("server is running on port 4000");
});