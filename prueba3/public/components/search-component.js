
export const searchComponent = {
    data () {
        return {
            buscador: '',
            respuesta: '',
            title: '',
            author: '',
            publisher: '',
            year: '',
            cont: [],
            books: []
        }
    },

    computed: {
        total() {
            return `${this.books.length}`
        }
    },

    methods: {
        async search() {
            axios
                .get('http://localhost:8080/api/v1/books')
                .then(res => {
                    this.cont.push(res.data)
                })
                .catch(err => console.error(err))

                this.cont.forEach(element => {
                    this.books.push(element)
                });

            this.respuesta = this.books[0]
            this.books = this.respuesta
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
                
    },

    created() {
        console.log('created');
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
                <a href="/addBook">Agrega un libro</a>
            </form>
            <span><h1 v-show="respuesta">Respuesta</h1><span>
            <table class="inventario-container-table">
                <tbody class="inventario-container-table-body">
                    <tr v-for="book in respuesta" :key="book.id">
                        <td>{{ book.author }}</td>
                        <td>{{ book.title }}</td>
                        <td>{{ book.publisher }}</td>
                        <td>{{ book.year }}</td>
                    <tr>
                <tbody>
            </table>
        </div>
    </div>
    `
};