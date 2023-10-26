let encendido = document.getElementById("btnStart")
let luzPower = document.getElementById("lightText")
let pantallaInicio = document.getElementById("screen")
let contadorLuz = 0
let contadorPantalla = 0
let reset = document.getElementById("btnReset")
let btnA = document.getElementById("btnA")




encendido.onclick = function() {
    console.log(contadorLuz)
    if (contadorLuz==0) {
        luzPower.style.color="rgb(0, 255, 8)"
        pantallaInicio.src="img/pantallaInicioGB.webp"
        contadorLuz++
    }else if (contadorLuz==1) {
        luzPower.style.color="red"
        pantallaInicio.src="img/pantallaSinSenal.jpeg"
        contadorLuz--
    }

    console.log(contadorLuz)

}

btnA.onclick = function() {
    console.log("estoy aqui")
    console.log(contadorLuz)

    if (contadorLuz==1 && contadorPantalla==0) {
        pantallaInicio.src="img/img1mario.png"
        contadorPantalla++
        console.log(contadorPantalla)
 
    } else if (contadorPantalla==1) {
        console.log("entra el else?")
        pantallaInicio.src="img/img2mario.png"
        contadorPantalla++
        console.log(contadorPantalla)

    } else if (contadorPantalla==2) {
        console.log("entra el 2ndo else?")
        pantallaInicio.src="img/img3mario.png"
        contadorPantalla++
        console.log(contadorPantalla)

    } else if (contadorPantalla==3) {
        console.log("entra el 2ndo else?")
        pantallaInicio.src="img/img4mario.png"
        contadorPantalla++
        console.log(contadorPantalla)
    }


}
btnB.onclick = function() {
    console.log("estoy aqui")
    console.log(contadorLuz)

    if (contadorLuz==1 && contadorPantalla==1) {
        pantallaInicio.src="img/pantallaInicioGB.webp"
        contadorPantalla--
        console.log(contadorPantalla)
 
    } else if (contadorPantalla==2) {
        console.log("entra el else?")
        pantallaInicio.src="img/img1mario.png"
        contadorPantalla--
        console.log(contadorPantalla)

    } else if (contadorPantalla==3) {
        console.log("entra el 3ndo else?")
        pantallaInicio.src="img/img2mario.png"
        contadorPantalla--
        console.log(contadorPantalla)

    } else if (contadorPantalla==4) {
        console.log("entra el 4ndo else?")
        pantallaInicio.src="img/img3mario.png"
        contadorPantalla--
        console.log(contadorPantalla)
    }

}


reset.onclick = function() {
    if (contadorLuz==1) {
        pantallaInicio.src="img/pantallaInicioGB.webp"
        contadorPantalla=0
        console.log(contadorPantalla)
    }
}





