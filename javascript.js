class Enviar{
    constructor(){
        this.form = document.querySelector(".formulario");
        this.button = document.querySelector("#btn")
        this.resposta()
        this.sexo()
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

    sexo(){
        this.button.addEventListener("click",rd =>{
        this.rd = document.querySelector('input[name="rd"]:checked').value;

        if(this.rd==='masculino'){
            res2.innerHTML=`O seu Vo2Máx é de ${225-this.idade}`
        }else if(this.rd==='feminino'){
            res2.innerHTML=`O seu Vo2Máx é de ${220-this.idade}`
        }
        }
        
    )}


}

const enviando= new Enviar();