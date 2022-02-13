# FullStack developer - Senpai Academy

Docente: Gustavo Rodriguez

1. Introducción y nivelación
2. HTML + CSS
3. JavaScript
4. ReactJS
5. Node.js + Express
6. MongoDB & PostgreSQL

# Fechas de entregas
1.  07 - noviembre - 2021 | Puntaje 100%
2.  13 - febrero - 2022 | Puntaje 
3.  17 - abril - 2022 | Puntaje

# Clases

## Modulo 1: Introducción y nivelación
### Clase 1
- Intro a programacion.
- Frontend, backend, servidor, base de datos.
- Github

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
- Libreria `Axios`:
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

## Modulo 5: Node.js + Express

### Clase 3_ - 2022/02/10 (ver de nuevo)
- Retomamos con repaso de Node.js
- Hosting
- Conexion entre funcion suma de `operations.js` e `index.js`

## Modulo 6: Base de datos (MongoDB & PostgreSQL)

## Modulo 6: Base de datos (MongoDB & PostgreSQL)
 

# Puntaje quizzes:
## Modulo 1
1. 3 pts
2. 3 pts
3. 3 pts
4. 3 pts
5. 3 pts
6. 3 pts
7.
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
18.
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

# Ideas proyecto final:
- **Web personal**
- Registros de gastos / listado de gastos
- Listados de tareas con estados (Realizada, por realizar, pendiente, etc)
- Registro de calorías consumidas / listado de calorías consumidas
- Ecommerce de cualquier producto / servicio
- Blog
- Web institucional
- Encuestas / Quiz
