export const loginComponent = {    
    data () {
        return {
            title: 'Log in',
            email: '',
            password: '',
            name: ''
        }
    },

    methods: {
        logIn() {
            alert('hello');
        }
    },

    template: `
    <div class="login-container">
        <form>
            <h2>{{ title }}</h2>
            <input type="email" placeholder="email"
            class="input-button" v-model="email"><br />
            <input type="password" placeholder="Password"
            class="input-button" v-model="password"><br />
            <input type="button" value="Log in" 
            class="input-button" @click="logIn">
        </form>
        <span>¿Aún no tienes cuenta?<br />
        <a href="#">¡Registrate!</a></span>
    </div>
    `
};
