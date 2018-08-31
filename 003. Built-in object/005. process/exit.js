let i = 1;
setInterval(() => {
    if (i == 5) {
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i += 1;
},1000);

// setInterval 로 반복되고 있는 코드를 process.exit() 로 멈추었다.