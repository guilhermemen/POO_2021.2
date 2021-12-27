class Pessoa{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

   public toString(){
        return this.nome
    }
}

class Banco{
    caixas: Pessoa[] | null;
    filaEspera: Pessoa[];

    constructor(qtdCaixas: number){
        this.caixas = [];
        for(let i = 0; i < qtdCaixas; i++) {
            this.caixas.push();
        }
        this.filaEspera = [];
    }

    chegarPessoa(pessoa: Pessoa){
        this.filaEspera.push(pessoa);
    }

    chamarCaixa(caixa: number): boolean{
        if (ind < 0 || ind >= this.caixas.length) {
            console.log("indice não existe");
            return false;
        }
    }

    finalizarAtend(caixa: number): boolean{
        if (ind < 0 || ind >= this.caixas.length) {
            console.log("indice não existe");
            return false;
        }
        if(this.caixas[ind] == null){
            console.log("caixa vazio")
        }
    }

    public toString() {
        let str = "caixas: | ";
        for (let i = 0; i < this.caixas.length; i++) {
            let pessoa = this.caixas[i];
            str += i + ": ";
            //str += pessoa !== null ? pessoa.toString : "----";
            if (pessoa == null) {
                str += "vazio";
            } else {
                str += pessoa.toString();
            }
            str += " |";
        }
        str += "\n espera: ";
        for (let pessoa of this.filaEspera) {
            str += pessoa.toString() + " ";
        }
        return str;
    }
}

let banco = new Banco(4);