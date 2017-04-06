Vue.http.headers.common['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');

Vue.component('login-modal', {
    template: '#login-modal-template',
    data: function () {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        getPageResult: function(event) {
            var self = this;
            this.$http.get('/pageResult',
                {headers : {
                    authorization : "Basic "+ btoa(self.username + ":" + self.password)
                }
            }).then(function(response, request){
                if(response.data) {
                    Vue.http.headers.common['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');
                    this.$emit('login', true);
                    $('#loginModal').modal('toggle');
                }
            }).catch(e => {
                console.log(e);
                alert('invalid password');
            });

        },
    }
});

Vue.component('top-bar', {
     props: ['isSignedIn'],
     data: function () {
         return {
             isSignedIn: false,
         };
     },
     template: '#top-bar-template',
     methods: {
         logout: function() {
             this.$http.post('/logout',{}).then(function(response){
             }).catch(e => {
                 console.log(e);
             });
             this.$emit('logout', false);
         },
         launchModal: function() {
             $('#loginModal').modal('show');
         }
     }
});

Vue.component('home', {
     template: '#home-template',
});

Vue.component('create-res', {
     template: '#create-res-template',
});

Vue.component('navigation', {
     template: '#nav-template',
     methods: {
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
});

var app = new Vue({
    el: '#app',
    data: {
        isSignedIn: false,
    },
    mounted: function () {
        var self = this;
        this.$http.get('/pageResult').then(function(response, request){
            if(response.data) {
                self.isSignedIn = true;
                self.message = response.data.id;
            }
        }).catch(e => {
            console.log(e);
        });
    },
    methods: {
        setSignedIn: function(result) {
            this.isSignedIn = result;
        }
    }
});
