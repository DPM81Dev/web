function msg() {
	// Comentario de una linea en javascript
	mensaje = "Hola Mundo JS"
	console.log(mensaje);
	console.log(mensaje);
	console.log("Paso1");
	alert(mensaje);
	/*
	 * Comentarios de varias lineas, como ves es igual que en Java
	 */
}

function sum(num1, num2) {
	console.log("Numero1: " + num1);
	console.log("Numero2: " + num2);
	return num1 + num2;
}

function mensajeTrueFalse() {
	var respuesta = confirm("Estas seguro?");
	if (respuesta == true) {
		alert("ok");
	} else {
		alert("cancel");
	}
}

function mensajePregunta() {
	var nombre = prompt("¿Cuál es tu nombre?");
	alert("Mi nombre es " + nombre);
}

function pintaTexto(texto, numVeces) {
	for (i=1; i<=numVeces; i++)  
	{  
		document.write(texto + "<br/>")  
	}  
}


function pintaArray(){
	var peliculas=["Matrix","Terminator","Blade Runner"];
	for (i=1; i<=peliculas.length; i++)  
	{  
		document.write(peliculas[i] + "<br/>")  
	} 
}
