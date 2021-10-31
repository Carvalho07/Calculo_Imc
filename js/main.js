
function calculaIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    let imc = peso / (altura * altura);

    retornaMagreza(imc);
    
}

function retornaMagreza(imc){
    if(imc < 18.5){
        document.getElementById("resposta").innerHTML = "Seu IMC é de " + imc + ". Voce está na classificação de MAGREZA";
    }else{
        retornaNormal(imc);
    }
}

function retornaNormal(imc){
    if(imc >= 18.5 && imc <= 24.9){
        document.getElementById("resposta").innerHTML = "Seu IMC é de " + imc + ". Voce está na classificação de NORMAL";
    }else{
        retornaSobrepeso(imc);
    }
}

function retornaSobrepeso(imc){
    if(imc > 24.9 && imc < 29.9){
        document.getElementById("resposta").innerHTML = "Seu IMC é de " + imc + ". Voce está na classificação de SOBREPESO";
    }else{
        retornaObesidade(imc);
    }
}

function retornaObesidade(imc){
    if(imc > 29.9 && imc < 39.9){
        document.getElementById("resposta").innerHTML = "Seu IMC é de " + imc + ". Voce está na classificação de OBESIDADE";
    }else{
        document.getElementById("resposta").innerHTML = "TA FUDIDO NEGÃO!!";
    }
}

calculaIMC(peso, altura);