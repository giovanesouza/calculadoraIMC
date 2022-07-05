function calc_imc () {

    let massa = document.getElementById("peso");
    
    let estatura = document.getElementById("est");
    
    let imc = massa / (estatura ** 2);
    
    let resultado = document.getElementById("resultado"). innerHTML = imc;
    
    }