export const signinComponent = {    
    data () {
        return {
            title: 'Sign in',
            email: '',
            password: '',
            name: '',
            customers: []
        }
    },

    methods: {
        signIn() {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
            };
            alert('hola ' + data.name);
            this.customers.push(data);
            alert(this.customers[0].password);
        }
    },

    template: `
    <div class="signin-container">
        <form>
            <h2>{{ title }}</h2>
            <input type="text" placeholder="name" 
            class="input-button" v-model="name"><br />
            <input type="email" placeholder="email"
            class="input-button" v-model="email"><br />
            <input type="password" placeholder="Password"
            class="input-button" v-model="password"><br />
            <input type="button" value="Sign in" class="input-button" @click="signIn">
        </form>
        <span>¿Ya tienes cuenta?<br />
        <a href="#">¡Inicia sesión!</a></span>
    </div>
    `
};
