class Pessoa{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class Cinema{
    assentos: Map<number, Pessoa>;
    nomes: Map<string, number>;

    constructor(public quant: number){
        this.assentos = new Map<number, Pessoa>();
        this.nomes = new Map<string, number>();
    }

    reserva(lugar: number, pessoa: Pessoa){
        //let ocupado = this.assentos.get(lugar)
        if (this.assentos.has(lugar)){
            console.log("assento ocupado");
            return;
        }
        if (this.nomes.has(pessoa.nome)){
            console.log(" a pesoa ja está no cinema");
            return;
        }
        this.assentos.set(lugar, pessoa);
        this.nomes.set(pessoa.nome, lugar);
    }


    cancelar(nome: string){
        if (!this.nomes.has(nome)){
            console.log("essa pessoa não foi encontrada");
            return;
        }
        let key = this.nomes.get(nome);
        this.assentos.delete(key);
        this.nomes.delete(nome);
    }

    toString(){
        for(let i = 0; i < this.quant; i++){
            let result = "";
            if (this.assentos.has(i)) {
                let pessoa =  this.assentos.get(i);
                result += pessoa.name + " ";
            }else{
                result += "- ";
            }
        }
    }
}