export function dameCarta(min:number, max:number) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export const obtenerNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2; // 8 + 2 = 10; 9 + 2 = 11; 10 + 2 = 12
    }
    return numeroAleatorio // 1 a 7
  }
  
