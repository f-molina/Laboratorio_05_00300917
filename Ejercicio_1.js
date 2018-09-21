function palindromo(texto = 'ala'){
    if(typeof(texto)!= "string"){
        return "no es cadena"
    }else{
        if(texto.split("").reverse().join("")==texto){
            return "palindroma!"
        }
    }
}

console.log(palindromo())