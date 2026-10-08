export function ConvertirNumeroLetra(numeroColumna) {
    let letrasColumnas = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
    let letras = "";
    let letra = '';
    let pocisionLetra = 0 ;

    while (numeroColumna !== 0) {
        pocisionLetra = (numeroColumna-1)%26;
        numeroColumna = Math.trunc((numeroColumna-1)/26);
        letra = letrasColumnas[pocisionLetra];
        letras = letra + letras;
    };
};

export function GenerarTabla(filas, columnas) {
    
}