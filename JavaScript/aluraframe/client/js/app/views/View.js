
class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error('Template obrigatório');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}