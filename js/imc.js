
// setTimeout(function () {
//     const nome = prompt("Por favor, digite seu nome: ");

//     if (nome == "" || nome == null) {
//         document.getElementById("welcome").innerHTML = `Olá, Ser saudável, Seja bem vindo(a)!`;
//     } else {
//         document.getElementById("welcome").innerHTML = `Olá, ${nome}, Seja bem vindo(a)!`;
//     }

// }, 2000);


function verificarCamposIMC() {

    let idade = document.getElementById("idade").value;

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let validadorImc = document.getElementById("verificarCamposImc");

    if (idade == "") {

        validadorImc.style.display = "block";
        validadorImc.innerHTML = "&#10008; Necessário preencher o campo IDADE!";
        document.getElementById("descricao").style.visibility = "hidden";

    } else if (peso == "") {

        validadorImc.innerHTML = "&#10008; Necessário preencher o campo PESO!";
        document.getElementById("descricao").style.visibility = "hidden";


    } else if (estatura == "") {

        validadorImc.innerHTML = "&#10008; Necessário preencher o campo ESTATURA!";
        document.getElementById("descricao").style.visibility = "hidden";


    } else {
        validadorImc.style.display = "none";
        document.getElementById("descricao").style.visibility = "visible";

    }
    

}

function removerValidadorImc() {

    let validadorImc = document.getElementById("verificarCamposImc");
    validadorImc.style.display = "none";
    let resultado = document.getElementById("resultado").innerHTML = "0.00";
    document.getElementById("descricao").style.visibility = "hidden";
    document.querySelector(".classificacao").innerHTML = "<strong>CLASSIFICAÇÃO:</strong>";

}


// FUNÇÃO CALCULAR IMC - PRINCIPAL

function calculoImc() {

    let idade = document.getElementById("idade").value;

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    let resultado = document.getElementById("resultado").innerHTML = imc.toFixed(2);

    verificarCamposIMC();

    if (idade < 18) {

        classificacaoCriancaAdoles();

    } else if (idade >= 18 && idade < 60) {

        classificacaoAdulto();


    } else if (idade >= 60) {

        classificacaoIdoso();

    }

}


// CLASSIFICAÇÃO POR FAIXA ETÁRIA - CRIANÇA / ADOLESCENTE

function classificacaoCriancaAdoles() {

    let idade = document.getElementById("idade").value;

    if (idade < 18 && idade !== "") {

        limparDescricao();
        document.querySelector(".desc-crianca-adoles").style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#F8E551";

        document.querySelector(".classificacao").innerHTML = "<strong>CLASSIFICAÇÃO CRIANÇA / ADOLESCENTE:</strong>";

    }
}


// CLASSIFICAÇÃO POR FAIXA ETÁRIA - ADULTO

function classificacaoAdulto() {

    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("est").value;

    let imc = peso / estatura ** 2;

    document.querySelector(".classificacao").innerHTML = "<strong>CLASSIFICAÇÃO ADULTO:</strong>";

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

    document.querySelector(".classificacao").innerHTML = "<strong>CLASSIFICAÇÃO IDOSO:</strong>";

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

    document.querySelector('.desc-crianca-adoles').style.display = "none";

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

        let pesoIdealMinimo = est2 * 18.5;
        let pesoIdealMedio = est2 * 21.7;
        let pesoIdealMaximo = est2 * 24.9;

        document.getElementById("pesoMinI").innerHTML = "Peso ideal (mínimo): " + pesoIdealMinimo.toFixed(2) + " kg.";

        document.getElementById("pesoMinI").style.display = "block";


        document.getElementById("pesoMedI").innerHTML = "Peso ideal (médio): " + pesoIdealMedio.toFixed(2) + " kg.";
        document.getElementById("pesoMedI").style.display = "block";


        document.getElementById("pesoMaxI").innerHTML = "Peso ideal (máximo): " + pesoIdealMaximo.toFixed(2) + " kg.";
        document.getElementById("pesoMaxI").style.display = "block";

        ganharPerderAdulto();


    } else if (idade >= 60) {

        let pesoIdealMinimo = est2 * 23;
        let pesoIdealMedio = est2 * 25.5;
        let pesoIdealMaximo = est2 * 27.9;

        document.getElementById("pesoMinI").innerHTML = "Peso ideal (mínimo): " + pesoIdealMinimo.toFixed(2) + " kg.";

        document.getElementById("pesoMinI").style.display = "block";


        document.getElementById("pesoMedI").innerHTML = "Peso ideal (médio): " + pesoIdealMedio.toFixed(2) + " kg.";
        document.getElementById("pesoMedI").style.display = "block";


        document.getElementById("pesoMaxI").innerHTML = "Peso ideal (máximo): " + pesoIdealMaximo.toFixed(2) + " kg.";
        document.getElementById("pesoMaxI").style.display = "block";

        ganharPerderIdoso();

    } else {

        document.getElementById("pesoMinI").style.display = "none";
        document.getElementById("pesoMedI").style.display = "none";
        document.getElementById("pesoMaxI").style.display = "none";
        let diferencaAtualMedio = document.getElementById("diferencaAtualMedio").style.display = "none";

    }


}

function ganharPerderAdulto() {

    let peso = document.getElementById("peso").value;

    let estatura = document.getElementById("est").value;

    let est2 = estatura ** 2;

    let pesoIdealMedio = est2 * 21.7;
    let diferenca = Math.abs(pesoIdealMedio - peso);

    let diferencaAtualMedio = document.getElementById("diferencaAtualMedio");


    if (pesoIdealMedio > peso) {

        diferencaAtualMedio.innerHTML = `Você precisa <strong>GANHAR</strong> ${diferenca.toFixed(2)} Kg para atingir o seu peso médio ideal.`;

        diferencaAtualMedio.style.display = "block";
        diferencaAtualMedio.style.backgroundColor = "#17A481";
        diferencaAtualMedio.style.color = "#fff";



    } else if (pesoIdealMedio < peso) {

        diferencaAtualMedio.innerHTML = `Você precisa <strong>PERDER</strong> ${diferenca.toFixed(2)} Kg  para atingir o seu peso médio ideal.`;

        diferencaAtualMedio.style.display = "block";
        diferencaAtualMedio.style.backgroundColor = "#E24E4E";
        diferencaAtualMedio.style.color = "#fff";

    }

}

function ganharPerderIdoso() {

    let peso = document.getElementById("peso").value;

    let estatura = document.getElementById("est").value;

    let est2 = estatura ** 2;

    let pesoIdealMedio = est2 * 25.5;
    let diferenca = Math.abs(pesoIdealMedio - peso);

    let diferencaAtualMedio = document.getElementById("diferencaAtualMedio");


    if (pesoIdealMedio > peso) {

        diferencaAtualMedio.innerHTML = `Você precisa <strong>GANHAR</strong> ${diferenca.toFixed(2)} Kg para atingir o seu peso médio ideal.`;

        diferencaAtualMedio.style.display = "block";
        diferencaAtualMedio.style.backgroundColor = "#17A481";
        diferencaAtualMedio.style.color = "#fff";



    } else if (pesoIdealMedio < peso) {

        diferencaAtualMedio.innerHTML = `Você precisa <strong>PERDER</strong> ${diferenca.toFixed(2)} Kg  para atingir o seu peso médio ideal.`;

        diferencaAtualMedio.style.display = "block";
        diferencaAtualMedio.style.backgroundColor = "#E24E4E";
        diferencaAtualMedio.style.color = "#fff";

    }


}

