export const libraryComponent = {
    data () {
        return {
            buscador: '',
            title: '',
            author: '',
            publisher: '',
            year: '',
            books: []
        }
    },

    computed: {
        total() {
            return `${this.books.length}`
        }
    },

    methods: {
        search() {
        },
        addBook() {            
            let data = {
                title: this.title,
                author: this.author,
                publisher: this.publisher,
                year: this.year
            };
            return this.books.push(data);
        }
    },

    template: `
    <div class="library-container">
        <div class="buscador-container">
            <form>
                <label><strong>Buscador</strong></label> <br />
                <input class="input-button" type="search" placeholder="título, autor, editorial"
                v-model="buscador"><br />
                <input class="input-button" type="number" placeholder="año"
                v-model="year"><br />
                <input class="input-button" type="button" value="Buscar"
                @click="search"><br />
            </form>
        </div>
        <div class="addBook-container">
        <form>
            <label><strong>Agrega un libro</strong></label> <br />
            <input class="input-button" type="text" placeholder="título"
            v-model="title"><br />
            <input class="input-button" type="text" placeholder="autor"
            v-model="author"><br />
            <input class="input-button" type="text" placeholder="editorial"
            v-model="publisher"><br />
            <input class="input-button" type="number" placeholder="año"
            v-model="year"><br />
            <input class="input-button" type="button" value="Agregar"
            @click="addBook"><br />
        </form>
    </div>
        <div class="inventario-container">
            <section>
            <h1>Inventario</h1>
            <article>
                <table>
                    <tbody>
                        <tr v-for="book in books" :key=book>
                            <td>{{ book.author }}</td>
                            <td>{{ book.title }}</td>
                            <td>{{ book.publisher }}</td>
                            <td>{{ book.year }}</td>
                        <tr>
                    <tbody>
                </table>
                <span>Total de libros: {{ total }}</span>
            </article>
            </section>
        </div>
    </div>
    `
};