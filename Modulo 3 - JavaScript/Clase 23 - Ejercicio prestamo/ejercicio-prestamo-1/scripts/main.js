const calcularBtn = document.querySelector('#calcular-btn');            //Levanto el botón calcular
const inputMontoElement = document.querySelector('.js-monto');          //Levanto el input de monto
const inputCuotasElement = document.querySelector('.js-cuotas');        //Levanto el input de cuotas
const valorCuotaElement = document.querySelector('.js-valor-cuota');    //Levanto el <p> para mostrar el resultado

//Agrego el escucha
calcularBtn.addEventListener('click', function(){
    const monto = inputMontoElement.value;              //Obtener el valor del monto con inputMontoElement.value  
    const cuotas = inputCuotasElement.value;            //Obtener el valor de las cuotas con inputCuotasElement.value
    const valorCuota = monto / cuotas;                  //Calcular monto cuota
    valorCuotaElement.textContent = '$U' + valorCuota;  //Insertamos el resultado en el p con .textContent = 
});