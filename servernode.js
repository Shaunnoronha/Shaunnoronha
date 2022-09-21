const http=require('http');

const fun=(request,response)=>{
    console.log('hello i am a server');
    //console.log(request);
    response.end('hello from server');

};
const server=http.createServer(fun);

console.log(server);

server.listen(5000);