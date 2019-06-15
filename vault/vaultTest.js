/*
< vaultTest >
Vault HTTP API 에 직접 POST 요청을 보내서 github token 으로 인증 후 client token 을 발급받는다.
그 토큰을 node-vault 에 parameter 로 전달하여 vault client 를 생성한다.
vault client 로 Redis secret 정보를 읽어온다.
*/

let reqOptions = {
    uri: '접근할 vault storage uri',
    method: 'POST',
    body:{
        token:"vault 인증 시 발급받는 client token"
    },
    json:true
};

const request = require('request');
let token;

function getVaultClient() {
    // vault client token 발급받기
    request.post(reqOptions, async (err, res, body)=>{
        console.log(body.auth.client_token);
        token = await body.auth.client_token;

        let options = {
            apiVersion: 'v1', //default
            endpoint: '접근할 vault storage uri',
            token: token,
        };

        // vault node client 생성
        let vault = require('node-vault')(options);

        // vault K/V storage 에서 데이터 가져오기
        vault.read('가져올 데이터가 위치한 storage 경로')
            .then((result)=> {
                console.log(result.data);
            })
    });
}

getVaultClient();
