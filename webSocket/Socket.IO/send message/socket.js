const SocketIO = require('socket.io');

module.exports = (server) => {
    // 클라이언트와 연결할 수 있는 경로
    // 클라이언트와 경로가 일치해야 함
    const io = SocketIO(server, { path : '/socket.io'});

    // connection : 클라이언트가 접속시 발생, 콜백으로 socket 객체를 전달
    io.on('connection', (socket)=>{
        // socket.request : 요청 객체
        // socket.request.res : 응답 객체
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        // socket.id : 소켓 고유의 아이디
        console.log('새로운 클라이언트가 접속했습니다', ip, socket.id, req.ip);
        // disconnect : 클라이언트가 연결을 끊었을 때
        socket.on('disconnect', ()=> {
            console.log('클라이언트 접속 해제', ip, socket.id);
            clearInterval(socket.interval);
        });
        // error : 통신과정 중 에러 발생
        socket.on('error', (error)=>{
            console.error(error);
        });
        // reply : 클라이언트에서 만든 이벤트
        socket.on('reply', (data)=>{
            console.log(data);
        });
        socket.interval = setInterval(()=>{
            socket.emit('news', 'Hello Socket.IO');
        }, 3000);
    });
};