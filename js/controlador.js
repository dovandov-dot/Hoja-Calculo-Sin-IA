import {GenerarTabla} from "./GeneracionTabla.js";
import {TablaCalculo} from "./EstructuraDatos.js";

const filas = 30;
const columnas = 19;

const espacioTabla = document.getElementById("TablaHojaCalculo")

function InsetarDatosEstructuraDatos(e){
  if(e.target.id){
    let id = e.target.id
    let valor = document.getElementById(id).innerText
    console.log(id)
    console.log(valor)

    TablaCalculo.ActualizarValoresCelda(id, valor, null)
    console.log(TablaCalculo.ObtenerDatosCelda(id))
  }

}

if (espacioTabla) {
  let tabla = GenerarTabla(filas, columnas)  
  espacioTabla.innerHTML = tabla
  //console.log(tabla)

espacioTabla.addEventListener("input", InsetarDatosEstructuraDatos)



}
