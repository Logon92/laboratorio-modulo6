import {obtenerUrlCarta, partida, mP} from "./modelo";

import {dameCarta, obtenerNumeroCarta} from "./motor";

export const muestraPuntuacion = () => { //Función que muestre la puntuación actual en el div
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion){
        elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionJugador}`;
    }
}

export const pintarCarta = (urlCarta:string) => {
    const elementoImagen = document.getElementById("cartaT");
    if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
      elementoImagen.src = urlCarta;
    }
  }

export const muestraCarta = () => { //Función que muestre la carta que ha salido en el div
    const elementoMuestraCarta = document.getElementById("cartaMostrada");
    let numeroAleatorio:number = dameCarta(1, 10);
    const carta = obtenerNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    sumarPuntuacion(carta);
    muestraSuma(partida.puntuacionJugador);
    gameOver(partida.puntuacionJugador);
    pintarCarta(urlCarta);
    puntuacionMaximaSuperada(partida.puntuacionJugador);
    if (elementoMuestraCarta instanceof HTMLDivElement && elementoMuestraCarta !== null && elementoMuestraCarta !== undefined){
        elementoMuestraCarta.innerHTML = `¡Ha salido ${carta}!`;
    }
}

export const botonPedirCarta = document.getElementById("dameCarta");
  if (botonPedirCarta instanceof HTMLButtonElement && botonPedirCarta !== null && botonPedirCarta !== undefined)(
      botonPedirCarta.addEventListener("click", muestraCarta));

export const sumarPuntuacion = (carta:number) => {
        if (carta > 7) {
            partida.puntuacionJugador = partida.puntuacionJugador + 0.5;
        }else {
            partida.puntuacionJugador = partida.puntuacionJugador + carta;
        }
    }

export const muestraSuma = (puntuacionJugador:number) => { //Función que muestre la suma en la puntuación del div
        const elementoPuntuacion = document.getElementById("puntuacion");
        if (elementoPuntuacion){
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionJugador}`;
        }
    }

export const gameOver = (puntuacionJugador:number) => { //Función Game Over
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

export const puntuacionMaximaSuperada = (puntuacionJugador:number) => { //No se puede seguir pidiendo cuando se pasa de 7.5
        if (puntuacionJugador >= mP.maximaPuntuacion){
            if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){
                botonPedirCarta.disabled = true;
        }
    }
    }

export const plantarse = () => {
        const elementoGameOver = document.getElementById("gameOver");
        if (partida.puntuacionJugador <= 4){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `🤔 Has sido muy conservador`;
            }
        }
        if (partida.puntuacionJugador === 4.5){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `🤔 Has sido muy conservador`;
            }
        }
        if (partida.puntuacionJugador === 5){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `🫣 Te ha entrado el canguelo, ¿eh?`;
            }
        }
        if (partida.puntuacionJugador === 5.5){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `🫣 Te ha entrado el canguelo, ¿eh?`;
            }
        }
        if (partida.puntuacionJugador === 6){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `😬 Casi casi...`;
            }
        }
        if (partida.puntuacionJugador === 6.5){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `😬 Casi casi...`;
            }
        }
        if (partida.puntuacionJugador === 7){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `😬 Casi casi...¡ha faltado muuuy poco!`;
            }
        }
        if (partida.puntuacionJugador === 7.5){
            if (elementoGameOver){
                elementoGameOver.innerHTML = `😬 Casi casi...¡ha faltado muuuy poco!`;
            }
        }
        if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){
            botonPedirCarta.disabled = true;
        }
    }

export const botonMePlanto = document.getElementById("meP");
    if (botonMePlanto instanceof HTMLButtonElement && botonMePlanto !== null && botonMePlanto !== undefined)(
        botonMePlanto.addEventListener("click", plantarse)
        );
    
export const botonReset = document.getElementById("nuevaP");
        if (botonReset instanceof HTMLButtonElement && botonReset !== null && botonReset !== undefined)(
        botonReset.addEventListener("click", function(){
            window.location.reload()
        }
        )
    )
    