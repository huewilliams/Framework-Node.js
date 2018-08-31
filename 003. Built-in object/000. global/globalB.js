const A = require('./globalA');

global.message = '안녕하세요';
// global 객체가 전역객체 임을 이용하여 간단한 데이터를 공유할 때 사용하였다.

console.log(A());
// global 객체는 전역객체 이므로 모든 파일에서 접근할 수 있다.
// 노드에는 DOM 과 BOM 이 없어 document 와 window 객체를 사용할 수 없다.
// REPL 에서 global 을 입력하면 global 객체 안의 속성을 확인 할 수 있다.