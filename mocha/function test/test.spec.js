const reply = require('./test').reply;

describe('App test', ()=>{
    it('reply should return success', (done)=>{
        if (reply() === 'success')
            done();
    })
});