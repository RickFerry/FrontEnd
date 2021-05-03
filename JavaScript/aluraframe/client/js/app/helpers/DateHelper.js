class DateHelper{

    constructor(){
        throw new Error('Classe não instanciavel...')
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Formato correto é aaaa-mm-dd')
            
        return new Date(...texto.split('-').map((d, i) => d - i % 2));
    }
}