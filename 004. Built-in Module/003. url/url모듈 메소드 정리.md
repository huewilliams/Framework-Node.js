url모듈 메소드 정리
===============
인터넷 주소를 쉽게 조작하도록 도와주는 모듈이다.  
url 처리 방식에는 두 가지가 있는데,  
노드 버전 7에서 추가된 WHATWG(웹 표준을 정하는 단체이름)방식의 url과 노드 전통 방식의 url이 있다.  
* 노드의 주소체계  
protocol - auth - hostname, port -pathname, query - hash  
* WHATWG 방식의 주소체계  
protocol(oringin) - username - password - hostname, port(origin) - pathname , search - hash  
  
WHATWG 방식은 search 부분을 searchParams 라는 특수한 객체로 반환하므로 유용하다.  
search 부분은 보통 주소를 통해 데이터를 전달할 때 사용한다.  
search는 물음표(?)로 시작하고, 그 뒤에 키=값 형식으로 데이터를 전달한다.  
여러 키가 있을 경우에는 &로 구분한다.  
## WHATWG 방식의 url  
url 모듈 안에 생성자가 있다.  
이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리된다.  
이 방식이 WHATWG의 url이다.  
WHATWG 에만 있는 username, password, origin, searchParams 속성이 존재한다.  
  
[WHATWG 방식 사용법]
<pre>
const url = require('url');
const URL = url.URL;
const myURL = new URL('url주소');
</pre>

## 기존 노드 방식에서 사용하는 메서드   
* url.parse(주소)  
주소를 분해한다.  
WHATWG 방식이랑 비교하면 username 과 password 대신 auth 속성이 있고, searchParams 대신 query가 있다.   
  
  
* url.format(객체)  
WHATWG 방식과 기존 노드의 url 모두 사용가능하다.  
분해되었던 url객체를 원래 상태로 조립한다.  
  
## searchParams 객체의 메서드(WHATWG)  
URL 생성자를 통해 만든 주소 객체안에는 searchParams 객체가 있다.  
이 객체는 search 부분을 조작하는 다양한 메서드를 지원한다.  
query 보다 seachParams가 유용한 이유는 query의 경우 querystring 모듈을 한 번 더 사용해야 하기 때문이다.  
* getAll(키)  
키에 해당하는 모든 값을 가져온다.  
* get(키)  
키에 해당하는 첫 번째 값만 가져온다.  
* has(키)  
해당 키가 있는지 없는지를 검사한다.  
* keys()  
searchParams의 모든 키를 반복기 객체로 가져온다.  
* valuse()  
searchParams의 모든 값을 반복기 객체로 가져온다.  
* append(키,값)  
해당 키를 추가한다.  
같은 키의 값이 있다면 유지하고 하나 더 추가한다.  
* set(키,값)  
append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가한다.  
* delete(키)  
해당 키를 제거한다.  
* toString()  
조작한 searchParams 객체를 다시 문자열로 만든다.  
이 문자열을 seach에 대입하면 주소 객체에 반영된다.  