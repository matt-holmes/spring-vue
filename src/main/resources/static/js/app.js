Vue.http.headers.common['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');

var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        isSignedIn: false
    },
    methods: {
        getGreeting: function(event) {
            var self = this;
            this.$http.get('/greeting',
                {headers : {
                    authorization : "Basic "+ btoa(self.username + ":" + self.password)
                }
            }).then(function(response, request){
                if(response.data) {
                    Vue.http.headers.common['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');
                    self.isSignedIn = true;
                    self.message = response.data.id;
                    $('#loginModal').modal('toggle');
                }
            }).catch(e => {
                console.log(e);
                alert('invalid password');
            });
        },

        logout: function() {
            this.$http.post('/logout',{}).then(function(response){
                self.isSignedIn = false;
            }).catch(e => {
                console.log(e);
            });
        },
    }
})
