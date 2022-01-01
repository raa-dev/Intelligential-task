import { loginComponent }  from './login-component.js';
import { signinComponent } from './signin-component.js';
import { libraryComponent } from './library-component.js'


export const app = new Vue({
    el: '#app',
    components: {
        loginComponent,
        signinComponent,
        libraryComponent
    }
});