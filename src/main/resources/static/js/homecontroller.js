var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        username: '',
        password: '',
    },
    ready() {
        this.onRender();
    },
    methods: {
        getGreeting: function(event) {
            var self = this;
            this.$http.post('/login',{},
                {headers : { authorization : "Basic "+ btoa(self.username
                + ":" + self.password)}
            }).then(response => {
                console.log(response);
            });
        },
        onRender: function(){
            console.log('asdfasdfasdf')
            this.$http.get("/greeting").then(function(response){
                if(response.data) {
                    self.greeting = response.data;
                    self.hide = true;
                } else {
                    self.hide = false;
                }
            });
        }

    }
})
