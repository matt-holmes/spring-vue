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
            }).catch(e => {
                console.log(e);
            });
            this.isSignedIn = false;
        },

        home: function() {
            this.toggleCurrentActiveSection('home-content');
            $('.nav .active').removeClass('active');
            $('#home-nav').addClass('active');
        },
        createRes: function() {
            this.toggleCurrentActiveSection('create-res-form-wrapper');
            $('.nav .active').removeClass('active');
            $('#create-res-nav').addClass('active');
        },
        listRes: function() {
            $('.nav .active').removeClass('active');
            $('#list-res-nav').addClass('active');
        },
        menu: function() {
            $('.nav .active').removeClass('active');
            $('#menu-nav').addClass('active');
        },
        activities: function() {
            $('.nav .active').removeClass('active');
            $('#activities-nav').addClass('active');
        },
        toggleCurrentActiveSection: function(cssClass) {
            var id = $('.nav .active').attr('id');
            var sectionClass = this.getSectionClassFromMenuItem(id);
            $('.' + sectionClass).slideUp(function(){
                $('.' + cssClass).slideDown('slow');
            });
        },
        getSectionClassFromMenuItem: function(id) {
            var cssClass = '';
            switch(id) {
            case 'home-nav':
                cssClass = 'home-content';
                break;
            case 'create-res-nav':
                cssClass = 'create-res-form-wrapper';
                break;
            }
            return cssClass;
        }

    }
})
