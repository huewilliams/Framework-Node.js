const WebSocket = require('ws');

module.exports = (server) =>{
    // wss : web socket server
    const wss = new WebSocket.Server({server});

    wss.on('connection', (ws, req) => {
        // 클라이언트의 ip를 알아내는 방법
        // 크롬에서 localhost로 접속한 경우 ip는 ::1 이다.
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('새로운 클라이언트 접속', ip);
        // message : 클라이언트로 부터 메세지가 왔을 때
        ws.on('message', (message) => {
            console.log(message);
        });
        // error : 웹 소켓 연결 중 문제 발생
        ws.on('error', (error) => {
            console.error(error);
        });
        // close : 클라이언트와의 연결이 끊어짐
        ws.on('close', () => {
            console.log('클라이언트 접속 해제', ip);
            // 메모리 누수 방지
            clearInterval();
        });
        const interval = setInterval(()=> {
            // 웹 소켓이 OPEN 상태인지 확인함
            if (ws.readyState === ws.OPEN) {
                ws.send('서버에서 클라이언트로 메시지를 보냅니다.');
            }
        }, 3000);
        ws.interval = interval;
    });
};

/* 웹 소켓 상태
    CONNECTING : 연결중
    OPEN : 열림
    CLOSING : 닫는중
    CLOSED : 닫힘

    OPEN 일 경우에만 에러 없이 메시지를 보낼 수 있다.
 */