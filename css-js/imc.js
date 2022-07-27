

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

        document.getElementById("classificacao-resultado").innerText = "Classificação indisponível.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#F8E551";

    }


}


// CLASSIFICAÇÃO POR FAIXA ETÁRIA - ADULTO/IDOSO

function classificacaoAdulto() {

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    if (imc < 18.5) {

        document.getElementById("classificacao-resultado").innerText = "Baixo peso.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#6DB5E8";

        document.getElementById("descricao").style.backgroundColor = "#6DB5E8";

        document.querySelector(".desc-adulto-bp").style.display = "block";


    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("classificacao-resultado").innerText = "Eutrofia.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#7FC494";

        document.getElementById("descricao").style.backgroundColor = "#7FC494";

        document.querySelector(".desc-adulto-normal").style.display = "block";


    } else if (imc >= 25 && imc < 30) {
        document.getElementById("classificacao-resultado").innerText = "Sobrepeso.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#F8E551";

        document.getElementById("descricao").style.backgroundColor = "#F8E551";

        document.querySelector(".desc-adulto-sp").style.display = "block";


    } else if (imc >= 30 && imc < 35) {
        document.getElementById("classificacao-resultado").innerText = "Obesidade grau I.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#FFA728";

        document.getElementById("descricao").style.backgroundColor = "#FFA728";

        document.querySelector(".desc-adulto-obI").style.display = "block";


    } else if (imc >= 35 && imc < 40) {
        document.getElementById("classificacao-resultado").innerText = "Obesidade grau II.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#FC6F41";

        document.getElementById("descricao").style.backgroundColor = "#FC6F41";

        document.querySelector(".desc-adulto-obII").style.display = "block";


    } else if (imc >= 40) {
        document.getElementById("classificacao-resultado").innerText = "Obesidade grau III / Mórbida.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#DC4E53";

        document.getElementById("descricao").style.backgroundColor = "#DC4E53";

        document.querySelector(".desc-adulto-morbida").style.display = "block";

    }

}

function classificacaoIdoso() {

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    if (imc < 23) {
        document.getElementById("classificacao-resultado").innerText = "Baixo peso.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#6DB5E8";

        document.getElementById("descricao").style.backgroundColor = "#6DB5E8";


    } else if (imc >= 23 && imc < 28) {
        document.getElementById("classificacao-resultado").innerText = "Peso normal.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#7FC494";

        document.getElementById("descricao").style.backgroundColor = "#7FC494";


    } else if (imc >= 28 && imc < 30) {
        document.getElementById("classificacao-resultado").innerText = "Sobrepeso.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#F8E551";

        document.getElementById("descricao").style.backgroundColor = "#F8E551";


    } else if (imc >= 30) {
        document.getElementById("classificacao-resultado").innerText = "Obesidade.";

        document.getElementById("classificacao-resultado").style.backgroundColor = "#FC6F41";

        document.getElementById("descricao").style.backgroundColor = "#FC6F41";

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