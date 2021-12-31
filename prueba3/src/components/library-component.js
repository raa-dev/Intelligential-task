export const libraryComponent = {
    data () {
        return {
            buscador: '',
            year: ''
        }
    },

    methods: {
        search() {
            alert('busca')
        }
    },

    template: `
    <div class="library-container">
        <div class="buscador-container">
            <form>
                <label>Buscador</label> <br />
                <input type="text" placeholder="título, autor, editorial"
                v-model="buscador"><br />
                <input type="number" placeholder="año"
                v-model="year"><br />
                <input type="button" value="Buscar"
                @click="search"><br />
            </form>
        </div>
        <div class="inventario-container">
            <section>
            <h1>Inventario</h1>
            <article>
                <span></span>
            </article>
            </section>
        </div>
    </div>
    `
};