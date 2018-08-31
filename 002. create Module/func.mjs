// ES2015+ 모듈 스타일 (func.js)

import {odd, even} from './var';
// require 가 import from 으로 바뀌었다.

function checkOddOrEven(num) {
    if(num % 2){
        return odd;
    }
    return even;
}

export default checkOddOrEven;
// export 또한 export default 로 변경되었다.

// 확장자를 mjs 로 지정해야 하며
// 실행시 node --experimental-modules [파일명]과 같이 특별한 옵션을 붙여주어야 한다.