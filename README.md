# learning-Node.js
Javascript runtime, Non-blocking, Single thread

![logo](./img/logo.png)

## What is nodeJS? 

* [REPL terminal](https://github.com/huewilliams/node.js-by-server/blob/master/what%20is%20nodeJS/velopert/REPLterminal/002.%20REPL%20Terminal.md)  
### 노드 내장 객체  
global, console, 타이머, __filename, __dirname, module, exports, process 등  

### 노드 내장 모듈  
os, path, url, querystring, crypto, util 등  



## NPM 



## pure node server

웹 프레임워크 없이 node 내장 기능만을 이용하여 서버 개발

* http.createServer](https://github.com/huewilliams/node.js-by-server/blob/master/http%20server%20with%20node/velopert/create%20server/app.js)



## Express.js  

### Authentication

* [cookie example](https://github.com/huewilliams/node.js-by-server/tree/master/Express.JS/cookie/favorite)  
* [session example : file store](https://github.com/huewilliams/node.js-by-server/blob/master/Express.JS/session/file-store/session.js)  
* [jwt example](https://github.com/huewilliams/everything-of-node.js/tree/master/Express.JS/jwt/jwt%20example(mysql))
### MySQL  


### MongoDB  
* [mongoose example](https://github.com/huewilliams/node.js-by-server/tree/master/mongoDB/mongoose/user%20and%20comment)
### webSocket  

- [WebSocket이란?](https://github.com/huewilliams/study-note/blob/master/webSocket.md) 

- [ws모듈로 웹소켓 사용하기](https://github.com/huewilliams/node.js-by-server/tree/master/webSocket/ws%20module/message%20send)  

- [Socket.IO로 웹소켓 사용하기](https://github.com/huewilliams/node.js-by-server/tree/master/webSocket/Socket.IO/send%20message)  

  

## UnitTest

### Mocha

![mocha](./img/mocha.png)  
* [함수 하나 테스트](https://github.com/huewilliams/everything-of-node.js/tree/master/mocha/function%20test)

* [assert 를 이용한 테스트](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/example/assert.js)

* [should 를 이용한 테스트](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/example/should.js)

* [supertest 를 이용한 REST api 테스트](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/example/supertest.js)

* [JWT api 테스트(cannabis casino)](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/jwt%20test/jwtTest.js)

  
## crawling

* html parsing

* [xml parsing](https://github.com/huewilliams/node.js-by-server/blob/master/crawling/xml%20parser/weather.js)  

  
## example project  

* [펀딩과 기부의 결합 Cause API 서버](https://github.com/huewilliams/Cause_Backend)

* [우주선 아케이드 게임 Boostrun API 서버](https://github.com/I-Answer/Boost_Run_Backend)
  
  
## solving error  

solution for node errors.  
* [EADDRINUSE](https://github.com/huewilliams/node.js-by-server/blob/master/solving%20error/EADDRINUSE.md)
* [request entity too large (limit 설정방법)](https://github.com/huewilliams/everything-of-node.js/blob/master/solving%20error/request%20entity%20too%20large.md)