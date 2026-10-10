import {GenerarTabla} from "./GeneracionTabla.js";
import {TablaCalculo} from "./EstructuraDatos.js";

const filas = 30;
const columnas = 19;

const espacioTabla = document.getElementById("TablaHojaCalculo")

function MostrarValorIngresado(e){
  if (e.target.id && (TablaCalculo.ObtenerDatosCelda(e.target.id) !== null)) {
    const id = e.target.id
    const celda = TablaCalculo.ObtenerDatosCelda(id)
    const valor = document.getElementById(id).innerHTML = celda.datosIngresados
    console.log(valor, celda)
  }else{
    const valor = document.getElementById(e.target.id).innerHTML = ""
  };
}

function DesenforcarCelda(e){
  if(e.target.id){
    if (e.code === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };
};

function InsetarDatosEstructuraDatos(e){
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
}

if (espacioTabla) {
  let tabla = GenerarTabla(filas, columnas)  
  espacioTabla.innerHTML = tabla;
  //console.log(tabla)

  espacioTabla.addEventListener("focus", MostrarValorIngresado, true)
  espacioTabla.addEventListener("keydown", DesenforcarCelda);
  espacioTabla.addEventListener("blur", InsetarDatosEstructuraDatos, true);
}
