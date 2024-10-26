function mifunction() {
    console.log("hola mundo")
    for (let numero = 0; numero <= 20; numero++) {

        if (numero / 2 === 0) {
            console.log(numero, "este numero es par")
        }
        if (numero / 2 !== 0) {
            console.log(numero, "este numero es impar")

        }


    }
}

var boton = document.getElementById("botonPrueba");

boton.onclick = function otra() {
    console.log("hola mundo")
    for (let numero = 0; numero <= 20; numero++) {

        if (numero % 2 === 0) {
            console.log(numero, "este numero es par")
        }
        if (numero % 2 !== 0) {
            console.log(numero, "este numero es impar")

        }


    }
}