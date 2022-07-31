

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


// CLASSIFICAÇÃO POR FAIXA ETÁRIA - ADULTO

function classificacaoAdulto() {

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;


    // BAIXO PESO

    if (imc < 18.5) {

        limparDescricao();

        document.querySelector('.desc-adulto-bp').style.display = "block";

        document.getElementById("descricao").style.backgroundColor = "#6DB5E8";


    //EUTROFIA
    } else if (imc >= 18.5 && imc < 25) {

        limparDescricao();

        document.querySelector('.desc-adulto-normal').style.display = "block";

        document.getElementById("descricao").style.backgroundColor = "#7FC494";


    // SOBREPESO
    } else if (imc >= 25 && imc < 30) {

        limparDescricao();

        document.querySelector('.desc-adulto-sp').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#F8E551";


    // OBESIDADE I
    } else if (imc >= 30 && imc < 35) {

        limparDescricao();

        document.querySelector('.desc-adulto-obI').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#FFA728";


    // OBESIDADE II
    } else if (imc >= 35 && imc < 40) {

        limparDescricao();

        document.querySelector('.desc-adulto-obII').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#FC6F41";


    // OBESIDADE MÓRBIDA
    } else if (imc >= 40) {

        limparDescricao();

        document.querySelector('.desc-adulto-morbida ').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#DC4E53";

    }

}


// CLASSIFICAÇÃO POR FAIXA ETÁRIA - IDOSO
function classificacaoIdoso() {

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    if (imc < 23) {     

        limparDescricao();

        document.querySelector('.desc-idoso-bp').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#6DB5E8";   


    } else if (imc >= 23 && imc < 28) {

        limparDescricao();

        document.querySelector('.desc-idoso-normal').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#7FC494";   



    } else if (imc >= 28 && imc < 30) {

        limparDescricao();

        document.querySelector('.desc-idoso-sp').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#F8E551";   



    } else if (imc >= 30) {


        limparDescricao();

        document.querySelector('.desc-idoso-ob').style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#FC6F41";   

        
    }


}



// DESCRIÇÃO


function limparDescricao() {
    document.querySelector('.desc-adulto-bp').style.display = "none";
    document.querySelector('.desc-adulto-normal').style.display = "none";
    document.querySelector('.desc-adulto-sp').style.display = "none";
    document.querySelector('.desc-adulto-obI').style.display = "none";
    document.querySelector('.desc-adulto-obII').style.display = "none";
    document.querySelector('.desc-adulto-morbida').style.display = "none";


    document.querySelector('.desc-idoso-bp').style.display = "none";
    document.querySelector('.desc-idoso-normal').style.display = "none";
    document.querySelector('.desc-idoso-sp').style.display = "none";
    document.querySelector('.desc-idoso-ob').style.display = "none";

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