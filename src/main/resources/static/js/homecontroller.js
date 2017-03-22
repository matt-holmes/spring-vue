(function(){
    var cookies;

    function readCookie(name,c,C,i){
        if(cookies){ return cookies[name]; }

        c = document.cookie.split('; ');
        cookies = {};

        for(i=c.length-1; i>=0; i--){
           C = c[i].split('=');
           cookies[C[0]] = C[1];
        }

        return cookies[name];
    }

    window.readCookie = readCookie; // or expose it however you want
})();


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        username: '',
        password: '',
    },
    methods: {
        getGreeting: function(event) {
            var self = this;
            var token = readCookie('XSRF-TOKEN');
            this.$http.post('/login',{},
                {headers : {
                    authorization : "Basic "+ btoa(self.username + ":" + self.password),
                    'X-XSRF-TOKEN': token
                }
            }).then(response => {
                console.log(response);
            });
        },
    }
})
