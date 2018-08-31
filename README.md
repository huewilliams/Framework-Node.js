# learning-Node.js
Javascript runtime, Non-blocking, Single thread

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
  
## 참고
* 공부중인 서적
  + Node.js 교과서
  + Do it!Node.js 프로그래밍

* 공부중인 사이트 
  + https://velopert.com 
  VELOPERT.LOG
  
* 공부 예정 서적
  + MEAN스택 입문
  + 중급 개발자를 위한 MEAN 스택 공략
  + 모던 웹 개발자를 위한 Node.js 프로그래밍
  
## REPL 터미널  
REPL 은 Read Eval Print Loop의 약자입니다.  
이는 윈도우 커맨드, 혹은 UNIX/LINUX Shell 처럼 사용자가 커맨드를 입력하면 시스템이 값을 반환하는 환경을 가르킵니다.

Node.js는 REPL 환경과 함께 제공되며 다음과 같은 기능을 수행 할 수 있습니다.

* Read – 유저의 값을 입력 받아 JavaScript 데이터 구조로 메모리에 저장합니다.  
* Eval – 데이터를 처리(Evaluate) 합니다.  
* Print – 결과값을 출력합니다.  
* Loop – Read, Eval, Print 를 유저가 Ctrl+C를 두번 눌러 종료할때까지 반복합니다.  
Node.js 의 REPL 환경은 자바스크립트 코드를 테스팅 및 디버깅할때 유용하게 사용됩니다.  
  
  
### REPL 시작하기
REPL 은 쉘/콘솔에 파라미터 없이 node 를 실행하여 실행 할 수 있습니다.  
<pre>$ node
></pre>
  
* 간단한 연산식 (+,-,\*,/,%) 등을 사용할 수 있습니다.  
* 다른 스크립트처럼, 변수에 값을 저장하고 나중에 다시 출력 할 수 있습니다.  
* Multi-Line 표현식 사용({}스코프를 사용할 수 있다.)
* Underscore ( _ ) 변수
밑줄 _ 변수는 최근 결과값을 지칭합니다.  
<pre>$ node
> var x = 10;
undefined
> var y = 5;
undefined
> x + y;
15
> var sum = _
undefined
> console.log(sum)
15
undefined
> </pre>

### REPL 커맨드
* Ctrl+C – 현재 명령어를 종료합니다.
* Ctrl+C (2번)  – Node REPL 을 종료합니다.
* Ctrl+D – Node REPL을 종료합니다.
* 위/아래 키 – 명령어 히스토리를 탐색하고 이전 명령어를 수정합니다.
* Tab – 현재 입력란에 쓴 값으로 시작하는 명령어 / 변수 목록을 확인합니다.
* .help – 모든 커맨드 목록을 확인합니다.
* .break – 멀티 라인 표현식 입력 도중 입력을 종료합니다.
* .clear – .break 와 같습니다.
* .save filename – 현재 Node REPL 세션을 파일로 저장합니다.
* .load filename – Node REPL 세션을 파일에서 불러옵니다.
  
  
## NPM
Node Package Manager (NPM) 은 두가지의 주요 기능을 지니고 있습니다.  
* NPMSearch(https://npmsearch.com) 에서 탐색 가능한 Node.js 패키지/모듈 저장소
* Node.js 패키지 설치 및 버전 / 호환성 관리를 할 수 있는 커맨드라인 유틸리티  

npm이 제대로 설치되있는지 확인하는 명령어  
<pre>$ npm --version
3.7.1</pre>  

npm 버전이 구버전이라면 다음 명령어로 쉽게 최신버전으로 업데이트하는 명령어
<pre>$ sudo npm install npm -g
npm http GET https://registry.npmjs.org/npm
npm http 200 https://registry.npmjs.org/npm
npm http GET https://registry.npmjs.org/npm/-/npm-3.7.1.tgz
npm http 200 https://registry.npmjs.org/npm/-/npm-3.7.1.tgz
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
npm@3.7.1 /usr/local/lib/node_modules/npm </pre>
  
### NPM을 사용하여 모듈 설치하기
<pre>npm install <모듈 이름> </pre>
예) express 모듈 설치  
<pre> $ npm install express </pre>
모듈 사용
<pre> var express = require('express') </pre>  
  
