//Ejercicio1: nuestro codigo tiene una falla, el dia solo tiene 24 horas y no se sta tomando el caso que sea una hora invalida

const time = 13;
let greeting;

if(time < 12) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good afternoon";
} else if (time >= 20) {
    greeting = "Good evening";
} else if (time > 24) {
    greeting = "Not a valid hour time"
}

console.log(greeting)

//Ejercicio 2: Crear un ciclo desde 0 hasta 100. Mostrar todos los numeros pares del ciclo con console.log()