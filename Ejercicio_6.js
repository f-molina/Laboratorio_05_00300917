function valorAbsoluto(n = 10){
    if (typeof(n)!="number"){return "No es numero"}
    if (n>=0){return n;}
    if (n<0){return n*(-1)}
}