# Error request entity too large (limit 설정방법)
ERROR : 요청 엔티티가 너무 큼  
  
데이터를 요청할 때 클라이언트에서 body 에 담은 데이터의 크기가 너무
커서 한계(limit)을 넘어설때 발생하는 오류이다.

주로 파일을 전송할 때 파일의 크기가 커서 발생한다.

<hr>
   
SOLVE: 서버에서 body의 데이터를 처리하는 body-parser(express) 라우터의
limit 제한을 확장시켜주어야 한다. 

## limit 설정하는 방법
다음과 같이 코드에 limit 속성을 추가하여 확장시키면 된다.  
<pre>
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
</pre>

하지만 최근 body-parser 모듈이 express 프레임워크에 내장되어 있기 때문에 
body-parser 모듈을 따로 사용하지 않을 경우는 다음과 같이 추가한다.
<pre>
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
</pre>

limit 의 값을 임의로 조정하여 크기 제한을 조절할 수 있다.