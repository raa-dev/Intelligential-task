export const signinComponent = {    
    data () {
        return {
            title: 'Sign in',

        }
    },

    methods: {
        
    },

    template: `
    <div>
    <form>
        <h2>{{ title }}</h2>
        <input type="text" placeholder="name"><br />
        <input type="email" placeholder="email"><br />
        <input type="password" placeholder="Password"><br />
        <input type="button" value="Sign in">
    </form>
    <span>¿Ya tienes cuenta?<a href="#">¡Inicia sesión!</a></span>
    </div>
    `
};
