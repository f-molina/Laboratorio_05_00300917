function areaCirculo(){
    let radio = prompt("Digite el radio: ");
    if(radio<=0){return "ERROR:El radio debe ser mayor que cero."}
    let area = (3.1416)*radio*radio;
    return area;
}