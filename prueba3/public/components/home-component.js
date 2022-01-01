
export const homeComponent = {
    data () {
        return {

        }
    },

    computed: {

    },

    methods: {
                
    },

    created() {
        console.log('created');
    },

    template: `
    <div class="home-container">
        <h1>Consulta nuestra API</h1>
        <p>Gestiona el inventario</p>
        <p>Agrega nuevos libros</p>
        <a href="/login">Inicia sesión</a> | <a href="/signin">Regístrate</a>
    </div>
    `
};