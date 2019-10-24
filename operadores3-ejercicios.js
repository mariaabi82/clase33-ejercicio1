
const saludo = "Hola";
const nombre = prompt("Por favor decime tu nombre");
const año = prompt("Por favor decime tu año de nacimiento");
const mes = prompt("Por favor decime tu mes de nacimiento en número");
let edad = mes > 11 && 2019 - año - 1 || mes < 11 && 2019 - año;
console.log(nombre)
alert(`Hola ${nombre}! Tu edad es ${edad}`)
