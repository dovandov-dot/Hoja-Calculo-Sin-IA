Funcion resutaldo <- Eval(formula)
	Definir resutaldo Como Real
	resultado <- 0.0 
	resutaldo <- formula  //Aquí procesaria la formula la función Eval
	
Fin Funcion

SubProceso EcontrarValorCelda(formula)
	
FinSubProceso

Funcion resultado <- ValidarFormula(formula)
	Definir resutaldo como Texto
	resutaldo <- ""
	Si Subcadena(formula, 1,1) = "=" Entonces
		EcontrarValorCelda(formula)
		resultado <- Eval(Subcadena(formula, 2,Longitud(formula)))
	Fin Si
	
Fin Funcion

Algoritmo EvaluadroExpresionesAritmeticass
	Definir formula, resutaldo Como Texto
	formula <- ""
	resutaldo <- ""
	
	Leer formula
	
	resutaldo <- ValidarFormula(formula)
	
	Escribir resultaldo
	
FinAlgoritmo
