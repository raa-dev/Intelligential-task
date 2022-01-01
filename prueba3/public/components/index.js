import { loginComponent }  from './login-component.js';
import { signinComponent } from './signin-component.js';
import { libraryComponent } from './library-component.js';
import { searchComponent } from './search-component.js';
import { homeComponent } from './home-component.js';
import { userComponent } from './user-component.js'


export const app = new Vue({
    el: '#app',
    components: {
        loginComponent,
        signinComponent,
        libraryComponent,
        searchComponent,
        homeComponent,
        userComponent
    },

    mounted() {

    },    
});