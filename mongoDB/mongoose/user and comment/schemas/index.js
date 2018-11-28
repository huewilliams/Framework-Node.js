const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
            // 배포 환경이 아닐 때 몽구스가 생성하는 쿼리 내용을 콘솔로 확인가능
        }
        mongoose.connect('mongodb://huewilliams:0104879s@localhost:27017/admin', {
            dbName : 'nodejs',
        }, (error)=>{
            if(error) {
                console.log('몽고디비 연결 에러', error);
            } else {
                console.log('몽고디비 연결 성공');
            }
        });
    };
    connect();
    mongoose.connection.on('error', (error)=> {
        console.log('몽고디비 연결 에러', error);
    });
    mongoose.connection.on('disconnected', ()=> {
        console.log('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다');
        connect();
    });

    // User 스키마와 Comment 스키마를 연결함
    require('./user');
    require('./comment');
};