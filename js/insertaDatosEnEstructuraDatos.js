import {TablaCalculo} from "./EstructuraDatos.js";

export function InsetarDatosEstructuraDatos(e){
  if(e.target.id){
    const id = e.target.id;
    const valor = document.getElementById(id).innerText.trim();
    if (valor[0] !== "=") {
      TablaCalculo.ActualizarValoresCelda(id, valor, null);
    }else{
      const nuevaFormula = valor.substring(1)
      const resutaldoFormula = eval(nuevaFormula)
      TablaCalculo.ActualizarValoresCelda(id, valor, resutaldoFormula);
      const nuevoValor = document.getElementById(id).innerText = resutaldoFormula
    }
    console.log(TablaCalculo.ObtenerDatosCelda(id));     
  };
};