### 글로벌 vs 로컬 모듈 설치
기본적으로는, npm은 모듈을 로컬모드로 설치합니다.   
로컬모드란건, 패키지를 명령어를 실행한 디렉토리안에 있는 node_modules에 설치하는것을 의미합니다.  
  
글로벌 설치는 시스템 디렉토리에 설치하는것을 의미합니다.  
예) 글로벌 모드로 express 설치
<pre> $ sudo npm install express -g </pre>
현재 경로가 아닌 /usr/lib/node_modules 에 모듈을 설치합니다.  
글로벌 모드로 설치하였을때는, node 어플리케이션에서 바로 require 할 수 없습니다.  
다음처럼 npm link 명령어를 입력하고나면 해당 모듈을 불러올 수 있습니다.  
<pre>$ npm install -g express
$ cd [local path]/project
$ npm link express</pre>
  
### pakage.jsonCallback function은, 특정 함수에 매개변수로서 전달된 함수를 지칭합니다.   
 그 Callback function은 그 함수를 전달받은 함수 안에서 호출되게 됩니다.  
   jQuery에서 사용된 callback function 예제
   pre> click 메소드의 인수가 바로 Callback 함수입니다.
$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
}); </pre>
package.json 은 노드 어플리케이션 / 모듈의 경로에 위치해 있으며 패키지의 속성을 정의합니다.  
예) express로 프로젝트를 생성했을때 생성되는 package.json 입니다.  
<pre>{
  "name": "myapp",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}</pre>
이 파일은 프로젝트가 의존하는 모듈과 모듈버전의 정보를 담고있습니다.
pakage.json에 대한 자세한 정보 : http://programmingsummaries.tistory.com/385
  
### 모듈 제거 
다음 명령어로 설치된 모듈을 제거 할 수 있습니다.  
<pre> $ npm uninstall express </pre>
  
### 모듈 업데이트  
다음 명령어로 모듈을 업데이트 할 수 있습니다.  
<pre> $ npm update express </pre>
  
### 모듈 검색  
다음 명령어로 모듈을 검색 할 수 있습니다.
<pre> $ npm search express </pre>
이 명령어는 처음 이용 할 때 메모리를 굉장히 많이 잡아먹습니다.
  
   
## Function
자바스크립트에서는, 함수(function)는 일급 객체입니다.  
즉, 함수는 Object 타입이며 다른 일급객체와 똑같이 사용 될 수 있습니다. 
function 자체가 객체이므로 변수안에 담을 수 도 있고 인수로서 다른 함수에 전달 해 줄수도있고, 함수에서 만들어질수도있고 반환 될수도있습니다. 
  
### Callback Function  
Callback function은, 특정 함수에 매개변수로서 전달된 함수를 지칭합니다.   
 그 Callback function은 그 함수를 전달받은 함수 안에서 호출되게 됩니다.  
 예)  jQuery에서 사용된 callback function 예제
 <pre> click 메소드의 인수가 바로 Callback 함수입니다.
$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
}); </pre>
  
### Callback Function를 사용하는 이유
callback 함수를 사용하여 이렇게 프로그램의 흐름을 끊지 않음으로서,  
Non-Blocking 코드를 사용하는 서버는 Blocking 코드를 사용하는 서버보다  
더 많은 양의 요청을 빠르게 처리 할 수 있게됩니다.  
  
  
## Event Loop
Node.js 에선 Event를 매우 많이 사용하고, 이 때문에 다른 비슷한 기술들보다 훨씬 빠른 속도를 자랑합니다.  
Node.js 기반으로 만들어진 서버가 가동되면, 변수들을 initialize 하고, 함수를 선언하고 이벤트가 일어날때까지 기다립니다.
  
이벤트 위주 (Event-Driven) 어플리케이션에서는, 이벤트를 대기하는 메인 루프가 있습니다.
그리고 이벤트가 감지되었을시 Callback함수를 호출합니다.  
  
이벤트가 콜백과 비슷해 보일 수 도 있습니다.  
차이점은, 콜백함수는 비동기식 함수에서 결과를 반환할때 호출되지만, 이벤트핸들링은 옵저버 패턴에 의해 작동됩니다.  
  
옵저버(옵서버)패턴은 디자인 패턴 중 하나입니다.  
옵서버에 대한 자세한 내용 : https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4  
  
