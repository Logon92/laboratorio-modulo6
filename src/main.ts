// 1. Mostrar puntuación
let puntuacionJugador : number = 0; //Variable para almacenar la puntuación, inicialmente será 0

const muestraPuntuacion = () => { //Función que muestre la puntuación actual en el div
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion){
        elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionJugador}`;
    }
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion); //Invocar a la función en cuanto este disponible el DOM

// 2. Pedir carta
function dameCarta(min:number, max:number) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const obtenerNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2; // 8 + 2 = 10; 9 + 2 = 11; 10 + 2 = 12
    }
    return numeroAleatorio // 1 a 7
  }


// Mostrar imagen de carta

const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
        case 2:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
        case 3:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
        case 4:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
        case 5:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
        case 6:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
        case 7:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
        case 10:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
        case 11:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
        case 12:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
        default:
            return `¡Opps, algo ha fallado!`;
    }
  }

// 3. Mostrar carta
const pintarCarta = (urlCarta:string) => {
    const elementoImagen = document.getElementById("cartaT");
    if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
      elementoImagen.src = urlCarta;
    }
  }

const muestraCarta = () => { //Función que muestre la carta que ha salido en el div
    const elementoMuestraCarta = document.getElementById("cartaMostrada");
    let numeroAleatorio:number = dameCarta(1, 10);
    const carta = obtenerNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    sumarPuntuacion(carta);
    muestraSuma(puntuacionJugador);
    gameOver(puntuacionJugador);
    pintarCarta(urlCarta);
    puntuacionMaximaSuperada(puntuacionJugador);
    if (elementoMuestraCarta instanceof HTMLDivElement && elementoMuestraCarta !== null && elementoMuestraCarta !== undefined){
        elementoMuestraCarta.innerHTML = `¡Ha salido ${carta}!`;
    }
}

const botonPedirCarta = document.getElementById("dameCarta");
if (botonPedirCarta instanceof HTMLButtonElement && botonPedirCarta !== null && botonPedirCarta !== undefined)(
    botonPedirCarta.addEventListener("click", muestraCarta));

// 4. Sumar puntuación
const sumarPuntuacion = (carta:number) => {
    if (carta > 7) {
        puntuacionJugador = puntuacionJugador + 0.5;
    }else {
        puntuacionJugador = puntuacionJugador + carta;
    }
}

const muestraSuma = (puntuacionJugador:number) => { //Función que muestre la suma en la puntuación del div
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion){
        elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionJugador}`;
    }
}

// 5. Game Over
const gameOver = (puntuacionJugador:number) => { //Función Game Over
    const elementoGameOver = document.getElementById("gameOver");
    if (puntuacionJugador > 7.5){
        if (elementoGameOver){
        elementoGameOver.innerHTML = `💀¡Game Over! Has pasado de 7.5 puntos, vuelve a intentarlo.`;
        }
    }
    if (puntuacionJugador === 7.5){ //Partida ganada
        if (elementoGameOver){
        elementoGameOver.innerHTML = `🥳¡¡ Lo has clavado! ¡Enhorabuena!!🎉`;
    }
    }
}

const maximaPuntuacion = 7.5;

const puntuacionMaximaSuperada = (puntuacionJugador:number) => { //No se puede seguir pidiendo cuando se pasa de 7.5
    if (puntuacionJugador >= maximaPuntuacion){
        if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){
            botonPedirCarta.disabled = true;
    }
}
}

// 6. Me planto
const plantarse = () => {
    const elementoGameOver = document.getElementById("gameOver");
    if (puntuacionJugador <= 4){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `🤔 Has sido muy conservador`;
        }
    }
    if (puntuacionJugador === 4.5){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `🤔 Has sido muy conservador`;
        }
    }
    if (puntuacionJugador === 5){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `🫣 Te ha entrado el canguelo, ¿eh?`;
        }
    }
    if (puntuacionJugador === 5.5){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `🫣 Te ha entrado el canguelo, ¿eh?`;
        }
    }
    if (puntuacionJugador === 6){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `😬 Casi casi...`;
        }
    }
    if (puntuacionJugador === 6.5){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `😬 Casi casi...`;
        }
    }
    if (puntuacionJugador === 7){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `😬 Casi casi...¡ha faltado muuuy poco!`;
        }
    }
    if (puntuacionJugador === 7.5){
        if (elementoGameOver){
            elementoGameOver.innerHTML = `😬 Casi casi...¡ha faltado muuuy poco!`;
        }
    }
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){
        botonPedirCarta.disabled = true;
    }
}

const botonMePlanto = document.getElementById("meP");
if (botonMePlanto instanceof HTMLButtonElement && botonMePlanto !== null && botonMePlanto !== undefined)(
    botonMePlanto.addEventListener("click", plantarse)
    );
   



// 7. Nueva partida
const botonReset = document.getElementById("nuevaP");
    if (botonReset instanceof HTMLButtonElement && botonReset !== null && botonReset !== undefined)(
    botonReset.addEventListener("click", function(){
        window.location.reload()
    }
    )
)
