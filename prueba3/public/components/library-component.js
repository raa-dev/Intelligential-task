
export const libraryComponent = {
    data () {
        return {
            buscador: '',
            respuesta: '',
            title: '',
            author: '',
            publisher: '',
            description: '',
            categoryId: 2,
            year: '',
            apiAnsw: [],
            books: [],
            loading: true,
            errored: false,
            info: null
        }
    },

    computed: {
        total() {
            return `${this.respuesta.length}`
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
                description: this.description,
                categoryId: this.categoryId,
                publisher: this.publisher,
                year: this.year
            };
            axios
                .post('http://localhost:8080/api/v1/books', data)  
                .catch(err => {
                    this.errored = true;
                    console.error(err.message);
            });
            return this.books.push(data);
        },
        inventory() {
            axios
                .get('http://localhost:8080/api/v1/books')
                .then(res => {
                        this.apiAnsw.push(res.data)
                    })
                .catch(err => {
                    console.error(err)
                    this.errored = true
                })
                .finally(() => this.loading = false)

                this.apiAnsw.forEach(element => {
                    this.books.push(element)
                });

                this.respuesta = this.books[0]
        }
    },

    created() {
        console.log('created');
    },
    
    mounted() {
        console.log('mounted');
        this.inventory()
    },

    template: `
    <div class="library-container">
        <div class="addBook-container">
            <form>
                <label><strong>Agrega un libro</strong></label> <br />
                <input class="input-button" type="text" placeholder="título"
                v-model="title"><br />
                <input class="input-button" type="text" placeholder="autor"
                v-model="author"><br />
                <input class="input-button" type="text" placeholder="editorial"
                v-model="publisher"><br />
                <input class="input-button" type="text" placeholder="descripción"
                v-model="description"><br />
                <input class="input-button" type="number" placeholder="año"
                v-model="year"><br />

                <input class="input-button" type="button" value="Agregar"
                @click="addBook">
                <input class="input-button" type="button" value="Mostrar inventario"
                @click="inventory"><br />
                <a href="/search">Busca un libro</a>
            </form>
        </div>
        <div class="inventario-container" v-if="books.length === 0 ? false : true">
            <section>
            <h1>Inventario</h1>
            <article>
                <table class="inventario-container-table">
                    <tbody class="inventario-container-table-body">
                        <tr>
                            <th>ID</th>
                            <th>Autor</th>
                            <th>Título</th>
                            <th>Editorial</th>
                            <th>Año</th>
                            <th>Portada</th>
                        </tr>
                        <tr v-for="book in respuesta" :key="book.id">
                            <td>{{ book.id }}</td>
                            <td>{{ book.author }}</td>
                            <td>{{ book.title }}</td>
                            <td>{{ book.publisher }}</td>
                            <td>{{ book.year }}</td>
                            <td><img :src="book.image" width=90 heigth=90/></td>
                        <tr>
                    <tbody>
                </table>
                <section v-else-if="errored">
                    <p>Lo sentimos, no es posible obtener información en este momento</p>
                </section>
                <section v-else>
                    <div v-if="loading">
                        cargando...
                    </div>
                </section>
                <div v-else
                v-for="i in info" :key="i.id">
                </div>
                <span><b>Total de libros: {{ total }}</b></span>
            </article>
            </section>
        </div>
    </div>
    `
};