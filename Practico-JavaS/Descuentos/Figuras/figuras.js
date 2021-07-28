//Codigo de cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado * 4;
} 
/*console.log("El perimetro de cuadrado es: " + perimetroCuadrado() + "cm");*/
function areaCuadrado (lado){
    return lado * lado;
}
/*console.log("El area del cuadrado es: " + areaCuadrado() + "cm2");*/
console.groupEnd();

//Codigo triangulo
console.group("Triangulo");
// const ladoTrianguloUno = 6;
// const ladoTrianguloDos = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base
}
function areaTriangulo(base, altura){
    return base * altura / 2;
}

// console.log("La altura de triangulo es: " + alturaTriangulo + "cm");

// console.log("El perimetro del triagulo es: " + perimetroTriangulo + "cm")

// console.log("El area del triangulo es: " + areaTriangulo)
console.groupEnd();

//isoceles
function alturaIsoceles(lado1, lado2, base){
    return Math.sqrt((lado1 * lado1) - (base * base) / 4);
}

//Codigo circulo
console.group("Circulo");
function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}
const pi = Math.PI;
function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * pi;
}

function areaCirculo (radioCirculo){
    return (radioCirculo * radioCirculo) * pi;
}

// console.log("El radio del circulo es: " + radioCirculo + "cm");
// console.log("El diametro del circulo es: " +  diametroCirculo + "cm");
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
// console.log("EL area del circulo es: " + areaCirculo + "cm");
console.groupEnd();

//HTML

function calcPeriCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es de: " + perimetro);
}

function calcAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area es de: " + area);
}

function calcPeriTriangulo(){
    const input1 = document.getElementById("ladoUno");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("ladoDos");
    const value2 = Number(input2.value);
    const base = document.getElementById("base");
    const value3 = Number(base.value);
    
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcAreaTriangulo(){
    const input1 = document.getElementById("base");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("altura");
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert("El area es de: " + area);
}

function isoceles(){
    const input1 = document.getElementById("ladoA");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("ladoB");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("baseIsoceles");
    const value3 = Number(input3.value);

    const altura = alturaIsoceles(value1, value2, value3);
    if(value1 != value2){
        alert("No es un triangulo isocles")
    }else{
        alert("La altura es de: "+ altura);
    }
}
    
    

function calcDiametro(){
    const input = document.getElementById("diametro");
    const value = Number(input.value);

    const diametro = diametroCirculo(value);
    alert("El diametro es de: " + diametro)
}

function periRad(){
    const input = document.getElementById("perimetroRad");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert("El perimetro es de: " + perimetro)
}

function periDia(){
    const input = document.getElementById("perimetroDia");
    const value = Number(input.value);

    const perimetro = value * pi;
    alert("El perimetro es de: " + perimetro)
}

function areaCir(){
    const input = document.getElementById("areaCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert("El area es de: " + area);
}
