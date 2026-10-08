export function ConvertirNumeroLetra(numeroColumna) {
    const letrasColumnas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let letras = "";
    let letra = '';
    let pocisionLetra = 0 ;

    while (numeroColumna !== 0) {
        pocisionLetra = (numeroColumna-1)%26;
        numeroColumna = Math.trunc((numeroColumna-1)/26);
        letra = letrasColumnas[pocisionLetra];
        letras = letra + letras;
    };

    return letras;
};

export function GenerarTabla(filas, columnas) {
    let i = 1;
    let j = 1;
    let tabla = "<table>";

    for (i = 1; i <= filas+1 ; i++) {
        tabla = tabla + "<tr>";
        if (i !== 1) {
            tabla = tabla + "<td>" + i + "</td>";
        } else{
            tabla = tabla + "<th>indice</th>"
        };
        for (j = 1; j <= columnas; j++) {
            if (i !== 1) {
                tabla = tabla + "<td>celda</td>"
            } else {
                tabla = tabla + "<th>"+ ConvertirNumeroLetra(j) + "</th>"
            };
        };
        tabla = tabla + "</tr>"
    };

    tabla = tabla + "</table>"
    return tabla
}