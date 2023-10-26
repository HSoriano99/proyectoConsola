let encendido = document.getElementById("btnStart")
let luzPower = document.getElementById("lightText")
let pantallaInicio = document.getElementById("screen")
let contadorLuz = 0
let reset = document.getElementById("btnReset")




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





reset.onclick = function() {
    if (contadorLuz==1) {
        pantallaInicio.src="img/pantallaInicioGB.webp"
    }
}





