process 객체 정리
===============
process 객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다.  

## process.version  
설치된 노드의 버전을 반환
  
## process.arch  
프로세서 아키텍쳐의 정보를 반환  

## process.platform  
운영체제 플랫폼의 정보를 반환  

## process.pid  
현재 프로세스의 아이디를 반환  
프로세스를 여러 개 가질 때 구분할 수 있다.  

## process.uptime()  
프로세스가 시작된 후 흐른 시간이며 단위는 초 이다.  

## process.execPath()  
노드가 설치된 경로를 반환한다.  

## process.cwd()  
현재 프로세스가 실행되는 위치를 반환한다.  

## process.cpuUsage()  
현재 cpu 사용량을 반환한다.  

## process.env()  
환경변수를 반환한다.  
process.env는 서비스의 중요한 키를 저장하는 공간으로도 사용된다.  
서버나 데이터베이스에 비밀번호와 각종 API키를 직접 입력하는 것은 위험하기 때문이다.  
따라서 중요한 비밀번호는 다음과 같이 사용한다.  
<pre>
const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;
</pre>
그 후 process.env에 직접 SECRET_ID와 SECRET_CODE를 넣어 사용한다.  

## process.nextTick(콜백)  
이벤트 루프가 다른 콜백 함수들 보다 nextTick의 콜백 함수를 우선으로 처리하도록 한다.  
마이크로태스크(microtask)라고 부른다.

## process.exit(코드)  
실행중인 노드 프로세스를 종료합니다.  
서버에 이 함수를 사용하면 서버가 멈추므로 서버에는 거의 사용하지 않습니다.  
process.exit 메서드는 인자로 코드 번호를 줄 수 있다.  
인자를 주지 않거나 0이면 정상 종료를 뜻하고, 만약 에러가 발생하여 종효하는 경우에는 1을 넣어준다.  