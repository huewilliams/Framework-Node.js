setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeOut');
},0);

Promise.resolve().then(() => console.log('promise'));
// resolve 된 promise 도 nextTick 처럼 다른 콜백들보다 우선시된다.
// 그래서 process.nextTick 과 Promise 를 마이크로 태스크(microtask) 라고 부른다.