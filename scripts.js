const btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
  btnPedirCarta = document.querySelector('#btnPedirCarta'),
  btnDetener = document.querySelector('#btnDetener'),
  puntosHTML = document.querySelectorAll('small'),
  cartasDeJugadores = document.querySelectorAll('.cards')

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
  puntosDeJugadores = []

  for(let i = 0; i < cantidadJugadores; i++) {
    puntosDeJugadores.push(0)
  }
  
  for(let puntosDeJugador in puntosDeJugadores) {
    puntosHTML[puntosDeJugador].textContent = 0;
    cartasDeJugadores[puntosDeJugador].textContent = '';
  }

  habilitarBotones()
}

const habilitarBotones = () => {
  console.log('se habilitaron botones')
  btnPedirCarta.disabled = false
  btnDetener.disabled = false
}

const deshabilitarBotones = () => {
  btnPedirCarta.disabled = true
  btnDetener.disabled = true
}

const obtenerCarta = () => { 
  if(baraja.length <= 0) throw "No hay cartas en la baraja"

  return baraja.pop()
}

const obtenerValorDeCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1)

  return !isNaN(valor) ? Number(valor) : 
    valor === 'A' ? 11 : 10
}

const acumularPuntos = ({carta, turno}) => {
  puntosDeJugadores[turno] += obtenerValorDeCarta(carta)
  puntosHTML[turno].textContent = puntosDeJugadores[turno]

  return puntosDeJugadores[turno]
}

const crearCarta = ({carta, turno}) => {
  const imagen = document.createElement('img');
  imagen.src = `assets/${carta}.png`
  imagen.classList.add('carta')
  cartasDeJugadores[turno].append(imagen)
}

const determinarGanador = ([ puntosDeJugador, puntosDeComputadora ]) => {
  setTimeout(() => {
    if(puntosDeJugador > 21) {
      alert('Computadora gana!')
      return
    }

    if(puntosDeComputadora > 21) {
      alert('Jugador Gana!')
      return
    }

    if(puntosDeJugador === puntosDeComputadora) {
      alert('Nadie gana :(')
      return
    }

    if(puntosDeJugador > puntosDeComputadora) {
      alert('Jugador gana!')
      return
    }

    alert('Computadora gana!')
  }, 400)
}

const turnoComputadora = (puntosMinimos) => {
  let puntosDeComputadora = 0

  const turno = puntosDeJugadores.length - 1

  do {
    const carta = obtenerCarta()
    puntosDeComputadora = acumularPuntos({ carta, turno })
    crearCarta({ carta, turno })
  } while(puntosDeComputadora < puntosMinimos && puntosMinimos <= 21)

  determinarGanador(puntosDeJugadores)
}

btnNuevoJuego.addEventListener('click', () => {
  init()
})

btnPedirCarta.addEventListener('click', () => {
  const carta = obtenerCarta()
  const puntosDeJugador = acumularPuntos({ carta, turno: 0 })
  crearCarta({ carta, turno: 0 })

  if(puntosDeJugador < 21) return

  deshabilitarBotones()
  turnoComputadora(puntosDeJugador)
})

btnDetener.addEventListener('click', () => {
  deshabilitarBotones()
  turnoComputadora(puntosDeJugadores[0])
})