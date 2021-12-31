export const loginComponent = {    
    data () {
        return {
            title: 'Log in',

        }
    },

    methods: {
        
    },

    template: `
    <div>
    <form>
        <h2>{{ title }}</h2>
        <input type="email" placeholder="email"><br />
        <input type="password" placeholder="Password"><br />
        <input type="button" value="Log in">
    </form>
    <span>¿Aún no tienes cuenta?<a href="#">¡Registrate!</a></span>
    </div>
    `
};
