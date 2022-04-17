
# FullStack developer - Senpai Academy

Docente: Gustavo Rodriguez

1. Introducción y nivelación
2. HTML + CSS
3. JavaScript
4. ReactJS
5. Node.js + Express
6. MongoDB & PostgreSQL


<br />

---

# Fechas de entregas
1.  07 - noviembre - 2021 | Puntaje 100%
2.  13 - febrero - 2022 | Puntaje 100%
3.  24 - abril - 2022 | Puntaje


<br />

---

# Clases

## Modulo 1: Introducción y nivelación
### Clase 1
- Intro a programacion.
- Frontend, backend, servidor, base de datos.
- Github


<br />

---

## Modulo 2: HTML & CSS
### Clase 2
- Intro a HTML
- Etiquetas conocidas

### Clase 3

### Clase 4

### Clase 5
- Unidades en CSS
- Colores en CSS
- CSS Box Model

### Clase 6
- CSS Box Model: `border`, `padding`, `margin`, `content`
- FlexBox: `align-items`

### Clase 7
- Repaso a href dentro del mismo html
- CSS background-image
- Repaso CSS FlexBox
- `flex-direction`
- `flex-wrap`
- `flex-grow`
- `flex-shrink`

### Clase 8
- CSS Grid

### Clase 9
- CSS Flex vs CSS Grid
- Grid template areas
- Media Queries

### Clase 9
- CSS Grid
- Media queries

### Clase 10
- Pseudoclases: hover, active, focus, focus-within, target, visited, focus-visible, checked y +40
- Transiciones: transition, transition-duration, transition-timing-function, transition-delay
- Selectores


<br />

---

## Modulo 3: JavaScript

### Clase 11
- Inicio Modulo 3 Javascript

### Clase 12
- Control de flujo 
- Pseudo codigo

### Clase 13
- Sentencias `if`-`else`
- Funciones

### Clase 14
- Funciones (Function Declaration)
- Concatenar strings y Template string con `${variable}` y backlashes
- PareseInt
- Funciones anonimas y que pueden ser asignadas a una variable. 
- Programacion asincrona
- Function Expresion = `callback`
- Arrow Functions 

### Clase 15
- Repaso funciones
- Loops (bucles)
- Sintaxis `for`


### Clase 16
- Sintaxis `for`-`in`
- Sintaxis `for`-`of`
- Tipos de dato `String`
- Sintaxis `split()`
- Sintaxis `substring()`
- Tipos de dato `Array`
- Sintaxis `push()`
- Sintaxis `forEach( function (...) )`

### Clase 16
- Logica `prompt`
- Ejercicio para encontrar las repeticiones de una letra dentro de un String
- Repaso de variables y constantes
- Repaso de tipos de dato
- Repaso de objetos y concepto de `clave-valor`
- Repaso de funciones
- `DOM`
- `getElementById()` obtiene **un** elemento con el ID: `const nombre = document.getElementByID('nombre')`
- `getElementsById()` obtiene **los** elemento**s** con el ID
- `getElementsByClassName()` obtiene **los** elemento**s** con la Clase: `const nombre = document.getElementsByClassName(nombre)`
- `getElementsByTagName()` poco escalable

### Clase 17
- `element = document.querySelector(selectores)`
- `elementList = parentNode.querySelectorAll(selectors)`
- Eventos en DOM: clicks, teclas.
- `Event Listeners`
- `onClick = ...`
- `addEventListener("click", function() {...}`
- `classList` para obtener

### Clase 18 - 2021/11/25
- Events
- DOM Eventos mediante HTML: codigo directo en linea con HTML
- DOM Eventos mediane atributos: querySelector(selector CSS) + button.onClick() = function (){...}
- DOM Eventos mediante listeners: querySelector(selector CSS) + button.addEventListener("click", function(){...});

