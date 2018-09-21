function binario(x=254){
    if (x<0){return "valores negativos no permitidos";}
    let arr=[];
    while (x!=0){
        arr.push(x%2);
        x=Math.floor(x/2);   
    }
    arr=arr.reverse().join("");
    return arr;
}