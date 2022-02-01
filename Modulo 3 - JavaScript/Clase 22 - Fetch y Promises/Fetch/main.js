// fetch() devuelve un objeto Promise
const tareas = fetch('https://jsonplaceholder.typicode.com/users/1/todos')

console.log(tareas)


// Los objetos Promise tienen metodos then() y catch()
tareas.then(function(respon){
    console.log(respon)
});