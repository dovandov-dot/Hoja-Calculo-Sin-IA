import { GenerarTabla } from "./GeneracionTabla";

const filas = 30;
const columnas = 19;

const espacioTabla = document.getElementById("TablaHojaCalculo")

if (espacioTabla) {
  let tabla = GenerarTabla(filas, columnas)  
  espacioTabla.innerHTML = tabla
  console.log(tabla)
};