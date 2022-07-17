



function calculoImc() {
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;
    let imc = peso / estatura ** 2;

    let resultado = document.getElementById("resultado").innerHTML = imc.toFixed(2);

}

function classificacaoImc() {

     
    if (imc < 18.5) {
        console.log("Baixo peso.").tofixed;
    
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Eutrofia.");
    
    } else if (imc >= 25 && imc < 30) {
        console.log("Sobrepeso.");
    
    } else if (imc >= 30) {
        console.log("Obesidade.");
    }
}