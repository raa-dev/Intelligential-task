
export const userComponent = {
    data () {
        return {
            title: 'hola'
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
        <h1>{{title}} usuario</h1>
    </div>
    `
};