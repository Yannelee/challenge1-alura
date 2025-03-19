let listaAmigos = []

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function añadirAmigo() {
  
  let nombreAmigo = document.getElementById('nombreAmigo').value

  nombreAmigo == ''  ? alert('Debes añadir un nombre') : (listaAmigos.push(nombreAmigo), limpiarCaja())
  if(listaAmigos.length !== 0){
    console.log(listaAmigos);
    asignarTextoElemento('.texto__listaAmigos', listaAmigos)
  }

  if (listaAmigos.length > 1 ) document.getElementById('sortear').removeAttribute('disabled')
  
}

function sortear() {
  let amigoSorteado =  Math.floor(Math.random()*listaAmigos.length);
  asignarTextoElemento('#amigoElegido', `El Amigo elegido es: ${listaAmigos[amigoSorteado]}`)

  document.querySelector('#amigoElegido').removeAttribute('hidden')
  document.querySelector('#reiniciar').removeAttribute('hidden')
  document.querySelector('#sortear').setAttribute('disabled','true')
  document.querySelector('#titulo').setAttribute('hidden','true')
  document.querySelector('#añadirNombre').setAttribute('disabled','true')
}

function limpiarCaja() {
  document.querySelector('#nombreAmigo').value = '';
}

function reiniciarJuego() {
  listaAmigos = []
  asignarTextoElemento('.texto__listaAmigos', listaAmigos)
  limpiarCaja()
  document.querySelector('#titulo').removeAttribute('hidden')
  document.querySelector('#amigoElegido').setAttribute('hidden','true')
  document.querySelector('#reiniciar').setAttribute('hidden','true')
  document.querySelector('#sortear').setAttribute('disabled','true')
}