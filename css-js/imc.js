
const nome = prompt("Por favor, digite seu nome: ");
document.getElementById("welcome").innerHTML = `Olá, ${nome}, Seja bem vindo(a)!`;


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

        let pesoIdealMinimo = est2 * 18.5;
        let pesoIdealMedio = est2 * 21.7;
        let pesoIdealMaximo = est2 * 24.9;

        ganharPerderAdulto();

        document.getElementById("pesoMinI").innerHTML = "Peso ideal (mínimo): " + pesoIdealMinimo.toFixed(2) + " kg.";

        document.getElementById("pesoMinI").style.display = "block";


        document.getElementById("pesoMedI").innerHTML = "Peso ideal (médio): " + pesoIdealMedio.toFixed(2) + " kg.";
        document.getElementById("pesoMedI").style.display = "block";


        document.getElementById("pesoMaxI").innerHTML = "Peso ideal (máximo): " + pesoIdealMaximo.toFixed(2) + " kg.";
        document.getElementById("pesoMaxI").style.display = "block";


    } else if (idade >= 60) {

        let pesoideal = est2 * 25.5;

        document.getElementById("pesoMedI").innerHTML = "Peso ideal: " + pesoIdealMedio.toFixed(2) + " kg.";


    } 


}

function ganharPerderAdulto() {

    let peso = document.getElementById("peso").value;

    let estatura = document.getElementById("est").value;
   
    let est2 = estatura ** 2;

    let pesoIdealMedio = est2 * 21.7;
    let diferenca = Math.abs(pesoIdealMedio - peso);

    var diferencaAtualMedio = document.getElementById("diferencaAtualMedio");


    if (pesoIdealMedio > peso) {
        
        diferencaAtualMedio.innerHTML = `Você precisa <strong>GANHAR</strong> ${diferenca.toFixed(2)} Kg para atingir o seu peso médio ideal.`;

        diferencaAtualMedio.style.backgroundColor = "#17A481";
        diferencaAtualMedio.style.color = "#fff";



    } else if (pesoIdealMedio < peso) {

        diferencaAtualMedio.innerHTML = `Você precisa <strong>PERDER</strong> ${diferenca.toFixed(2)} Kg  para atingir o seu peso médio ideal.`;

        diferencaAtualMedio.style.backgroundColor = "#E24E4E";
        diferencaAtualMedio.style.color = "#fff";

    }


}