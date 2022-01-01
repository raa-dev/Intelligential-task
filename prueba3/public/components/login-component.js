
export const loginComponent = {    
    data () {
        return {
            title: 'Log in',
            email: '',
            password: '',
            respuesta: '',
            vista: true,
            user: []
        }
    },

    methods: {
        logIn() {
            let data = {
                email: this.email,
                password: this.password
            };
            axios
            .post('http://localhost:8080/api/v1/auth/login', data)  
            .catch(err => {
                this.vista = false;
                this.respuesta = err;
            });
            this.user.push(data);
        }
    },

    mounted () {

    },

    template: `
    <div class="login-container" v-if="vista">
        <form action="/user" method="">
            <h2>{{ title }}</h2>
            <input type="email" placeholder="email"
            class="input-button" v-model="email"><br />
            <input type="password" placeholder="Password"
            class="input-button" v-model="password"><br />
            <a href="/search"><input type="button" value="Log in" 
            class="input-button" @click="logIn"><a>
        </form>
        <div class="login-container-redirect">
            <span>¿Aún no tienes cuenta?<br />
            <a href="/signin">¡Registrate!</a></span>
        </div>
    </div>
    <div v-model="respuesta"
    class="login-container" v-else>
        {{respuesta.message}} <br />
        <a href="/login">Vuelve a intentarlo</a>
    </div>
    `
};
