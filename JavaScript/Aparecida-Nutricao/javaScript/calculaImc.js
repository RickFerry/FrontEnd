const pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i <= pacientes.length; i++) {
    const paciente = pacientes[i];

    const tdPeso = paciente.querySelector('.info-peso')
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector('.info-altura');
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector('.info-imc');

    if(!validaPeso(peso)){
        tdImc.textContent = ('Peso Inválido...');
        paciente.classList.add('paciente-invalido');
    }else if(!validaAltura(altura)){
        tdImc.textContent = ('Altura Inválida...');
        paciente.classList.add('paciente-invalido');
    }else{
        const imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso <= 0 || peso >= 300){
        return false;
    }
    return true;
}

function validaAltura(altura) {
    if(altura <= 0 || altura >= 2.50){
        return false;
    }
    return true;
}

function calculaImc(peso, altura) {
    const imc = peso / (altura**2);

    return imc.toFixed(2);
}