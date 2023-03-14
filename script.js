let dato1 = document.querySelector(".dato1")
let dato2 = document.querySelector(".dato2")

let suma = document.querySelector(".suma")
let resta = document.querySelector(".resta")
let division = document.querySelector(".division")
let multiply = document.querySelector(".multiplicacion")
let borrar = document.querySelector(".borrar")

let respuesta = document.querySelector(".resultado")

function comprobar(callback) {
	let veriDato1 = parseInt(dato1.value)
	let veriDato2 = parseInt(dato2.value)
	// return veriDato1 && veriDato2
	if (Number.isNaN(veriDato2 && veriDato1)) {
		alert("no se puede operar")
		return
	}
	respuesta.innerHTML = callback(veriDato1, veriDato2)
}
function sumar(dt1, dt2) {
	return dt1 + dt2
}
function restar(dt1, dt2) {
	return dt1 - dt2
}
function dividir(dt1, dt2) {
	return dt1 / dt2
}
function multicar(dt1, dt2) {
	return dt1 * dt2
}

function borrador() {
	dato1.value	= ""
	dato2.value	= ""
	respuesta.innerHTML = ""
}
suma.addEventListener("click", () => comprobar(sumar))
resta.addEventListener("click", () => comprobar(restar))
division.addEventListener("click", () => comprobar(dividir))
multiply.addEventListener("click", () => comprobar(multicar))

borrar.addEventListener("click", borrador)