이벤트를 대기하는 (EventListeners)  함수들이 옵저버 역할을 합니다.  
옵저버들이 이벤트를 기다리다가, 이벤트가 실행되면 이벤트를 처리하는 함수가 실행됩니다.   
  
Node.js 에는 events 모듈과 EventEmitter 클래스가 내장되어있는데요,  
이를 사용하여 이벤트와 이벤트핸들러를 연동(bind) 시킬 수 있습니다   
이벤트 핸들러와 이벤트를 연동  
<pre>// events 모듈 사용
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// event와 EventHandler 를 연동(bind)
// eventName 은 임의로 설정 가능
eventEmitter.on('eventName', eventHandler);</pre>
프로그램안에서 이벤트를 발생시킬 때  
<pre> eventEmitter.emit('eventName'); </pre>
  
  
## Use Express  
NodeJS의 웹프레임워크를 사용하면 간편하게 웹서버를 구축 할 수 있습니다.  
### 1. 디렉토리 구조 
<pre>
express_tutorial/
├── package.json
├── public
│   └── css
│   └── style.css
├── router
│   └── main.js
├── server.js
└── views
 ├── about.html
 └── index.html
 </pre>  
### 2. package.json 파일  
프로젝트의 이름, 버전, 의존패키지 리스트 등 정보들에 대한 정보를 담고있는 파일입니다.
<pre>
{
  "name": "express-tutorial",
  "version": "1.0.0",
  "dependencies": 
  {
    "express": "~4.13.1",
    "ejs": "~2.4.1"    
  }
}
</pre>
package.json 을 생성 하셨으면 다음 명령어로 의존패키지들을 설치하세요.  
<pre> $ npm install </pre>
### 3. Express 서버 생성
<pre> 
var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})
</pre>
### 4. Router로 Request 처리하기
간단한 router를 작성
<pre>
app.get('/', function(req, res){
    res.send('Hello World');
});
</pre>
router 라는 폴더를 만들고 그 안에 main.js 를 생성해주세요.  
<pre>
module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}
</pre>
### 5. HTML 페이지를 띄우기  
views/ 디렉토리를 만들고, 그 안에 index.html 과 about.html 을 생성해주세요.  
index.html  
``` html
<html>
  <head>
    <title>Main</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    Hey, this is index page
  </body>
</html>
```

about.html  
```html
<html>
  <head>
    <title>About</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    About... what?
  </body>
</html>
```
server.js 를 업데이트  
<pre>
var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});
</pre>
### 정적 파일 (Static files) 다루기  
정적 파일이란? HTML 에서 사용되는 .js 파일, css 파일, image 파일 등을 가르킵니다.  
서버에서 정적파일을 다루기 위해선, express.static() 메소드를 사용하면 됩니다.  
public/css 디렉토리를 만드시고 그 안에 style.css 파일을 생성해주세요.  
<pre>
body{
	background-color: black;
	color: white;
}
</pre>
그 후, server.js 의 11 번줄 아래에 해당 코드를 추가해주세요  
<pre>
app.use(express.static('public'));
</pre>
  
  
## Express - EJS  
### 디렉토리 구조  
<pre>
008. express EJS/
├── data
│   └── user.json
├── node_modules
├── package.json
├── public
│   └── css
│       └── style.css
├── router
│   └── main.js
├── server.js
└── views
    ├── body.ejs
    ├── header.ejs
    └── index.ejs
</pre>
### 1. 의존 모듈 추가
EJS엔진과 추가적으로 RESTful API,  그리고 세션을 다룰 것이므로 넣어줘야 할 의존 모듈들이 있습니다.  
   * body-parser – POST 데이터 처리  
   * express-session – 세션 관리  
Express 의 이전 버전에서는 cookie-parser 모듈도 불러와야했지만,  
이젠 express-session 모듈이 직접 쿠키에 접근하므로 cookie-parser 를 더이상 사용 할 필요가 없습니다.  
  
session 설정  
<pre>
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));
</pre>
session의 속성  
* secret – 쿠키를 임의로 변조하는것을 방지하기 위한 sign 값 입니다.  
           원하는 값을 넣으면 됩니다.  
* resave – 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다.  
           express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.  
