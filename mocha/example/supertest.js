const should = require('should');
const request = require('supertest');
const app = require('../app');

describe('GET/ new', ()=>{
    it('should return 200 status code', (done) => {
        request(app)
            .get('/user/img/huewilliams')
            .expect(200)
            .end((err, res) => {
                if(err) throw err;
                console.log(res);
                done();
            })
    });
});