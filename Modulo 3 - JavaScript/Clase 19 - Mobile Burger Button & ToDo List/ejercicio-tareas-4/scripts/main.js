const mainForm = document.querySelector('.js-task-form');           //Selecciono el formulario con selector por clase
const inputForm = document.querySelector('.js-task-form input');    //Selecciono el input del formulario
const taskList = document.querySelector('.js-task-list');           //Seleccionar mi contenedor de tareas
const clearAllTasks = document.querySelector('.js-clear-all');      //Seleccionar el botón que borra todas las tareas

//Escuchar el evento submit
mainForm.addEventListener(
    'submit', 
    function(eventoSubmit){
        const inputValue = inputForm.value;     //Guardamos el valor del input
        crearTareaElemento(inputValue);         //Crear el elemento de la tarea
        inputForm.value = '';                   //Limpio el value de la caja de texto
        eventoSubmit.preventDefault();          //Detenemos el comportamiento por defecto del form para que no refresque la pagina completa
    }
);

//Escuchar el click en el botón clearAll
clearAllTasks.addEventListener(
    'click',
    function(miInfoDelEvento){
        taskList.innerHTML = '';                //Borro el innerHTML
    }
);

//Creamos una funcion para encapsular la logíca de crear el li
function crearTareaElemento(tarea){
    const tareaLi = document.createElement('li');       //Crear un li para luego agregarle el texto del usuario
    tareaLi.classList.add('task');                      //Agregamos la clase task al li
   
    const tareaSpan = document.createElement('span');   //Crear un span para indicar el texto
    tareaSpan.textContent = tarea;
    
    const tareaA = document.createElement('a');         //Creamos un a pra poder borrarla individualmente
    tareaA.classList.add('delete-task');
    
    const tareaAIcon = document.createElement('span');  //Crear un span para el icono del a
    tareaAIcon.classList.add('icon');
    
    tareaA.appendChild(tareaAIcon);                     //Agregamos el span.icon al a

    //Agregar el span y el a como hijo del li
    tareaLi.append(
        tareaSpan, 
        tareaA
    );

    //Espero el click en el botón de borrar
    tareaA.addEventListener(
        'click',
        function(event){
            const target = event.target;            //A que fue clickeado
            const tareaLiPadre = target.parentNode; //Guardo mi padre li
            tareaLiPadre.remove();                  //Remover del DOM
        }
    );
    taskList.appendChild(tareaLi);                  //Agrego mi li al DOM
}

//Creamos las tareas iniciales desde un fetch
const tareasPromise  = fetch('https://jsonplaceholder.typicode.com/users/1/todos');
tareasPromise
    //Si desean entenderlo luego les paso un link
    .then((resp) => resp.json())        
    //Ya tengo el listado de tareas
    .then(function(tareas){
        //Iterar las tareas que nos dió el servidor y creamos un li por cada una
        for (const tareaObj of tareas) {
            crearTareaElemento(tareaObj.title);     //Creo un elemento por cada tarea llamando la función

        };
    });