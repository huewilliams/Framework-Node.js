# learning-Node.js
Javascript runtime, Non-blocking, Single thread

![logo](./img/logo.png)

## directory structure  
### nodeJS 란?  
nodeJS가 무엇인지, 노드의 내부 구조, 비동기 구현, 싱글스레드에 대한 내용
* [REPL terminal](https://github.com/huewilliams/node.js-by-server/blob/master/what%20is%20nodeJS/velopert/REPLterminal/002.%20REPL%20Terminal.md)  
### 노드 내장 객체  
global, console, 타이머, __filename, __dirname, module, exports, process 등  
  
### 노드 내장 모듈  
os, path, url, querystring, crypto, util 등  
  
### NPM 모듈 정리  
NPM에 대한 내용과 NPM에 등록된 유용한 모듈들의 사용법과 간단한 예제  
  
### http server with node  
node를 이용한 http 웹 서버 개발 내용
* [http.createServer](https://github.com/huewilliams/node.js-by-server/blob/master/http%20server%20with%20node/velopert/create%20server/app.js)
  
### Express.js  
노드의 웹 프레임워크인 Express와 Express로 DB 연동, Passport, Multer, 웹 API 서버 등의 내용  
* [cookie example](https://github.com/huewilliams/node.js-by-server/tree/master/Express.JS/cookie/favorite)  
* [session example : file store](https://github.com/huewilliams/node.js-by-server/blob/master/Express.JS/session/file-store/session.js)  
* [jwt example](https://github.com/huewilliams/everything-of-node.js/tree/master/Express.JS/jwt/jwt%20example(mysql))
### MySQL  
MySQL CRUD 사용법과 ORM인 Sequelize 사용법 정리
  
### MongoDB  
Mongo DB CRUD 사용법과 ODM인 mongoose 사용법 정리  
* [mongoose example](https://github.com/huewilliams/node.js-by-server/tree/master/mongoDB/mongoose/user%20and%20comment)
  
### Mocha
![mocha](./img/mocha.png)  
자기가 작성한 코드를 테스트 하는 라이브러리이다. 간단한 소개와 사용법 예제를 정리해 놓았다.
* [함수 하나 테스트](https://github.com/huewilliams/everything-of-node.js/tree/master/mocha/function%20test)
* [assert 를 이용한 테스트](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/example/assert.js)
* [should 를 이용한 테스트](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/example/should.js)
* [supertest 를 이용한 REST api 테스트](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/example/supertest.js)
* [JWT api 테스트(cannabis casino)](https://github.com/huewilliams/everything-of-node.js/blob/master/mocha/jwt%20test/jwtTest.js)
  
### crawling  
노드로 크롤링을 해보자  
* html parsing
* [xml parsing](https://github.com/huewilliams/node.js-by-server/blob/master/crawling/xml%20parser/weather.js)  
### example project  
노드를 이용하여 만든 다양한 프로젝트에 대한 내용  
* [펀딩과 기부의 결합 Cause API 서버](https://github.com/huewilliams/Cause_Backend)
* [우주선 아케이드 게임 Boostrun API 서버](https://github.com/I-Answer/Boost_Run_Backend)
  
### webSocket  
ws모듈과 Socket.IO를 이용한 실시간 통신에 대한 내용  
* [WebSocket이란?](https://github.com/huewilliams/study-note/blob/master/webSocket.md) 
* [ws모듈로 웹소켓 사용하기](https://github.com/huewilliams/node.js-by-server/tree/master/webSocket/ws%20module/message%20send)  
* [Socket.IO로 웹소켓 사용하기](https://github.com/huewilliams/node.js-by-server/tree/master/webSocket/Socket.IO/send%20message)  

### solving error  
node.js를 하면서 해결한 에러 모음  
* [EADDRINUSE](https://github.com/huewilliams/node.js-by-server/blob/master/solving%20error/EADDRINUSE.md)
* [request entity too large (limit 설정방법)](https://github.com/huewilliams/everything-of-node.js/blob/master/solving%20error/request%20entity%20too%20large.md)
## Node.js란?
* NodeJS 는 구글 크롬의 자바스크립트 엔진 (V8 Engine) 에 기반해 만들어진 서버 사이드 플랫폼
* 2009년에 Ryan Dahl에 의해 개발
  
* 특징
  + 비동기 I/O 처리 / 이벤트 위주  
  Node.js 라이브러리의 모든 API는 비동기식입니다. (Non-blocking).  
  Node.js 기반 서버는 API가 실행되었을때, 데이터를 반환할때까지 기다리지 않고 다음 API 를 실행합니다.   
  그리고 이전에 실행했던 API가 결과값을 반환할 시, NodeJS의 이벤트 알림 메커니즘을 통해 결과값을 받아옵니다.  
  + 빠른 속도  
  구글 크롬의 V8 자바스크립트 엔진을 사용하여 빠른 코드 실행을 제공합니다.
  + 단일 쓰레드 / 뛰어난 확장성  
  Node.js는 이벤트 루프와 함께 단일 쓰레드 모델을 사용합니다.  
  이벤트 메커니즘은 서버가 멈추지않고 반응하도록 해주어 서버의 확장성을 키워줍니다.  
  반면,  일반적인 웹서버는 (Apache) 요청을 처리하기 위하여 제한된 쓰레드를 생성합니다.  
  Node.js 는 쓰레드를 한개만 사용하고  Apache 같은 웹서버보다 훨씬 많은 요청을 처리할 수 있습니다.  
  + 노  버퍼링  
  Node.js 어플리케이션엔 데이터 버퍼링이 없고, 데이터를 chunk로 출력합니다.  
  + 라이센스  
  Node.js 는 MIT License가 적용되어있습니다.