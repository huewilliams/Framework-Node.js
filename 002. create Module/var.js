const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = {
    odd,
    even
};
// 다른 파일에서 이 파일을 불러오면 module.exports 에 대입된 값을 사용할 수 있다.
// 002. create Module 의 index.js를 실행했을 떄 변경전의 var.js와 같은 결과를 얻을 수 있다.