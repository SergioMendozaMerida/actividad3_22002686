var numAleatorio = Math.random()
var climaManiana = ''
var temperaturaManiana = ''
var labelManiana = document.getElementById('label-maniana')
var formulario = document.getElementById('form-clima')
var fechaIngresada = document.getElementById('fecha-ingresada')
var botonHoy = document.getElementById('boton-hoy')
var labelHoy = document.getElementById('label-hoy')

botonHoy.addEventListener('click', climaHoy)

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    setTimeout(climaTemp, 1200)
})

function climaHoy() {
    var hoy = new Date
    labelHoy.innerHTML = ''
    numAleatorio = Math.random()
    labelHoy.innerHTML += 'EL clima para esta mañana será ' + calcCLimas() + '<br>'
    numAleatorio = Math.random()
    labelHoy.innerHTML += 'EL clima para esta tarde será ' + calcCLimas() + '<br>'
    numAleatorio = Math.random()
    labelHoy.innerHTML += 'EL clima para esta noche será ' + calcCLimas() + '<br><br><br>'
    labelHoy.innerHTML += hoy
            
}

//FUNCION QUE GENERA NUMERO ALEATORIO
function generarAl(max,min) {
    var temperatura = Math.floor(Math.random()*(max - min)+min)
    return temperatura
}

//SCRIPT QUE ASIGNA EL CLIMA Y LA TEMPERATURA A LAS VARIABLES
function climaTemp() {
    if (numAleatorio <= 0.99) {
        climaManiana = 'Despejado'
        temperaturaManiana = generarAl(30,20)
    }if (numAleatorio <= 0.66) {
        climaManiana = 'Nublado'
        temperaturaManiana = generarAl(20,10)
    }if(numAleatorio <= 0.33){
        climaManiana = 'Lluvioso'
        temperaturaManiana = generarAl(10,0)
    }    

    numAleatorio = Math.random()
    labelManiana.innerHTML = 'El ambiente esta ' + climaManiana + ' a ' + temperaturaManiana + ' grados celcius'
}

function calcCLimas() {
    var clima
    var temperatura
    if (numAleatorio <= 0.99) {
        clima = 'Despejado'
        temperatura = generarAl(30,20)
    }if (numAleatorio <= 0.66) {
        clima = 'Nublado'
        temperatura = generarAl(20,10)
    }if(numAleatorio <= 0.33){
        clima = 'Lluvioso'
        temperatura = generarAl(10,0)
    }
    var respuesta = ' '+clima+' '+' a '+temperatura+' grados celcius'
    return respuesta
}