// const 와 let 의 차이

const a = 0
a = 1

// 오류 발생 : Assignment to constant variable.
// const 는 한번 대입하면 다른 값을 대입 할 수 없다.

let b = 0;
b = 1;
const c;

// 오류 발생 : Missing initializer in const declaration
// 초기화 시 값을 대입하지 않으면 에러가 발생한다.

// 기본적으로 변수 생성시에는 const, 다른 값을 대입해야 할 경우 let 을 사용한다.