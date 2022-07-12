console.log ("Contactanos y calcula el costo de tu proyecto")


// let nombre
// const nombrecg = localStorage.getItem('name')


// if (nombrecg) {
//     nombre = nombrecg
// } else {
//     nombre = prompt("Ingrese su nombre")
//     localStorage.setItem("name", nombre)
// }


// // let nombre = prompt ("Ingrese su nombre")


// let celular
// const celularcg = localStorage.getItem('cel')


// if (celularcg) {
//     celular = celularcg
// } else {
//         celular = prompt ("Ingrese su celular")
//         // while(isNaN(celular)) {alert("No es un numero válido, ingrese su celular");
//         // celular = prompt("Ingresar un numero valido")}
//     localStorage.setItem("cel", celular)
// }

// // let celular = prompt ("Ingrese su celular")
// // while(isNaN(celular)) {alert("No es un numero válido, ingrese su celular");
// // 	celular = prompt("Ingresar un numero valido")}

// let mail = prompt ("Ingrese su mail")

// const newsletter = prompt ("Queres suscribirte a nuestro newsletter?").toLowerCase()
//  switch (newsletter) {
//  	case "si":
//  		alert("A partir de ahora recibiras nuestras novedades")
//  		break
//  	case "no":
//  		alert ("no te suscribiste, te esperamos la proxima!")
//  		break
//  	default:
//  		alert("No ingresaste una respuesta válida")
//  }

// let presupuesto = prompt("Queres presupuestar tu proyecto?").toLowerCase()
// if(presupuesto == "si"){
// let ambientes = Number (prompt ("Ingrese la cantidad de ambientes a diseñar"))
// 	while(isNaN(ambientes)) {alert("No es un numero válido, ingrese numero de ambientes");
// 	ambientes = prompt("Ingresar un numero valido")
// }


// 	function multiplicar(a, b) { return a * b}
// 	let resultado = multiplicar (ambientes, 10000)
// 	alert("Tu presupuesto aproximado es de $" + resultado + ". Cualquier consulta ponete en contacto con nosotros")



// const arrayCantidad = [
//     {nombre: 1, descuento: 1},
//     {nombre: 2, descuento: 0.975},
//     {nombre: 3, descuento: 0.95},
//     {nombre: 4, descuento: 0.925},
//     {nombre: 5, descuento: 0.9},
//     {nombre: 6, descuento: 0.875},
//     {nombre: 7, descuento: 0.85},
//     {nombre: 8, descuento: 0.825},
//     {nombre: 9, descuento: 0.80},
//     {nombre: 10, descuento: 0.775},
// ]

// const precioFinal = arrayCantidad.map( (prod) => {
//     return {
//         nombre: prod.nombre,
//         descuento: prod.descuento,
//         precioTotal: Math.round(prod.nombre * prod.descuento * 10000)
//     }
// } )
// console.log(precioFinal)



// else if (presupuesto == "no"){}
// else { prompt("ingrese respuesta valida")}


// let mensaje = prompt ("Dejanos tu consulta")

const formulario = document.querySelector('#my-form')
const inputNombre = document.querySelector('#input-nombre')
const inputCel = document.querySelector('#input-cel')
const inputMail = document.querySelector('#input-mail')
const inputAmbiente = document.querySelector('#input-ambientes')
const inputMensaje = document.querySelector('#input-mensaje')
const btnEnviar = document.querySelector('#btn-enviar')

btnEnviar.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log("submit del form")
    console.log(inputNombre.value)
    console.log(inputCel.value)
    console.log(inputMail.value)
    console.log(inputAmbiente.value)
    console.log(inputMensaje.value)
 }
 )



// const{ value: accept } = await
Swal.fire({
  title: 'Queres subscribirte a nuestro newsletter?',
  input: 'checkbox',
  inputValue: 1,
  inputPlaceholder:
    'Quiero recibir novedades',
  confirmButtonText:
    'Continue <i class="fa fa-arrow-right"></i>',
  inputValidator: (result) => {
    return !result && 'You need to agree with T&C'
  }
})

if (accept) {
  Swal.fire('Bienvenido a CG Design :)')
}
