const express = require('express');

const session = require('express-session');

const FileStore = require('session-file-store') (session);

const app = express();

app.use(session({
    secret: 'session secret', // 암호화
    resave: false, // 세션을 항상 저장할 지 여부
    saveUninitialized: true, // 초기화 되지 않은 채 스토어에 저장되는 세션
    store: new FileStore() // 데이터를 저장하는 형식
}));

app.get('/', (req, res, next)=>{
    console.log(req.session);

    if(!req.session.num) {
        req.session.num = 1;
    } else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Number : ${req.session.num}`);
});

app.listen(3000, ()=>{
    console.log('listening 3000 port');
});
