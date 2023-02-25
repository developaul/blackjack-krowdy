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

const obtenerCarta = () => { 
  if(baraja.length <= 0) throw "No hay cartas en la baraja"

  return baraja.pop()
}

const obtenerValorDeCarta = (carta) => {
  console.log("🚀 ~ file: scripts.js:55 ~ obtenerValorDeCarta ~ carta:", carta)


  // const valor = 


}

const acumularPuntos = ({carta, turno}) => {
  const valorDeCarta = obtenerValorDeCarta(carta)


  // puntosDeJugadores[turno] = puntosDeJugadores[turno] + 

}

btnNuevoJuego.addEventListener('click', () => {
  init()
})

btnPedirCarta.addEventListener('click', () => {
  const carta = obtenerCarta()

  acumularPuntos({ carta, turno: 0 })

})