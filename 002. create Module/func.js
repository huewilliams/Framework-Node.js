const {odd, even} = require('./var');
// require 함수 안에 불러올 모듈의 경로를 적어준다.
// 파일 경로에서 js 와 json 과 같은 확장자는 생략할 수 있다.
// var.js 의 module.exports 에 담겨있던 객체를 불러와 사용하고 있다.

function checkOddOrEven(num) {
    if(num % 2) { // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
// module.exports 에는 객체만 대입되는 것이 아닌 함수나 변수를 대입해도 된다.