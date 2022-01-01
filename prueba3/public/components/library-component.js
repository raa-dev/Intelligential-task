
export const libraryComponent = {
    data () {
        return {
            buscador: '',
            respuesta: '',
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
            let data = {
                buscador: this.buscador,
                year: this.year
            };
            this.books.find(book => {
                let answer = `Autor: ${book.author}. Título: ${book.title}. Editorial: ${book.publisher}. Año: ${book.year}`;
                switch (data.buscador) {
                case book.title:
                    return this.respuesta = answer;
                    break;
                case book.author:
                    return this.respuesta = answer;
                    break;
                case book.publisher:
                    return this.respuesta = answer;
                    break;
                default:
                    return this.respuesta = "No existe";
                    break;
                }
            });
        },
        addBook() {            
            let data = {
                title: this.title,
                author: this.author,
                publisher: this.publisher,
                year: this.year
            };
            return this.books.push(data);
        },
        async inventory() {
            this.books = await getBooks();
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
            <span v-model="respuesta">{{respuesta}}<span>
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
                <table class="inventario-container-table">
                    <tbody class="inventario-container-table-body">
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