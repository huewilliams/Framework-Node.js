const sayNode = function () {
    console.log('Node');
};
const es = 'ES';
const newObject = {
    sayJS() {
        console.log('JS');
    },  // sayJS 같은 객체의 메서드에 함수를 연결할 때 콜론(:) 과 function 을 붙이지 않아도 된다.
    sayNode,  // sayNode : sayNode 와 같이 속성명과 변수명이 겹치는 경우 한 번만 쓸 수 있게 되었다.
    [es + 6] : 'Fantastic',
};

console.log(newObject.sayNode());  // Node
console.log(newObject.sayJS());    // JS
console.log(newObject.ES6);        // Fantastic

