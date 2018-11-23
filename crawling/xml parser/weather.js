var eyes = require('eyes'),
    // http 요청을 보내기 위한 모듈
    http = require('http'),
    // xml 을 json 으로 변환하는 모듈
    xml2js = require('xml2js'),
    parser = new xml2js.Parser();

// url : 기상청 API (xml 데이터) 기상정보
http.get('http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1114052000', (res)=> {
    var data = '';
    res.setEncoding('utf8'); // 한글화를 위해 인코딩 설정
    res.on('data', (chunk)=> {
        data += chunk;
    });
    res.on('end', ()=> {
        parser.parseString(data, (err, result)=> {
            if (err) {
                console.log('error: ' + err.message);
            } else {
                eyes.inspect(result);
                // xml 데이터 중에서
                console.log(result.rss.channel[0].item[0].description[0].body[0].data[0].wfKor[0]);
                console.log('success.');
            }
        });
    });
    res.on('error', (err)=> {
        console.log('error: ' + err.message);
    });
});