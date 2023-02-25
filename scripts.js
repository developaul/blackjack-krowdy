const btnNuevoJuego = document.querySelector('#btnNuevoJuego')

let baraja = []

/**
 * C = Treboles
 * D = Diamantes
 * H = Corazones
 * S = Espadas
 */

const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

const crearBaraja = () => {
  baraja = []

  for(let tipo of tipos) {

    for(let i = 2; i <= 10; i++) baraja.push(i + tipo)

  }

  return baraja
}


const init = (cantidadJugadores = 2) => {
  
  baraja = crearBaraja()

  console.log("🚀 ~ file: scripts.js:31 ~ init ~ baraja:", baraja)

}

btnNuevoJuego.addEventListener('click', () => {
  init()
})