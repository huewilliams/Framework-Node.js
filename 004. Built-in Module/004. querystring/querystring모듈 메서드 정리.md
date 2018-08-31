querystring 모듈 메서드 정리
===============
WHATWG 방식의 url 대신 기존 노드의 url을 사용할 때 search 부분을 사용하기 쉽게 객체로 만드는 모듈이다.
## querystring.parse(쿼리)  
url의 query 부분을 자바스크립트 객체로 분리한다.  
## querystring.stringify(객체)  
분해된 query 객체를 문자열로 다시 조립한다.