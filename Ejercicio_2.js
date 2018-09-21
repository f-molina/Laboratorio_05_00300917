function ordenar(arreglo = [25,1,200,350,]){
    var aux;
    for(let i=0; i<=arreglo.length; i++){
        for(let j=0; j<=(arreglo.length-1); j++){
            if(arreglo[j-1]>arreglo[j]){
                aux = arreglo[j-1];
                arreglo[j-1] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    return arreglo;
}

console.log(ordernar());