* saveUninitialized – uninitialized 세션이란 새로 생겼지만 변경되지 않은 세션을 의미합니다.  
                      Documentation에서 이 값을 true로 설정하는것을 권장합니다.  
  		       
### 2. EJS 템플릿 엔진
템플릿 엔진이란, 템플릿을 읽어 엔진의 문법과 설정에 따라서 파일을 HTML 형식으로 변환시키는 모듈입니다. 
Express 에서 사용하는 인기있는 Jade 템플릿 엔진은 기존의 HTML에 비해 작성법이 완전 다른데,   
그에 비해 EJS는 똑같은 HTML에서 <% %> 를 사용하여 서버의 데이터를 사용하거나 코드를 실행 할 수 있습니다.  

EJS에서는 두가지만 알면 됩니다.  

* <% 자바스크립트 코드 %>  
* <% 출력 할 자바스크립트 객체 %>  
  
<strong>VIEW로 데이터 넘기기</strong>
router/main.js   
<pre>
module.exports = function(app, fs)
{
     app.get('/',function(req,res){
         res.render('index', {
             title: "MY HOMEPAGE",
             length: 5
         })
     });
}
</pre>
JSON 데이터를 render 메소드의 두번째 인자로 전달함으로서 페이지에서 데이터를 사용가능하게됩니다.  
  
<strong>VIEW 에서 데이터 접근 및 루프코드 실행</strong> views/index.ejs  
``` html
<html>
  <head>
  <title><%= title %></title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <h1>Loop it!</h1>
    <ul>
        <% for(var i=0; i<length; i++){ %>
            <li>
                <%= "LOOP" + i %>
            </li>
        <% } %>
    </ul>
  </body>
</html>
```
Line 3 : 라우터에서 title 받아와서 출력합니다.
Line 9~13: 루프문입니다. 라우터에서 length를 받아와 루프문에 사용합니다.  
  
<strong>EJS 분할하기</strong>  
PHP나 Rails에서 처럼, EJS에서도 코드를 여러 파일로 분리하고 불러와서 사용 할 수 있답니다.  
파일을 불러올땐 다음 코드를 사용합니다.
<pre> <% include FILENAME %> </pre>  
index.ejs 파일의 head 와 body 를 따로 파일로 저장해서 불러와보겠습니다.  
header.ejs 파일  
``` html
 <title>
     <%= title %>
 </title>
 <link rel="stylesheet" type="text/css" href="css/style.css">
 <script>
    console.log("HelloWorld");
 </script>
```
body.ejs 파일  
``` html
<h1>Loop it!</h1>
<ul>
    <% for(var i=0; i<length; i++){ %>
        <li>
            <%= "LOOP" + i %>
        </li>
    <% } %>
</ul>
```
이렇게 파일이 준비됐다면, index.ejs 를 다음과 같이 수정하면 됩니다.  
``` html
<html>
  <head>
    <% include ./header.ejs %>
  </head>
  <body>
    <% include ./body.ejs %>
  </body>
</html>
```
  
  
## RESTful API  
REST 는 Representational State Transfer 의 약자로서,  
월드와이드웹(www) 와 같은 하이퍼미디어 시스템을 위한 소프트웨어 아키텍쳐 중 하나의 형식입니다.  
REST 서버는 클라이언트로 하여금 HTTP 프로토콜을 사용해 서버의 정보에 접근 및 변경을 가능케 합니다.  
여기서 정보는 text, xml, json 등 형식으로 제공되는데, 요즘 트렌드는 json입니다.  
  
### HTTP 메소드  
HTTP/1.1 에서 제공되는 메소드는  여러개가 있는데요,  
REST 기반 아키텍쳐에서 자주 사용되는 4가지 메소드는 다음과 같습니다.  
  
* GET – 조회  
* PUT –  생성 및 업데이트  
* DELETE – 제거  
* POST – 생성  
  
