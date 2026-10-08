Funcion letras <- ConvertirNumeroLetra ( numeroColumna )
	
Fin Funcion

SubProceso GenerarTabla(filas, columnas)
	Definir i, j Como Entero
	i <- 0
	j <- 1
	
	// se pone un <table>
	Para i <- 1 Hasta filas+1 Con Paso 1 Hacer
		//Aqui se genera un <tr>
		Si i <> 1 Entonces
			//Se genera un <td>Numero de fila</td>
			Escribir i-1
		SiNo
			//Se genera un <th>Indice< /th>
			Escribir "indice"
		Fin Si
		Para j <- 1 Hasta columnas Con Paso 1 Hacer
			
		Fin Para
	Fin Para
FinSubProceso

Algoritmo GeneracionTabla
	Definir FILAS, COLUMNAS Como Entero
	FILAS <- 30
	COLUMNAS <- 19
	
	GenerarTabla(FILAS, COLUMNAS)
FinAlgoritmo
