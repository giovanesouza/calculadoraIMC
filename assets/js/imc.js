let idade = document.getElementById("idade");
let peso = document.getElementById("peso");
let estatura = document.getElementById("est");
let validadorImc = document.getElementById("verificarCamposImc");
let classificacao = document.querySelector(".classificacao");
let est2 = 0;
let imc = 0;


// Calcula o IMC
function calculoImc(peso, estatura) {
  
   imc = (peso / (estatura * estatura).toFixed(2)).toFixed(2);

  // Retorna o valor do IMC no HTML
  return document.getElementById("resultado").innerHTML = imc;
}


function verificarCamposIMC() {

  if (idade.value == "") {
    validadorImc.style.display = "block";
    validadorImc.innerHTML = "&#10008; Necessário preencher o campo IDADE!";

    document.getElementById("resultado").innerHTML = "0.00";
    document.getElementById("descricao").style.visibility = "hidden";
  } else if (peso.value == "") {
    validadorImc.style.display = "block";
    validadorImc.innerHTML = "&#10008; Necessário preencher o campo PESO!";

    document.getElementById("resultado").innerHTML = "0.00";
    document.getElementById("descricao").style.visibility = "hidden";
  } else if (estatura.value == "") {
    validadorImc.style.display = "block";
    validadorImc.innerHTML = "&#10008; Necessário preencher o campo ESTATURA!";

    document.getElementById("resultado").innerHTML = "0.00";
    document.getElementById("descricao").style.visibility = "hidden";
  } else {
    validadorImc.style.display = "none";
    document.getElementById("descricao").style.visibility = "visible";
  }


    // Chama a função de IMC
    calculoImc(peso.value, estatura.value);

    // Exibe a classificação conforme idade
    if (idade.value < 18) {

        classificacaoCriancaAdoles();

    } else if (idade.value >= 18 && idade.value < 60) {
        classificacaoAdulto();

    } else if (idade.value >= 60) {
        classificacaoIdoso();
    }

}



// CLASSIFICAÇÃO POR FAIXA ETÁRIA - CRIANÇA / ADOLESCENTE
function classificacaoCriancaAdoles() {

    if (idade.value < 18 && idade.value !== "") {
        limparDescricao();
        document.querySelector(".desc-crianca-adoles").style.display = "block";
        document.getElementById("descricao").style.backgroundColor = "#F8E551";

        classificacao.innerHTML = "<strong>CLASSIFICAÇÃO CRIANÇA / ADOLESCENTE:</strong>";
    }
}



// CLASSIFICAÇÃO POR FAIXA ETÁRIA - ADULTO
function classificacaoAdulto() {

    classificacao.innerHTML = "<strong>CLASSIFICAÇÃO ADULTO:</strong>";

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

    classificacao.innerHTML = "<strong>CLASSIFICAÇÃO IDOSO:</strong>";

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

    est2 = estatura.value ** 2;

    if (idade.value >= 18 && idade.value < 60 && estatura.value !== "") {

        let pesoIdealMinimo = est2 * 18.5;
        let pesoIdealMedio = est2 * 21.7;
        let pesoIdealMaximo = est2 * 24.99;

        document.getElementById("pesoMinI").innerHTML = "Peso ideal (mínimo): " + pesoIdealMinimo.toFixed(2) + " kg.";

        document.getElementById("pesoMinI").style.display = "block";

        document.getElementById("pesoMedI").innerHTML = "Peso ideal (médio): " + pesoIdealMedio.toFixed(2) + " kg.";
        document.getElementById("pesoMedI").style.display = "block";

        document.getElementById("pesoMaxI").innerHTML = "Peso ideal (máximo): " + pesoIdealMaximo.toFixed(2) + " kg.";
        document.getElementById("pesoMaxI").style.display = "block";

        ganharPerderPeso(idade.value);


    } else if (idade.value >= 60 && estatura.value !== "") {

        let pesoIdealMinimo = est2 * 23;
        let pesoIdealMedio = est2 * 25.5;
        let pesoIdealMaximo = est2 * 27.99;

        document.getElementById("pesoMinI").innerHTML = "Peso ideal (mínimo): " + pesoIdealMinimo.toFixed(2) + " kg.";

        document.getElementById("pesoMinI").style.display = "block";


        document.getElementById("pesoMedI").innerHTML = "Peso ideal (médio): " + pesoIdealMedio.toFixed(2) + " kg.";
        document.getElementById("pesoMedI").style.display = "block";


        document.getElementById("pesoMaxI").innerHTML = "Peso ideal (máximo): " + pesoIdealMaximo.toFixed(2) + " kg.";
        document.getElementById("pesoMaxI").style.display = "block";

       ganharPerderPeso(idade.value);

    } else {
        ganharPerderPeso(idade.value);
        document.getElementById("pesoMinI").style.display = "none";
        document.getElementById("pesoMedI").style.display = "none";
        document.getElementById("pesoMaxI").style.display = "none";
        document.getElementById("diferencaAtualMedio").style.visibility = "hidden";
    }

}