### Clase 19 - 2021/11/30
- Ejercicio menu mobile (burger) - `button menu-toggler`
- `document.querySelector(#id)`
- Ejercicio event-listeners
- Ejercicio listado de tareas parte 1
- Objeto `classList` para trabajar con CSS: `classList.add()` , `classList.remove()` y `classList.toggle` sirve para agregar o quitar clases a objetos de HTML
- Reemplazar contenido

### Clase 20 - 2021/12/02
- Ejemplo menu mobile responsive
- Ejemplo TODO List

### Clase 21 - 2021/12/07
- Continuacion ejemplo TODO List
- Funcionalidad de API JSON random data

### Clase 22 - 2021/12/09
- JSON
- `npm install -g json-server`
- `JSON.parse()`
- `JSON.stringify()`
- APIs
- `fetch` - `then` - `catch`

### Clase 23 - 2021/12/14
- Repaso general de JS parte 1
- Ejemplo prestamo

### Clase 24 - 2021/12/16
- Repaso general de JS parte 2
- JSON Server con `fetch`/`get` y `post`

### Clase 25 - 2021/12/21
- JSON Server
- Terminal MAC, Linux & Windows
- Git & GitHub

### Clase 26 - 2021/12/23
- Continuacion Git
- React JS
- Introduccion React, componentes, `npx create-react-app my app`
- `npm start` starts development server
- `npm run build` 
- `npm test`
- `npm run eject`
- Estructura inicial de carpetas:
-- `node_modules`
-- `public`
-- `src`
--- `App.css`
--- `App.js`
--- `App.test.js`
--- `Index.css`
--- `Index.js`

<br />

---

## Modulo 4: React JS

### Clase 27 - 2022/01/18
- Repaso Intro ReactJS
- Concepto de componentes
- Concepto de estado 
- Declarativo, no Imperativo
- **SPA**: Single Page Application
- Node Installation
- `npx create-react-app my-app`
- `package.json` y `package-lock.json`
- `index.js` punto de partida
- `npm run build | test | start`
- Directorios `public`, `src` y `node_modules`
- Sintaxis `JSX` JavaScript mix con HTML
- `Babel JS`
- Componentes: se definen con funciones. Su nombre debe comenzar con Mayuscula. Retornan o un unico componente o un unico elemento.
- `props`
- `ReactDOM`

### Clase 28 - 2022/01/20 (ver de nuevo)
- Migrar ToDo List a React
- Dejar Estilos dentro de directorio `public/styles` y linkear como siempre: `<link rel="stylesheet" href="styles/styles.css"/>`
- Exportar componente desde `index.js`
- Importar componente desde `App.jsx`
  - En `index.js`: `import {App} from "./App";`
  - En `App.jsx`: `export function App();`
- Tener un `.jsx` por cada componente
- Cambiar los `class` de `HTML` a `className`
- Punto de partida para los proyectos `App.jsx` - generalmente poco codigo.
- Componentes = funciones con retorno de un **unico** elemento `HTML`: 
  - `export function Pepito(){ return <h1>Title</
  h1>}`
  - `export function Pepito(){ return <> varios elementos </>`
  - `export function Pepito{ return <Fragment> varios elementos </Fragment>}`
- Uso de `props` como "parametro" de un componente (ejemplo: el dato que varía, como una foto de perfil, un nombre, etc)
  - Uso de `props.description`
  - `<taskItem description="Estudiar A."/>`
  - `<taskItem description="Estudiar B."/>`
- `Conditional rendering` o Dibujo condicional: mostrar o no en función de la existencia de por ejemplo items en un array, etc
- `React Router`: mencion al pasar

### Clase 29 - 2022/01/25
- Repaso de componentes
- Cierre `<img />`
- Errores
- Ubicacion de los `styles`
- Conditional render
- Estado
- - Hooks `use...` etc

### Clase 30 - 2022/01/27 (ver de nuevo)
- Ejemplo con Login (True o False) para Conditional Rendering 
- Funcion `map` - ejemplo de carga de información en lista desde objeto (array)
- Funcion `map` util para lista `ul` - `li`
- Ruteo y librerias **externas**
- www.npmjs.com
 
