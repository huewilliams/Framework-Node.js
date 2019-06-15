/*
< vaultTest2 >
미리 로그인하여 발급받은 토큰을 node-vault 의 파라미터로 전달하여 vault client 를 생성한다.
vault client 로 Redis secret 정보를 읽어온다.
*/

function getVaultClient() {
    let options = {
        apiVersion: 'v1',
        endpoint: '접근할 vault storage uri',
        token: 'vault 인증 시 발급받는 client token',
    };

    let vault = require('node-vault')(options);

    vault.read('가져올 데이터가 위치한 storage 경로')
        .then((result) => {
            console.log(result.data);
        })
}

getVaultClient();
