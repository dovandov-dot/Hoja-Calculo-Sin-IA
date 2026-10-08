export class Celda {
    constructor(celdaElegida, textoIngresado, formulaIngresada) {
        this.clave = celdaElegida;
        this.datosIngresados = textoIngresado;
        this.resultadoFormula = formulaIngresada;
        this.celdasDepende = [];
        this.celdasDependen = [];
    };
};

export class Tabla {
    constructor() {
        this.celdas = {};
    }

    ObtenerDatosCelda(claveCelda){
        if(this.celdas[claveCelda] ){
            return this.celdas[claveCelda];
        }else{
            return null;
        };
    };

    ActualizarValoresCelda(claveCelda, textoIngresado,formulaIngresada){
        if (textoIngresado === "" || formulaIngresada==="") {
            delete this.celdas[claveCelda];
            return;
        }

        if (!this.celdas[claveCelda]) {
            this.celdas[claveCelda] = new Celda(claveCelda, textoIngresado, formulaIngresada);
        } else {
            this.celdas[claveCelda].datosIngresados = textoIngresado;
            this.celdas[claveCelda].resultadoFormula = formulaIngresada;
        }

    }
}

export const TablaCalculo = new Tabla()