if (true) {
    const y = 3;
}
console.log(y);
// 오류발생 : y is not defined
// const 와 let 은 블록스코프를 가지므로 블록 밖에서는 변수에 접근할 수 없습니다.
// 블록의 범위는 if, while, for, function 등의 중괄호이다.