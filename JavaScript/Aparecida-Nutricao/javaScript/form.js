const btnAdicionar = document.querySelector('.btn-principal');
btnAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');
    const paciente = extraiValoresForm(form);

    if(validaPaciente(paciente)){
        adicionaNaTabela(paciente);
        form.reset();
    }else{
        alert('Dados inconsistentes!!!...');
        form.reset();
    }
});

function adicionaNaTabela(paciente){
    const pacienteTr = montaPaciente(paciente);
    const tabela = document.querySelector('#tabela-pacientes');
    tabela.append(pacienteTr);
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso) && validaAltura(paciente.altura)
        && paciente.nome != '' && paciente.gordura != 0){
        return true;
    }
    return false;
}

function extraiValoresForm(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaPaciente(paciente) {
    const pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.append(criaTd(paciente.nome, 'info-nome'), criaTd(paciente.peso, 'info-peso'), criaTd(paciente.altura, 'info-altura'),
        criaTd(paciente.gordura, 'info-gordura'), criaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function criaTd(dado, classe) {
    const td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}