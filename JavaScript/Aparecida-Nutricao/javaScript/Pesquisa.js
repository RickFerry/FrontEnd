const filtro = document.querySelector('#filtroTabela');

filtro.addEventListener('input', function(){
    const paciente = document.querySelectorAll('.paciente');

    if(this.value.length > 0) {
        for (let i = 0; i < paciente.length; i++) {
            const pacientes = paciente[i];
            const tdNome = pacientes.querySelector('.info-nome');
            const nome = tdNome.textContent;
            const expReg = new RegExp(this.value, 'i');
            if(!expReg.test(nome)){
                pacientes.classList.add('invisivel');
            }else{
                pacientes.classList.remove('invisivel');
            }
        }
    }else{
        for(let i = 0; i < paciente.length; i++){
            const pacientes = paciente[i];
            pacientes.classList.remove('invisivel');
        }
    }
});
