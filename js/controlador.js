import {GenerarTabla} from "./GeneracionTabla.js";
import {MostrarValorIngresado} from "./MostrarValorIngresado.js"
import {DesenforcarCelda} from "./desenforcarCelda.js";
import {InsetarDatosEstructuraDatos} from "./insertaDatosEnEstructuraDatos.js";

const filas = 30;
const columnas = 19;

const espacioTabla = document.getElementById("TablaHojaCalculo")

if (espacioTabla) {
  const tabla = GenerarTabla(filas, columnas)  
  espacioTabla.innerHTML = tabla;
  //console.log(tabla)

  espacioTabla.addEventListener("focus", MostrarValorIngresado, true)
  espacioTabla.addEventListener("keydown", DesenforcarCelda);
  espacioTabla.addEventListener("blur", InsetarDatosEstructuraDatos, true);
}
