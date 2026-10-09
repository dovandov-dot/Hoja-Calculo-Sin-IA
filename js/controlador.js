import {GenerarTabla} from "./GeneracionTabla.js";
import {TablaCalculo} from "./EstructuraDatos.js";

const filas = 30;
const columnas = 19;

const espacioTabla = document.getElementById("TablaHojaCalculo")

function DesenforcarCelda(e){
  if(e.target.id){
    if (e.code === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };DesenforcarCelda
};

function InsetarDatosEstructuraDatos(e){
  if(e.target.id){
    const id = e.target.id;
    const valor = document.getElementById(id).innerText.trim();
    TablaCalculo.ActualizarValoresCelda(id, valor, null);
    console.log(TablaCalculo.ObtenerDatosCelda(id));     
  };
}

if (espacioTabla) {
  let tabla = GenerarTabla(filas, columnas)  
  espacioTabla.innerHTML = tabla;
  //console.log(tabla)

  espacioTabla.addEventListener("keydown", DesenforcarCelda);
  espacioTabla.addEventListener("blur", InsetarDatosEstructuraDatos, true);
}
