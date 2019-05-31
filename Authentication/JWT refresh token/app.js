const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const config = require('./config');
//TODO change store such as Redis
const tokenList = {};
const app = express();

router.get('/', (req, res)=> {
    res.send('OK');
})

router.post('/login', (req, res)=> {
    const postData = req.body;
    const user = {
        "email" : postData.email,
        "name" : postData.name,
    }

    //TODO DB  authentication 

    const token = jwt.sign(user, config.secret, { expiresIn : config.tokenLife})
    const refreshToken = jwt.sign(user, config.refreshTokenSecret, {
        expiresIn: config.refreshTokenLife
    })

    const response = {
        "status" : "Logged in",
        "token" : token,
        "refreshToken" : refreshToken,
    }
    tokenList[refreshToken] = response;
    res.status(200).json(response);
})

// refreshing token
router.post('/token', (req, res)=> {
    const postData = req.body;
    // if refresh token exists
    if((postData.refreshToken) && (postData.refreshToken in tokenList)) 
    {
        const user = {
            "email" : postData.email,
            "name" : postData.name
        }
        const token = jwt.sign(user, config.secret, {
            expiresIn: config.tokenLife
        })
        const response = {
            "token" : token,
        }
        res.status(200).json(response);
    } else {
        res.status(404).send('Invalid request');
    }
})

router.use(require('./tokenChecker.js'));

router.get('/secure', (req, res)=> {
    res.send('I am secured');
})

app.use(express.json());
app.use(express.urlencoded({extended: false, limit: '50mb'}));
app.use('/api', router);
app.listen(config.port || process.env.port || 3000, ()=>{
    console.log('server is listening');
});