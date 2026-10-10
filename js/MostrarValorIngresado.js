import {TablaCalculo} from "./EstructuraDatos.js";

export function MostrarValorIngresado(e){
  if (e.target.id && (TablaCalculo.ObtenerDatosCelda(e.target.id) !== null)) {
    const id = e.target.id
    const celda = TablaCalculo.ObtenerDatosCelda(id)
    const valor = document.getElementById(id).innerHTML = celda.datosIngresados
    console.log(valor, celda)
  }else{
    const valor = document.getElementById(e.target.id).innerHTML = ""
  };
};