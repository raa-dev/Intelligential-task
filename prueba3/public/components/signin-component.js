export const signinComponent = {    
    data () {
        return {
            title: 'Sign in',
            email: '',
            password: '',
            name: '',
            respuesta: '',
            vista: true
        }
    },

    methods: {
        signIn() {
            axios
            .post('http://localhost:8080/api/v1/customers', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(response => response.redirect('/user'))
            .catch(err => {
                this.vista = false;
                this.respuesta = err;
            })
        }
    },

    template: `
    <div class="signin-container" v-if="vista">
        <form>
            <h2>{{ title }}</h2>
            <input type="text" placeholder="name" 
            class="input-button" v-model="name"><br />
            <input type="email" placeholder="email"
            class="input-button" v-model="email"><br />
            <input type="password" placeholder="Password"
            class="input-button" v-model="password"><br />
            <a href="/user"><input type="submit" value="Sign in" class="input-button" @click="signIn"></a>
        </form>
        <div class="signin-container-redirect">
            <span>¿Ya tienes cuenta?<br />
            <a href="/login">¡Inicia sesión!</a></span>
        </div>
    </div>
    <div v-model="respuesta"
    class="signin-container" v-else>
        {{respuesta.message}} <br />
        <a href="/signin">Vuelve a intentarlo</a>
    </div>
    `
};
