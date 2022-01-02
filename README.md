# README
El contenido del repositorio se divide en tres, de acuerdo a las pruebas solicitadas por Intelligential. A cada prueba le corresponde un directorio.
## Prueba 1: Algoritmo
* Diseño e implementación de algoritmo para matriz **N x M**: recorrido de caracol.
* El algoritmo recorre los márgenes de la matriz hasta llegar a su centro sin repetir su trayectoria. Devuelve un vector o arreglo unidimensional con el mismo número de elementos.
* Para correr el código usaremos Node.js desde la terminal ejecutando
``````
node caracol.js
``````
## Prueba 2: Arquitectura
* Arquitectura de software: 
  * diagrama ER de e-commerce
  * diagrama físico (RDB)
  * diagrama del servidor
* Diseños realizados con Drawio y MySQL Workbench
* Archivos binarios adjuntos en el directorio
## Prueba 3: mini app
URL: https://immense-garden-99230.herokuapp.com/
* Caso práctico: sistema de gestión de inventario para librería 
* Antes de ejecutar la app es necesario instalar las dependencias:
```
npm install
```
* Para correr la app en ambiente de desarrollo usaremos Node.js y NPM desde la terminal ejecutando:
``````
npm run dev
``````
* y para correr en ambiente de producción:
``````
npm run start
``````
### Base de Datos
* La gestión de la RDB (PostgreSQL) es a través de Sequelize (ORM) y así facilitar su integración con Node.JS
* La app está contenida y virtualizada utilizando `Docker`. La configuración de servicios se tiene que agregar en un archivo `docker-compose.yml`. 
* Además, crear un archivo `.env` para guardar las variables de ambiente. Ejemplo:
``````
PORT=8080
DB_USER=user
DB_PASSWORD=password
DB_HOST='localhost'
DB_NAME='my_db'
DB_PORT='5432'
JWT_SECRET=token
DATABASE_URL='postgres://user:password@localhost:5432/my_db'
``````

### API Rest
* La arquitectura de la app está construida como una API Rest.
``````
https://immense-garden-99230.herokuapp.com/api/v1/
``````
Toda interacción con la API tiene que hacerse a través de esa URL. El routing de `customers`, `books` y `categories` está construido sobre ella. Para hacer peticiones a cada endpoint:
``````
//books endpoint
https://immense-garden-99230.herokuapp.com/api/v1/books

//categories endpoint
https://immense-garden-99230.herokuapp.com/api/v1/categories

//customers endpoint
https://immense-garden-99230.herokuapp.com/api/v1/customers

//login endpoint
https://immense-garden-99230.herokuapp.com/api/v1/auth/login
``````
* Peticiones habilitadas
  * GET
  * POST
  * DELETE
  * PATCH

* Por defecto el usuario se crea con rol `customer`, para crear categorías es necesario rol `admin`, por lo que lo único que se tiene que agregar en los parámetros del endpoint `customers/POST` es `"role": "admin"`. La API dará por respuesta un `token` que es necesario usar como `Bearer Token` en los headers de la solicitud `categories/POST`. 

/books

``````
GET/
  /*devuelve un array de objetos*/
  [
    {
      /* */
    },
    {
      /* */
    }
  ]
  /:id 
  /*@param retorna un JSON con las siguientes llaves*/
  {
	"id": 3,
	"author": "Gilbert Simondon",
	"title": "La individuación a la luz de las nociones de forma e información",
	"description": "El autor discute el concepto de individuación a raíz de una crítica al concepto aristotélico de forma a través de la noción de información.",
	"publisher": "Cactus",
	"year": 1948,
	"image": "https://q2x4t2e8.stackpathcdn.com/wp-content/uploads/2019/01/043.jpg",
	"createdAt": "2022-01-01T23:59:57.226Z",
	"categoryId": 1
}

POST/
  /*@params*/
  {
	  "author": "Norbert Wiener",
    "title": "La cibernética o el control y comunicación de animales y máquinas",
    "year": 1948,
    "description": "El autor propone una ontología basada en mensajes y producción de información.",
    "publisher": "TusQuets",
    "image": "https://imagessl9.casadellibro.com/a/l/t1/29/9788472234529.jpg",
    "categoryId": 1
}
/*@return */
{
	"createdAt": "2022-01-02T02:18:03.993Z",
	"id": 4,
	"author": "Norbert Wiener",
	"title": "La cibernética o el control y comunicación de animales y máquinas",
	"year": 1948,
	"description": "El autor propone una ontología basada en mensajes y producción de información.",
	"publisher": "TusQuets",
	"image": "https://imagessl9.casadellibro.com/a/l/t1/29/9788472234529.jpg",
	"categoryId": 1
}
``````

/categories

``````
GET/
  /*devuelve un array de objetos*/
  [
    {
      /* */
    },
    {
      /* */
    }
  ]
  /:id 
  /*@return JSON con las siguientes llaves*/
{
	"id": 1,
	"name": "Filosofía",
	"createdAt": "2022-01-01T23:59:44.089Z",
	"books": [
		/*incluye libros que pertenezcan a esa categoría */
    ]
}

POST/
  /*@param*/
  {
	"name": "Computer Science"
  }
  /*@return*/
  {
	"createdAt": "2022-01-02T02:14:30.113Z",
	"id": 2,
	"name": "Computer Science"
}

``````

/customers

``````
GET/
  /*devuelve un array de objetos*/
  [
    {
      /* */
    },
    {
      /* */
    }
  ]
  /:id 
  /*@return JSON con las siguientes llaves*/
{
	"id": 2,
	"name": "Rodrigo",
	"password": "$2b$10$ve4lGdleu.GAIh3SWUGeleevtHPsG38CeRs0i8ClhbuvJcqJH3U2O",
	"email": "rodrx20@gmail.com",
	"role": "admin",
	"createdAt": "2022-01-01T23:58:41.407Z"
}

POST/
  /*@param*/
{
	"name": "Rodrigo",
	"password": "ejemplo1",
	"email": "rodrx20@gmail.com",
	"role": "admin" /*opcional. si se omite queda "role":"customer" por defecto */
}
  /*@return*/
{
	"createdAt": "2022-01-01T23:58:41.407Z",
	"id": 2,
	"name": "Rodrigo",
	"email": "rodrx20@gmail.com",
	"role": "admin"
}

``````
### Tecnologías back-end
SERVIDOR
* **Express.js**: Creación del servidor con arquitectura API REST, manejo de middlewares y routing.
  
BASE DE DATOS
* **Sequelize**: ORM como sistema de administración de la base de datos.
* **Postgres**: Base de datos relacional vía las librerías *pg* y *pg-hstore*.
  
MIDDLEWARES
* **Passport y JWT**: Implementación de middleware de autenticación y autorización.
* **Boom**: Manejo de errores.

ADDONS
* **Bcrypt**: Cifrado de contraseñas.
* **Cors**: Resolución de problemas de origen cruzado.
* **Axios**: Consumo de la API Rest vía promesas.

### Tecnologías front-end
* **HTML**: Creación de layouts para vistas estáticas.
* **CSS**: Estilización de layouts.
* **Javascript y Vue.js**: Maniplación del DOM, consumo de API, comportamiento del sitio.