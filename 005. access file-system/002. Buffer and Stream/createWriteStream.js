const fs = require('fs')

const writeStream = fs.createWriteStream('./readme3.txt');
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('다시 한번 씁니다.');
writeStream.end();

