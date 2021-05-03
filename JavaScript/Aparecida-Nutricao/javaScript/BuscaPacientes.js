const btAdicionar = document.querySelector('#buscar-paciente');

btAdicionar.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionaNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();
});