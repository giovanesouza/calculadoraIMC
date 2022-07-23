

// FUNÇÃO CALCULAR IMC - PRINCIPAL

function calculoImc() {

    let idade = document.getElementById("idade").value;

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    let resultado = document.getElementById("resultado").innerHTML = imc.toFixed(2);

    if (idade >= 18 && idade < 60) {

        classificacaoAdulto();

    } else if (idade >= 60) {

        classificacaoIdoso();


    } else {

        document.getElementById("classificacao-resultado-calc").innerText = "Classificação indisponível.";

    }


}


// CLASSIFICAÇÃO POR FAIXA ETÁRIA - ADULTO/IDOSO

function classificacaoAdulto() {

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    if (imc < 18.5) {
        document.getElementById("classificacao-resultado-calc").innerText = "Baixo peso.";

    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("classificacao-resultado-calc").innerText = "Eutrofia.";

    } else if (imc >= 25 && imc < 30) {
        document.getElementById("classificacao-resultado-calc").innerText = "Sobrepeso.";

    } else if (imc >= 30) {
        document.getElementById("classificacao-resultado-calc").innerText = "Obesidade.";
    }

}

function classificacaoIdoso() {

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    if (imc < 23) {
        document.getElementById("classificacao-resultado-calc").innerText = "Baixo peso.";

    } else if (imc >= 23 && imc < 28) {
        document.getElementById("classificacao-resultado-calc").innerText = "Peso normal.";

    } else if (imc >= 28 && imc < 30) {
        document.getElementById("classificacao-resultado-calc").innerText = "Sobrepeso.";

    } else if (imc >= 30) {
        document.getElementById("classificacao-resultado-calc").innerText = "Obesidade.";
    }


}


// FUNÇÃO PARA CÁLCULO DE PESO IDEAL (MÉDIO)

function pesoIdeal() {

    let idade = document.getElementById("idade").value;

    let estatura = document.getElementById("est").value;

    let est2 = estatura ** 2;


    if (idade >= 18 && idade < 60) {

        let pesoideal = est2 * 21.7;

        document.getElementById("pesoI").innerHTML = "Peso ideal: " + pesoideal.toFixed(2) + " kg.";


    } else if (idade >= 60) {

        let pesoideal = est2 * 25.5;

        document.getElementById("pesoI").innerHTML = "Peso ideal: " + pesoideal.toFixed(2) + " kg.";

    } else if (idade < 18) {

        document.getElementById("pesoI").innerHTML = "Não é possível calcular o peso ideal para idade informada!";

    }


}