const relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    address: ['한누리관', '본관'],
    logFriends: function() {
        this.friends.forEach(friend => {
            this.address.forEach(addr => {
                console.log(this.name, friend, addr);
            });
        });
    },
};

relationship1.logFriends();