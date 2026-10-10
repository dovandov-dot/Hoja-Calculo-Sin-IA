Funcion resutaldo <- Eval(formula)
	Definir resutaldo Como Real
	resultado <- 0.0 
	resutaldo <- formula  //Aquí procesaria la formula la función Eval
	
Fin Funcion

Funcion diccionaro <- EcontrarValorCelda(formula)
	//Primero recorreriamos el objeto tabla 
	//Se almacena en un diccionario la clave y su valor 
	//Con array anidado, hacemos la simulacion de volver a  crear la tabla
	//Si no existe la clave en el diccionario: Ingresamos al Diccionario la clave y su valor como 0
	//Si existe la clave en el diccinario: no se hace nada y se continua con la siguiente celda. 
	//Con otra función que se llame asi misma se crean constantes: cosnt clave = valor 
	
FinSubProceso

Funcion resultado <- ValidarFormula(formula)
	Definir resutaldo Como Real
	resutaldo <- 0.0
	Dimension diccionaro[200]
	Si Subcadena(formula, 1,1) = "=" Entonces
		diccionaro <- EcontrarValorCelda(formula)
		resultado <- Eval(Subcadena(formula, 2,Longitud(formula)))
	Fin Si
	
Fin Funcion

Algoritmo EvaluadroExpresionesAritmeticass
	Definir formula Como Texto
	Definir resultado Como Real
	formula <- ""
	resutaldo <- 0.0
	
	Leer formula
	
	resutaldo <- ValidarFormula(formula)
	
	Escribir resultaldo
	
FinAlgoritmo
