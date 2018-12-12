let express = require('express');
let models = require('../models');
let router = express.Router();

let jwt = require('jsonwebtoken');
let secretObj = require('../config/jwt');

router.get("/login", async (req, res, next)=>{
    let token = jwt.sign({
        nick: 'huewilliams'// 토큰의 내용(payload)
    },
        secretObj.secret, // 비밀키
        {
         expiresIn: '1m' // 유효시간 1분
        })

    models.User.findOne({
        where: {
            nick: 'huewilliams'
        }
    })
        .then(user=> {
        if(user.password == "0123") {
            res.cookie("user",token);
            res.json({
                token: token
            })
        }
    })
});

router.get('/api', (req, res, next)=>{
    let token = req.cookies.user;

    let decoded = jwt.verify(token, secretObj.secret);
    if (decoded) {
        res.send(decoded.nick);
    }
    else {
        res.send('권한이 없습니다');
    }
});

module.exports = router;