### 데이터베이스 생성  
JSON 기반의 사용자 데이터베이스를 만들어보겠습니다.  
data 폴더를 만들고 그 안에 user.json 파일을 생성해주세요  
<pre>
{
    "first_user": {
        "password": "first_pass",
        "name": "abet"
    },
    "second_user":{
        "password": "second_pass",
        "name": "betty"
    }
}
</pre>
### 첫번째 API: GET /list  
모든 유저 리스트를 출력하는 GET API 를 작성해보겠습니다.  
우선, user.json 파일을 읽어야 하므로, fs 모듈을 사용합니다.  
<pre>
module.exports = function(app, fs)
{
     app.get('/',function(req,res){
         res.render('index', {
             title: "MY HOMEPAGE",
             length: 5
         })
     });
     
    app.get('/list', function (req, res) {
       fs.readFile( __dirname + "/../data/" + "user.json", 'utf8', function (err, data) {
           console.log( data );
           res.end( data );
       });
    })
}
</pre>
__dirname 은 현재 모듈의 위치를 나타냅니다.
router 모듈은 router 폴더에 들어있으니, data 폴더에 접근하려면  
/../ 를 앞부분에 붙여서 먼저 상위폴더로 접근해야합니다.  
  
### 두번째 API:  GET /getUser/:username  
특정 유저 username의 디테일한 정보를 가져오는 GET API 를 작성해보도록 하겠습니다.  
<strong> append router/main.js </strong>  
<pre>
app.get('/getUser/:username', function(req, res){
       fs.readFile( __dirname + "/../data/user.json", 'utf8', function (err, data) {
            var users = JSON.parse(data);
            res.json(users[req.params.username]);
    });
});
</pre>
파일을 읽은후, 유저 아이디를 찾아서 출력해줍니다.  
유저를 찾으면 유저 데이터를 출력하고 유저가 없다면 {} 을 출력하게 됩니다.  
fs.readFile()로 파일을 읽었을 시엔 텍스트 형태로읽어지기 때문에, JSON.parse()  해야합니다.   
  
### 세번째 API: POST addUser/:username  
body: { “password”: “_____”, “name”: “_____” }  
<pre> 
app.post('/addUser/:username', function(req, res){

        var result = {  };
        var username = req.params.username;

        // CHECK REQ VALIDITY
        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        // LOAD DATA & CHECK DUPLICATION
        fs.readFile( __dirname + "/../data/user.json", 'utf8',  function(err, data){
            var users = JSON.parse(data);
            if(users[username]){
                // DUPLICATION FOUND
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }

            // ADD TO DATA
            users[username] = req.body;

            // SAVE DATA
            fs.writeFile(__dirname + "/../data/user.json",
                         JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                result = {"success": 1};
                res.json(result);
            })
        })
    });
</pre>
JSON 형태가 INVALID 하다면 오류를 반환하고, VALID 하다면 파일을 열어서 username의 중복성을 확인 후  
JSON 데이터에 추가하여 다시 저장합니다.  
34번줄에서 stringify(users, null, 2) 은 JSON 의 pretty-print 를 위함 입니다.   
  
### 네번째 API: PUT updateUser/:username  
body: { “password”: “_____”, “name”: “_____” }  
이 API는 POST API와 비슷합니다.  
사용자 정보를 업데이트 하는 API 이며, PUT 메소드를 사용합니다.  
PUT API 는 idempotent 해야 합니다, 쉽게말하자면 즉 요청을 몇번 수행하더라도, 같은 결과를 보장해야합니다.  
<pre>
app.put('/updateUser/:username', function(req, res){

        var result = {  };
        var username = req.params.username;

        // CHECK REQ VALIDITY
        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        // LOAD DATA
        fs.readFile( __dirname + "/../data/user.json", 'utf8',  function(err, data){
            var users = JSON.parse(data);
            // ADD/MODIFY DATA
            users[username] = req.body;

            // SAVE DATA
            fs.writeFile(__dirname + "/../data/user.json",
                         JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                result = {"success": 1};
                res.json(result);
            })
        })
    });
</pre>
  
### 마지막 API: DELETE deleteUser/:username  
유저를 데이터에서 삭제하는 API 입니다. DELETE 메소드를 사용합니다.  
<pre>
 app.delete('/deleteUser/:username', function(req, res){
        var result = { };
        //LOAD DATA
        fs.readFile(__dirname + "/../data/user.json", "utf8", function(err, data){
            var users = JSON.parse(data);

            // IF NOT FOUND
            if(!users[req.params.username]){
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            delete users[req.params.username];
            fs.writeFile(__dirname + "/../data/user.json",
                         JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                result["success"] = 1;
                res.json(result);
                return;
            })
        })

    })
</pre>    
