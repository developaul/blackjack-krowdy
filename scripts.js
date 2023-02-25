const btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
  btnPedirCarta = document.querySelector('#btnPedirCarta'),
  btnDetener = document.querySelector('#btnDetener')


let baraja = []
let puntosDeJugadores = []

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

    for(let especial of especiales) baraja.push(especial + tipo)
  }

  return _.shuffle(baraja) 
}


const init = (cantidadJugadores = 2) => {
  
  baraja = crearBaraja()

  for(let i = 0; i < cantidadJugadores; i++) {
    puntosDeJugadores.push(0)
  }
  
  habilitarBotones()
}

const habilitarBotones = () => {
  btnPedirCarta.disabled = false
  btnDetener.disabled = false
}

btnNuevoJuego.addEventListener('click', () => {
  init()
})