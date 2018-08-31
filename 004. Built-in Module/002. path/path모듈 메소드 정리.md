path 모듈 메소드 정리
===============
폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈이다.  
path모듈이 필요한 이유는 운영체제 별로 경로 구분자가 다르기 때문이다.  
크게 Windows 타입과 POSIX 타입으로 구분된다.  
POSIX는 유닉스 기반의 운영체제 들로 macOS와 리눅스가 속해있다.  
* windows : \로 구분한다.
* POSIX : /로 구분한다.  

[ Windows에서 POSIX 스타일 path를 사용해야 하는 경우 ]   
path.posix.sep , path.posix.join() 과 같이 사용  
[ 반대의 경우 ]   
path.win32.sep , path.win32.join() 과 같이 사용

## path.sep  
경로의 구분자이다.  
Windows는 \, POSIX는 /이다.  

## path.delimiter  
환경변수의 구분자이다.  
Windows는 세미콜론(;)이고, POSIX는 콜론(:)이다.  

## path.dirname(경로)  
파일이 위치한 폴더 경로를 보여준다.  

## path.extname(경로)  
파일의 확장자를 보여준다.  

## path.basename(경로, 확장자)  
파일의 이름(확장자)을 보여준다.  
파일의 이름만 표시하고 싶다면 basename의 두 번째 인자로 파일의 확장자를 넣으면 된다.  

## path.parse(경로)  
파일 경로를 root, dir, base, ext, name으로 분리한다.  

## path.format(객체)  
path.parse()한 객체를 파일 경로로 합친다.  

## path.normalize(경로)  
/나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환해준다.  

## path.isAbsolute(경로)  
파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려준다.  

## path.relative(기준경로, 비교경로)  
경로를 두 개 넣으면 첫 번째 경로에서 두 번쨰 경로로 가는 방법을 알려준다.  

## path.join(경로, ...)  
여러 인자를 넣으면 하나의 경로로 합쳐준다.  
상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리해준다.  

## path.resolve(경로, ...)  
path.join()과 비슷하지만 차이가 있다.  
/를 만나면 절대 경로로 인식해서 앞의 경로를 무시한다.  
