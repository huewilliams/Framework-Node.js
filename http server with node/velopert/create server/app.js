/*
<필요한 모듈 import 하기>
    어플리케이션에 필요한 모듈을 불러올 땐 require 명령을 사용한다.
    다음 코드는 HTTP 모듈을 불러오고 반환되는 HTTP 인스턴스를 http 변수에 저장한다.
*/
var http = require('http');
/*
<서버 생성하기>
    http 인스턴스를 사용하여 http.createServer()메소드를 실행한다.
    그리고 listen 메소드를 사용하여 포트 8081과 bind 해준다.
    http.createServer()의 매개변수로는 request 와 response 를 매개변수로 가지고 있는 함수를 넣어준다.
*/
http.createServer(function(request,response){
    /*
        HTTP 헤더 전송
        HTTP status : 200 : OK
        Content type : text/plain
    */
    response.writeHead(200, {'Content-Type':'text/plain'});
    /*
        Response body 를 "Hello World"로 설정
    */
    response.end("Hello World\n")
}).listen(8081);

console.log("Server running");
/*
    서버 실행
    cmd : $ node app.js
    browser : localhost:8081
*/