function removerValidadorImc() {

    validadorImc.style.display = "none";
    
    document.getElementById("resultado").innerHTML = "0.00";
    document.getElementById("descricao").style.visibility = "hidden";
    document.querySelector(".classificacao").innerHTML = "<strong>CLASSIFICAÇÃO:</strong>";

}


// FUNÇÃO PARA CALCULAR QUANTO DE PESO PRECISA GANHAR OU PERDER - Serve para adulto e idoso
function ganharPerderPeso(idade) {

    let diferencaAtualMedio = document.getElementById("diferencaAtualMedio");
    est2 = estatura.value ** 2;

    if(idade >= 18 && idade < 60) {
        let pesoIdealMedio = est2 * 21.7;
        let diferenca = Math.abs(pesoIdealMedio - peso.value);
    
        if (pesoIdealMedio > peso.value && peso.value !== "") {

            diferencaAtualMedio.innerHTML = `Você precisa <strong>GANHAR</strong> ${diferenca.toFixed(2)} Kg para atingir o seu peso médio ideal.`;
    
            diferencaAtualMedio.style.visibility = "visible";
            diferencaAtualMedio.style.backgroundColor = "#17A481";
            diferencaAtualMedio.style.color = "#fff";
    
    
        } else if (pesoIdealMedio < peso.value && peso.value !== "") {
    
            diferencaAtualMedio.innerHTML = `Você precisa <strong>PERDER</strong> ${diferenca.toFixed(2)} Kg  para atingir o seu peso médio ideal.`;
    
            diferencaAtualMedio.style.visibility = "visible";
            diferencaAtualMedio.style.backgroundColor = "#E24E4E";
            diferencaAtualMedio.style.color = "#fff";
    
        } else {
            diferencaAtualMedio.style.visibility = "hidden";
        }

    } else if (idade >= 60) {

        let pesoIdealMedio = est2 * 25.5;
        let diferenca = Math.abs(pesoIdealMedio - peso.value);

        if (pesoIdealMedio > peso.value && peso.value !== "") {

            diferencaAtualMedio.innerHTML = `Você precisa <strong>GANHAR</strong> ${diferenca.toFixed(2)} Kg para atingir o seu peso médio ideal.`;
    
            diferencaAtualMedio.style.visibility = "visible";
            diferencaAtualMedio.style.backgroundColor = "#17A481";
            diferencaAtualMedio.style.color = "#fff";
        
        } else if (pesoIdealMedio < peso.value && peso.value !== "") {
    
            diferencaAtualMedio.innerHTML = `Você precisa <strong>PERDER</strong> ${diferenca.toFixed(2)} Kg  para atingir o seu peso médio ideal.`;
    
            diferencaAtualMedio.style.visibility = "visible";
            diferencaAtualMedio.style.backgroundColor = "#E24E4E";
            diferencaAtualMedio.style.color = "#fff";
    
        } else {
            diferencaAtualMedio.style.visibility = "hidden";  
        }

    } else {
        alert(`Não é possível calcular para a idade informada: ${idade} anos.`);
    }

}


setTimeout(function () {
  const nome = prompt("Por favor, digite seu nome: ");

  if (nome == "" || nome == null) {
    document.getElementById(
      "welcome"
    ).innerHTML = `Olá, Ser saudável, Seja bem vindo(a)!`;
  } else {
    document.getElementById(
      "welcome"
    ).innerHTML = `Olá, ${nome}, Seja bem vindo(a)!`;
  }
}, 2000);
