// 기존의 함수 사용법
function add1(x,y) {
    return x+y;
}

// ES2015+ 문법 - 화살표 함수 사용
// 화살표 함수에서는 function 선언 대신 => 기호로 함수를 선언한다.
// 변수에 대입하면 재사용 할 수 있다.
const add2 = (x,y) =>{
    return x+y;
};

// 바로 위의 함수에서 불필요한 스코프를 제거
// 화살표 함수에서는 return 문을 줄일 수 있다 : return 할 식을 바로 적어주면 됨
const add3 = (x,y) => x+y;

// 보기 좋게 소괄호로 감쌀 수 있다.
const add4 = (x,y) => (x+y);

function not1(x) {
    return !x;
}

// 매개변수가 1개라면 소괄호로 묶지 않아도 된다.
const not2 = x => !x;

// 테스트
console.log(add1(1,2));
console.log(add2(1,2));
console.log(add3(1,2));
console.log(add4(1,2));

console.log(not1(1));
console.log(not2(1));