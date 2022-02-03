//Seleccion de los elementos de interes: formulario y boton listar
const contactoForm = document.querySelector('#form');
const listarBtn = document.querySelector('#listar');

//Escucho el click
listarBtn.addEventListener('click', function(){
    //GET (fetch)
    const contactoPromise  = fetch('http://localhost:3000/contactos', {
        method: 'GET'
    });
    contactoPromise
        .then((resp) => resp.json())
        .then(function(contactos){
            console.log(contactos)
        });
});

//Escuchar evento submit
contactoForm.addEventListener('submit', function(event){
    event.preventDefault();             //prevenir que se recargue toda la pagina
    const data = formDataToJSON(this);  //info del form
    //POST
    fetch('http://localhost:3000/contactos', {
        method: 'POST',                             //observar que es POST para escribir
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)                  //el formulario convertido a JSON
    })
    return false;
});

function formDataToJSON(FormElement){    
    const formData = new FormData(FormElement);
    const json = {};
    for (const [key, value]  of formData.entries()) {
        json[key] = value;
    }
    return json
}