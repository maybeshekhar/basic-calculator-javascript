// Funcionalidad de la calculadora

// Selección de elementos HTML


const btnNumero         = document.querySelectorAll(".btn-numero");
const btnBorrar         = document.querySelector(".btn-borrar");
const btnOperador       = document.querySelectorAll(".btn-operador");
const btnLimpiar        = document.querySelector(".btn-limpiar");
const btnResultado      = document.querySelector(".btn-resultado");
const pantallaReceptora = document.querySelector(".pantalla-receptora");
const pantallaPrincipal = document.querySelector(".pantalla-principal");

let numero = "";
let resultado;
btnNumero.forEach((num, i)=>{
    btnNumero[i].addEventListener("click", ()=>{
        if (numero !== "0") {
            numero = numero.concat(btnNumero[i].innerText);
            pantallaPrincipal.innerText = numero;
            console.log(numero)
        } 
        
    })
})

btnBorrar.addEventListener("click", ()=>{
    let longitud =pantallaPrincipal.innerText.length -1;
    numero = numero.slice(0, longitud);
    if (longitud == 0) {
        numero = "";
        pantallaPrincipal.innerText = "0";
    }else{
        pantallaPrincipal.innerText = numero;
    }
    
})

btnOperador.forEach((opr, i)=>{
    btnOperador[i].addEventListener("click", ()=>{
        if (numero !== "" ) {
            pantallaReceptora.innerText = numero.concat(btnOperador[i].innerText)
            pantallaPrincipal.innerText = "0";
            numero = "" 
        }
        
    })
})

btnResultado.addEventListener("click", ()=>{
    console.log(numero) 
    let numero1 = pantallaReceptora.innerText;
    let operador = numero1[numero1.length-1];
    numero1 = Number(numero1.slice(0,numero1.length-1));
    let numero2 = Number(pantallaPrincipal.innerText);
    if (operador == "+") {
        resultado = numero1 + numero2;
    }else if (operador == "-") {
        resultado = numero1 - numero2;
    }else if (operador == "*") {
        resultado = numero1 * numero2;
    }else if (operador == "/") {
        resultado = numero1 / numero2;
    }
    pantallaPrincipal.innerText = `${resultado}`
    pantallaReceptora.innerText = ""
    numero = `${resultado}`;
     
})

btnLimpiar.addEventListener("click", ()=>{
    numero = "";
    pantallaReceptora.innerText = "";
    pantallaPrincipal.innerText = "0";
})