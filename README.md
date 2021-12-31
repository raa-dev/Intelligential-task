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
API_URL/api/v1/
``````
Toda interacción con la API tiene que hacerse a través de esa URL. El routing de `customers`, `books` y `categories` está construido sobre ella. Para hacer peticiones a cada endpoint:
``````
//books endpoint
API_URL/api/v1/books

//categories endpoint
API_URL/api/v1/categories

//customers endpoint
API_URL/api/v1/customers
``````
* Peticiones habilitadas
  * GET
  * POST
  * DELETE
  * PATCH


### Tecnologías back-end
* **Express.js**: Creación del servidor con arquitectura API REST, manejo de middlewares y routing
* **Sequelize**: ORM como sistema de administración de la base de datos.
* **Postgres**: Base de datos relacional vía las librerías *pg* y *pg-hstore*.
* **Passport y JWT**: Implementación de middleware de autenticación y autorización.

### Tecnologías front-end
* **HTML**: Creación de layouts para vistas estáticas.
* **CSS**: Estilización de layouts.
* **Javascript**: Maniplación del DOM