
function calc_imc () {

    let massa = document.getElementById('peso').value; 
    let estatura = document.getElementById('est').value;
    let imc = massa / (estatura ** 2);
    let resultado = document.getElementById('resultado');

    resultado = imc;
  
}

