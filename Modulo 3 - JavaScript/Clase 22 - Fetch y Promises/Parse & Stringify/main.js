//JSON y Promises

// JSON.parse() metodo para transformar texto a objeto
// JSON.stringify() metodo para transformar objeto a texto

//URL util: https://jsonplaceholder.typicode.com/users


const tarea = {
    complete: false,
    description: "Estudiar JavaScript"
};

console.log("Tarea sin stringify");
console.log(tarea);

console.log("Tarea con stringify");
tareaJSON = JSON.stringify(tarea);
console.log(tareaJSON);




// const request = fetch("https://google.com");
// request.then(console.log("Camino"))