### Clase 31 - 2022/02/01 (ver de nuevo)
- Estructura de carpetas React Router
- Proyecto `react-tasklist`
- `useNavigate()`
- rutas `<Route path="/..."`
- Libreria `axios`
- Ejemplo con `db.json`

### Clase 32 - 2022/02/03 (ver de nuevo)
- Continuamos con `TaskList.jsx`
- Listado de tareas
- Libreria `axios`:
- Dentro del directorio del proyecto: `npm install axios`
- Por ser una libreria externa `import axios from "axios"`
- Hook `useEffect()`
- Piques para entrega 2

### Clase 33 - 2022/02/08
- Aplicacion de `Blog` en `HTML`, `CSS` y `JS` vanilla para migrar con `ReactJS`
- Componentes definidos:
  - `ContactPage.jsx`
  - `HomePage.jsx`
  - `BlogPage.jsx`
  - `BlogsPage.jsx`
- Estructura `src/common, pages`
- Estilos de `Bootstrap`
- Lectura de `db.json` informacion de Blogs usando `Axios`
- Introduccion Node.js

<br />

---

## Modulo 5: Node.js + Express

### Clase 34 - 2022/02/10
- Retomamos con repaso de Node.js
- Hosting
- Conexion entre funcion suma de `operations.js` e `index.js`
- En `index.js`: `const sumar = require("./operations")`
- En `operations.js` debe estar la definicion de la funcion `sumar()` y una linea con `module.exports = sumar;`
- Para exportar varias funciones, se utilizan llaves
- Object destructuring
  - Equivalencia de `const name = persona.name;`
  - Con `const {name}  = persona;`
- Se puede hacer `module.exports = ` variables, funciones, arrays, etc
- Se puede exportar a `package.json` y va a contener un conjunto de dependencias
- Con `npm init -y` vamos a generar `package.json` con el siguiente formato:
```json
{
  "name": "playground",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
- Alternativa a `npm` : `yarn`
- Ejemplo `cowsay` : `npm install cowsay`
- En `app.js`:
``` javascript
const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "Moooo",
    e: "Oo",
    T: "U",
  })
);
```
- El campo `scripts` del `package.json` sirve para los alias de los comandos `npm run`
- Resumen para `API` dentro de `scripts`:
```bash
...
"api": "json-server src/server/db.json --port 4000"
...
```
- Servidor HTTP libreria de tercero
``` javascript
const http = require("http");
const port = process.env.PORT || 4000;

conser server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello world!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
```

### Clase 35 - 2022/02/22
- Repaso hasta el momento
- Repaso de uso `npm init` para generar el archivo de dependencias `package.json`
- `NPM`
  - `npm install cowsay`
  - `npm install express`
- `HTTP Server` importante porque permite que el proceso de `node` funcione como server y no finalice.
```javascript
const http = requite("http");
const port: 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hols desde Node: " + now);
});
server.listen(port);
```
- El server se sigue levantando con el comando `npm start`
- El elemento `req` tiene varios atributos.
- Callbacks & Promises
- `fs` para `writeFile()` y `readFile()`
``` javascript
fs.readFile("src/data.json", (err, data) => {
  console.log(data);
})
```
- Promises, un ejemplo de promesa que habíamos visto: `axios`
  - `then` respuesta OK
  - `catch` respuesta de error



### Clase 36 - 2022/02/24
- Callbacks
- Ejemplo con `fileUtils.js`
``` javascript
//En index.js

const fileUtils = require("./fileUtils");
const fileName = "dist/mitexto.txt";
const fileContent = "Senpai Academy FSD8";

fileUtils.guardarArchivoCallback(fileName, fileContent, () => {
  console.log("Se guardo correctamente");
});
```
- EventLoop es lo que permite que node sea asincrono.
- Para evitar el 'promise hell' se emplea `await`. Esto trae menor nivel de indentación en el código.
``` javascript
const resArchivo1 = await fileUtils.guardarArchivoPromise(fileName1, fileContent1);
const resArchivo2 = await fileUtils.guardarArchivoPromise(fileName2, fileContent2);
```
- Introduccion a librería Express JS
`npm install express`
- Como utilizarla
``` javascript
const express = require('express');
const api = express();

