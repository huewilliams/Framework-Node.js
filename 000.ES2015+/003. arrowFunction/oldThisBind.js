var relationShip1 = {
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends : function () {
        var that = this; // relationShip 을 가리키는 this 를 that 에 저장
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        })
    }
};
relationShip1.logFriends();