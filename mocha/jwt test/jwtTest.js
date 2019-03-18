const app = require('../app');
const request = require('supertest');
const User = require('../models').User;

let jwtToken = '';
let user;

before(async () => {
    user = await User.create({
        id: 'test',
        realname: '김테스트',
        password: '1234',
        email: 'test@man',
        nickname: '테스트장인'
    })
});

after(()=>{
    User.destroy({
        where: { id: 'test'}
    })
});

describe('JWT auth test(POST /user/login API)', () => {
    it('should get jwt cookie', ()=>
    request(app)
        .post('/auth/login')
        .set('Accept','application/json')
        .send({id: user.id, password: user.password})
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res)=>{
            jwtToken = res.headers['set-cookie'];
            console.log('jwt token : ',jwtToken);
        }))
});