api.get('/' , function(req, res) {
  req.send('Hello');
});

api.listen(4000);
```
- Como definir otra URL (y usando arrow function):
``` javascript
api.get('/usuarios', (req, res) => {
  req.send('Usuarios');
});

api.listen(4000);
```

### Clase 37 - 2022/03/03
- Repaso general FE vs BE
- Repaso de conceptos de hosting y DNS
- Ejercicio portal de noticias: `noticias-ui` & `noticias-api` manejaremos dos repositorios diferentes para cada parte.
- Express
- Scaffolding - estructura de directorios
  - `/public`
  - `/routes`
  - `/views` (no necesariemente es requerida)
- Node no refresca cambios en caliente. Debe detenerse y volver a correr el proceso. Más adelante veremos una solución a esto.
- Levantamos un endpoint `noticias-principales`
``` javascript
api.get("/noticias-principales", (req, res) => {
  res.send(noticias);
});
```
Donde `noticias` es un objeto (en un futuro será respuesta de una BD por ejemplo):
```json
const noticias = [
  { id: 1, titulo: "Noticia A" },
  { id: 2, titulo: "Noticia B" },
  { id: 3, titulo: "Noticia C" }
];
```
Y se puede visitar en localhost, puerto `4000`:
- `api.listen(4000)`
- Del lado de la UI, agregamos en `App.js` el codigo para que se haga la consulta a traves de `axios`:

```  javascript
//Buscar noticias a la api
  useEffect(() => {
    //Utilizar AXIOS para ir a la API a buscar la info
    api.get("/noticias-principales").then((response) => {
      //Actualizamos el estado con las noticias de la API
      setNoticias(response.data);
    });
  }, []);

  return (
    <div className="row">
      {noticias.map((noticiaJSON, index) => {
        return (
          <div className="col-4 mt-2" key={index}>
            <div className="card" style={{ width: "100%" }}>
              <img style={{ width: "200px" }} src={imagesUrl + noticiaJSON.image} />
              <div className="card-body">
                <h5 className="card-title">noticiaJSON.titulo}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
```

### Clase 38 - 2022/03/08
- Middlewares o Man in the Middle
- `body-parser`
- `CORS`
- Manejo de problema para visitar N noticias de cantidad variable e impredecible: `Express Routing`
  - Se puede hacer algo como en la diapositiva de Clase 37:
  ```javascript
  app.get('/book/:bookId', )
  ```
  O también otro ejemplo:
  ``` javascript
  app.get('/user/:userId/publications/:pubId', )
  ``` 
- El segundo parametro de `app.get( , )` es una funcion `callback`:
``` javascript
app.get('/contacto', function (request, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<div> <h3> Pagina de Contacto</h3> </div>");
});
```
- Para tomar los valores de `bookId` por ejemplo, serán leidos desde `request.params`
- Para seleccionar especificamente un id, luego veremos como traer desde una BD, pero por el momento lo traemos desde `const noticias = [ {...}];

### Clase 39 - 2022/03/10
- Middleware continuacion
- Ejemplo endpoint:
``` javascript
const api = express();
api.use(cors());
```
- Ejemplo de middleware
``` javascript
api.use((request, response, next) => {
  console.log("Entro en el mw);
  const codigoValidador = request.query.code;
  if(codigoValidador === "senpai"){
    next(); //Caso existoso, codigo validador OK
  }
  else{
    response.send({message: "Error, codigo invalido"});
  }
});
```
- `Logger`
- Manejo de errores
- `try - catch`
- Codigos de error `HTTP`
- Error Handler de Express
- Como reemplazar el Error Handler de Express con un Middleware

### Clase 40 - 2022/03/15 - Feature util para formulario de contacto
- Formularios para enviar a la API de Noticias
- `post` o `get` con metodos `http`
- `action`
- `enctype`
- Modificamos `ContactPage.jsx` y `index.js`
- En `express`, hay que usar el middleware `body-parser` que es una libreria util para recibir el contenido en el `body`
```javascript
const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
```
- Componentes controlados: para que un formulario se mande pero que no recargue el sitio: Ahora pasamos a utilizar `axios`
```
import { useState } from "react";
export function ContactPage() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState(");
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Prevent default OK");
};
```
- Ocurre que ademas hay que agregar el `onChange` en el codigo `html` llamando a una arrow function `handleEmailChange` o `handleMessageChange` para que se renderice bien el input del usuario
- Se importa `axios` con su `api` para manejar el envio del formulario una vez completado. Usamos la funcion `const handleSubmit`
``` javascript
const handleSubmit = (event) => {
  event.preventDefault();
  //llamar 
}
```
- Agregamos efecto visual de boton `enviar` para dar la sensación - al usuario - de que está ocurriendo algo por detrás. Utiliza un estado y un if ternario y utiliza una variable definida `loading`

### Clase 41 - 2022/03/17
- Manejo de archivos a enviar a `api`
- Utilizamos un `div` de `type='file'`
- Problema del `POST` y el envio de llaves `{}` en el payload.
- `npm install multer` Middleware para procesar el encoding
``` javascript
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'upload/' });
```
- Reparar caso del boton CARGANDO... en caso de error 400. Utiliza el if ternario y `setLoading(true)` que era un metodo definido para eso.
  - Se crea un contenedor `FormData()` en la UI
- Leer `ECMA Script 6` y object destruturing

### Clase 42 - 2022/03/22 (ver y hacer quiz)
- Acceder a una imagen que fue subida a nuestra api utilizando su URL: **Middleware Static**
```javascript
api.get("/noticias-principales", (request, response)=> {
  const indexRuta = __dirname + '/index.js';
  ...
  ...
});

```
- Libreria `path` para uso correcto de separadores de rutas
- Logramos dejar visible un directorio accesible por los visitantes. Este directorio está hosteado en un lugar separado, no necesariamente es el mismo server - puede se una BD.
- `response.sendFile(unPath)`
- `response.download()`
- Repasar dinamica de `module.export` y `require`
- Para dejar visible una carpeta completa:
```javascript
app.use(express.static(path.join(__dirname, "public")));
```

### Clase 43 - 2022/03/24 (ver y hacer quiz)
- Routers
- Buenas practicas para definir y normalizar endpoints de una `REST API`
- Definir en `src/routers/` los diferentes archivos relacionados
  - `noticias.router.js`
  - `comentarios.router.js`
- Hay que exportar estos modulos para que se los pueda requerir. Para esto:
`module.exports = noticiasRouter;`
- Limpiamos `index.js` y cargamos los `MW` en `src/middlewares` llevando las require como file system
- Debugging: ejemplo usando `VSCode Run & Debug` 

### Clase 44 - 2022/03/29
- Importancia del `module.export`
- Importancia del middleware para `404 - Not Found`
- Separacion  de los middlewares en diferentes archivos
- Repaso debbuging y middleware `logger.middleware.js`
- Autenticacion `JWT - JSON Web Token`
- Router de autenticacion
``` javascript  
api.use("/auth", /authRouter);
```
- Ejemplo de login con usuario y contraseña


### Clase 45 - 2022/03/31
- Logica de login con usuario y contraseña
- Utilizacion de `auth.router.js`
```javascript
authRouter.post("/login", async (request, response) => {
  const email = request.body.email;
  const password = reques.body.password;

  const usuario = usuairos.find((usuarioBD) => {
    return suaurioBD.email === email;
  });
  ...

});
```
- Uso `JWT` en `auth.router.js`
```javascript
const token = jwt.sign(
  {
  email: usuario.email,
  },
  JWT_SECRET
);
```

<br />

---

## Modulo 6: Base de datos (MongoDB & PostgreSQL)

### Clase 46 - 2022/04/05
- Base de datos. Teorico introduccion
- Ejemplo excel
- Postgress 
- Tabla de `Usuarios`
- Crear una tabla para la **Entrega 3** en archivo `consultas.sql`
```sql
CREATE TABLE noticias (
  id integer,
  titulo text,
  descripcion text
) 

CREATE TABLE productos (
  id integer,
  nombre text,
  precio double,
  descripcion text
)

ALTER TABLE productos ADD vencimiento datetime

DROP TABLE contents;

DELETE * FROM usuarios WHERE edad > 18; 
```

### Clase 47 - 2022/04/07
- Restricciones para las BD
- Usar `VARCHAR (n)` para limitar cantidad de caracteres
- Usar `NOT NULL` para forzar que no esté vacío
- Para implementar el uso de `IDs` que se autoincremente y se utilice como clave primaria 
```sql
id BIGSERIAL NOT NULL PRIMARY KEY
```
- `AND`, `OR`,  `IN`, etc

### Clase 48 - 2022/04/12
- Retoma trabajando con `PGAdmin`
- Controlador para conectarnos usando `Node Posgres` mediante ``npm install pg`
- Uso de variables de entorno para datos sensibles que no pueden almacenarse a simplevista en el repositorio.
- Libreria `dotenv`
```yaml
npm install dotenv
```
```javascript
require('dotenv').config();
```
- Utilizacion del archivo `.env` (no olvidar agregarlo al `.gitignore`) y dejar un `.env.sample` visible para que sea completado luego de clonar el repositorio.
- El path de `.env` es el root del proyecto por defecto. En caso contrario, se debe pasar un objeto `path` a lo siguiente:
```javascript
require('dotenv').config({
  path = ... ;
});
```

<br />

---

# Puntaje quizzes:
## Modulo 1
1. 3 pts
2. 3 pts
3. 3 pts
4. 3 pts
5. 3 pts
6. 3 pts
7. ? pts
8. 2 pts
9. 3 pts
10. 3 pts
11. 3 pts

## Modulo 2
12. 2 pts
13. 3 pts
14. 3 pts
15. 3 pts
16. 3 pts
17. 3 pts
18. ? pts
19. 3 pts 30/11/2021 
20. 3 pts 02/12/2021
21. 3 pts 07/12/2021
22. 3 pts 09/12/2021
23. 3 pts 14/12/2021
24. 3 pts 16/12/2021
25. 3 pts 21/12/2021
26. 1 pts 23/12/2021  Con 1 error del sistema

## Modulo 3
27. 3 pts 18/01/2022
28. 3 pts 20/01/2022
29. 3 pts 25/01/2022
30. 1 pts 27/01/2022  Con error del sistema
31. 2 pts 01/02/2022  Con error del sistema
32. 3 pts 03/02/2022
33. 3 pts 08/02/2022

## Modulo 4
34. 3 pts 10/02/2022
35. 2 pts 22/02/2022
36. 1 pts 24/02/2022 Con error del sistema (2pts)
37. 3 pts 03/03/2022
38. 3 pts 08/03/2022 hecha a destiempo
39. 3 pts 10/03/2022 hecha a destiempo
40. 2 pts 15/03/2022 hecha a destiempo
41. 3 pts 17/03/2022 hecha a destiempo
42. 3 pts 22/03/2022 hecha a destiempo
43. 3 pts 24/03/2022 hecha a destiempo
44. 3 pts 29/03/2022 hecha a destiempo
45. 2 pts 31/03/2022 hecha a destiempo

## Modulo 5

46. 3 pts 05/04/2022 hecha a destiempo
47. 3 pts 07/04/2022 hecha a destiempo
48. 3 pts 12/04/2022
49. 

<br />

---

# Ideas proyecto final:
- **Web personal**
- Registros de gastos / listado de gastos
- Listados de tareas con estados (Realizada, por realizar, pendiente, etc)
- Registro de calorías consumidas / listado de calorías consumidas
- Ecommerce de cualquier producto / servicio
- Blog
- Web institucional
- Encuestas / Quiz

