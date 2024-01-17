function convertirMayuscula(){ // funcion para capturar la letra y convertir en mayuscula.
    letra=Document.getElementById("letraPrueba").value
    console.log(letra); //mostramos la letra capturada
    document.getElementById("letraPrueba").value = letra.toUppferCase()
}