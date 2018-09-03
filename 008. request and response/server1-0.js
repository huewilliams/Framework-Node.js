const http = require('http');

http.createServer((req,res) =>{
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080);
server.on('listening', ()=>{
    console.log('서버가 8080번 포트에서 대기중입니다.');
});
server.on('error',()=>{
    console.error(error);
});