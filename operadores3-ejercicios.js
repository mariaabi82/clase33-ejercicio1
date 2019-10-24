
const saludo = "Hola";
const nombre = prompt("Por favor decime tu nombre");
const año = prompt("Por favor decime tu año de nacimiento");
const mes = prompt("Por favor decime tu mes de nacimiento en número");
let edad = mes > 11 && 2019 - año - 1 || mes < 11 && 2019 - año;
console.log(nombre)
alert(`Hola ${nombre}! Tu edad es ${edad}`)


// ** SOLUCIÓN IVI
// const nombre = prompt("Escribí tu nombre");
// const mes = prompt("Escribí el mes de tu cumpleaños");
// const anio = prompt("Escribí tu año de nacimiento");
// let mesActual = "octubre";
// let anioActual = 2019;
// let edad;
// (mes === "noviembre" || mes === "diciembre") || alert("Tu edad es: " + (anioActual - anio));
// (mes !=="noviembre" || mes !== "diciembre") && alert(`Tu edad es ${(anioActual-1) - anio}`);