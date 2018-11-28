const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    age : {
        type : Number,
        required : true,
    },
    married : {
        type : Boolean,
        required : true,
    },
    comment : String,
    createdAt : {
        type : Date,
        default : Date.now,
        // 데이터 생성 당시의 시간
    },
});

module.exports = mongoose.model('User', userSchema);