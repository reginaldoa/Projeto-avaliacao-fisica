class Enviar{
    constructor(){
        this.form = document.querySelector(".formulario");
        this.button = document.querySelector("#btn")
        this.resposta()
    }

    resposta(){
        this.button.addEventListener("click",e =>{
            e.preventDefault()
            const res =document.querySelector("#res")
            return res.innerHTML=`O seu imc é de ${this.imc().toFixed(2)}`
        })
    }

    imc(){
        this.idade = document.querySelector("#idade").value;
        this.peso = document.querySelector("#peso").value;
        this.altura = document.querySelector("#altura").value;
        this.pesocomVIRGULA = parseFloat(this.peso.replace(',','.'));
        this.alturacomVIRGULA = parseFloat(this.altura.replace(',','.'));
        let respostaimc = this.pesocomVIRGULA/(this.alturacomVIRGULA*this.alturacomVIRGULA);

        if(!Number(this.peso) || (!Number(this.altura)) || this.idade===''){ alert('Todos os campos devem ser preenchidos. Altura e peso devem ser preenchidos com números')}

        return respostaimc;
    }
}

const enviando= new Enviar();


