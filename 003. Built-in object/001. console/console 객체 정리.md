console 객체 정리
===============
## console.time(레이블)  
console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정합니다.
  
## console.log(내용)  
평범한 로그를 콘솔에 표시합니다.  
console.log(내용, 내용)처럼 동시에 표시할 수 있습니다.  

## console.error(에러 내용)  
에러를 콘솔에 표시합니다.
  
## console.dir(객체, 옵션)  
객체를 콘솔에 표시할 때 사용합니다.  
첫 번째 인자로 표실할 객체를 넣고, 두 번째 인자로 옵션을 넣습니다.  
옵션의 colors를 true로 하면 콘솔에 색이 추가된다.  
depth는 객체를 몇 단계까지 보여줄지를 결정하며 default는 2이다.  

## console.trace(레이블)
에러가 어디서 발생했는지 추적해준다.  
에러가 발생한 위치를 알려준다.  